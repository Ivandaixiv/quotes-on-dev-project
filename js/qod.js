(function($){
    // 1. get request to grab random post and append to the DOM
    $('#new-quote-button').on('click', function(event) {
    // add a click event for the get a new post on the "show me another" button and run the ajax below
        $.ajax({
            method: "GET",
            url: 'http://localhost:8888/QuotesOnDev/wp-json/wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
            // url: // API Vars.rest_url +  wp-json/wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1
        }).done(function(data){
            console.log(data);
            event.preventDefault();
            // console.log(data[0].link);
            window.location.replace(data[0].link);
        }).fail(function(error){
            console.log("An Error has occured!", error);
        })
    });
    // 2. posta new quote using the post method
    // using a form to submit a quote so a .submit event
})(jQuery)