(function($){
    $(function(){
        let lastPage = '';
        // 1. get request to grab random post and append to the DOM
        $('#new-quote-button').on('click', function(event) {
        // add a click event for the get a new post on the "show me another" button and run the ajax below
            event.preventDefault();
            lastPage = document.URL;

            $.ajax({
                method: "GET",
                url: qod_vars.rest_url + 'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
                // url: // API Vars.rest_url +  wp-json/wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1
            }).done(function(data){

                const post = data[0];
                console.log(post);
                history.pushState(null,null, qod_vars.home_url + '/' + post.slug);
                // 1st value is object to manage state 2nd value is url title for browser tab
                $('.entry-content p').html(post.content.rendered);
                $('.entry-title').html("&mdash; " + post.title.rendered);
                if(post._qod_quote_source_url == ''){
                    if(post._qod_quote_source != '') {
                        $('.source').html(' ,' + post._qod_quote_source);
                    } else {
                        $('.source').html('');
                    }
                } else {
                    $('.source').html(', <a href="' + post._qod_quote_source_url + '">' + post._qod_quote_source + '</a>')
                }
                // window.location.replace(data[0].link);
            }).fail(function(error){
                console.log("An Error has occured!", error);
            })
            $(window).on('popstate',function(){
                // update the url
                window.location.replace(lastPage);
            });
        });
        // 2. posta new quote using the post method
        $('#quote-submission-form').on('submit',function(event){
            event.preventDefault();
            $.ajax({
                method: "POST",
                url: qod_vars.rest_url + '/wp/v2/posts/',
                data: {
                    title: $('#quote-author').val(),
                    content: $('#quote-content').val(),
                    _qod_quote_source: $('#quote-source').val(),
                    _qod_quote_source_url: $('#quote-source-url').val(),
                    
                },
                beforeSend: function(submission){
                    submission.setRequestHeader( 'X-WP-Nonce', qod_vars.nonce );
                },
            }).done(function(){
                $("#submit-success-message").text("Thank you for your submission!");
            }).fail(function(){
                $("#submit-success-message").text("Sorry something went wrong.");
            })
        });
        // using a form to submit a quote so a .submit event
    });
})(jQuery)