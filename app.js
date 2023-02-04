$(document).ready(function () {
    let news = $(".news").html(); 

    $.ajax({
        type: "GET",
        url: 'http://api.mediastack.com/v1/news?access_key=64da30206689d07ca440165871fc3ae8&keywords=tennis&countries=us,gb,de',
        dataType: "JSON",
        success: function (response) {
        console.log(response);
        }
    });

});