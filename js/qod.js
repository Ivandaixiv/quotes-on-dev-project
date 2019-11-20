(function($){
    // 1. get request to grab random post and append to the DOM

    // add a click event for the get a new post on the "show me another" button and run the ajax below
    $.ajax({
        method: "GET",
        // url: // API Vars.rest_url +  wp-json/wp/v2/posts?filter[orderby]=rand$filter[posts_per_page]=1
    }).done(function(data){
        console.log(data);
    }).fail(function(error){
        console.log("An Error has occured!", error) 
    })
    // 2. posta new quote using the post method
    // using a form to submit a quote so a .submit event
})(jQuery)