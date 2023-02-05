$(document).ready(function () {
    let news = $(".news").html(); 
    // $.ajax({
    //     type: "GET",
    //     url: "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=29c9ac5ae717454592464a9538c0d6d4",
    //     dataType: "JSON",
    //     success: function (response) {
    //         response.articles.forEach(element => {
    //             $(".news").html(news += `
    //             <div class='col-md-4'>
    //                 <img class='w-100' src='${element.urlToImage}' />
    //                 <h4>${element.title}</h4>
    //                 <p>${element.content} <a href='${element.url}' target='_blank'>more</a></p>
    //             </div>
    //             `);
    //             // console.log(element);
    //         });
    //     },
    //     error: function (response) {
    //         console.log(response);
        // }https://apipheny.io/free-api/
    // });
    $("#moreJokes").hide();
    var count = 1;
$("#getJoke, #moreJokes").on("click", function() {
    var jokes = $("#jokes").html();
    $.ajax({
        type: "GET",
        url: 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious&type=twopart',
        dataType: "JSON",
        success: function (response) {
            $("#jokes").html(jokes +=`
                <div>
                    <p class='fw-semibold'>${count}) ${response.setup}</p>
                    <p class=''>${response.delivery}</p>
                </div>
            `);
        console.log(response);
        $("#getJoke").hide();
        $("#moreJokes").show();
        count++;
        }
    });
});
// https://v2.jokeapi.dev/
    
    // $.ajax({
    //     type: "GET",
    //     url: 'http://api.mediastack.com/v1/news?access_key=64da30206689d07ca440165871fc3ae8&keywords=tennis&countries=us,gb,de',
    //     dataType: "JSON",
    //     success: function (response) {
    //     console.log(response);
    //     }
    // });

});