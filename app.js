$(document).ready(function () {
    let news = $(".news").html(); 
    $.ajax({
        type: "GET",
        url: "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=29c9ac5ae717454592464a9538c0d6d4",
        dataType: "JSON",
        success: function (response) {
            response.articles.forEach(element => {
                $(".news").html(news += `
                <div class='col-md-4'>
                    <img class='w-100' src='${element.urlToImage}' />
                    <h4>${element.title}</h4>
                    <p>${element.content} <a href='${element.url}' target='_blank'>more</a></p>
                </div>
                `);
                console.log(element);
            });
        },
        error: function (response) {
            console.log(response);
        }
    });
});