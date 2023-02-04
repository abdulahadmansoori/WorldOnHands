$(document).ready(function () {
    let memes = $(".memes").html(); 
    $.ajax({
        type: "GET",
        url: "https://api.imgflip.com/get_memes",
        dataType: "JSON",
        success: function (response) {
            response.data.memes.forEach(element => {
                $(".memes").html(memes += `
                <div class='col-md-4'>
                    <img class='w-100' src='${element.url}' />
                    <h4 class='text-center'>${element.name}</h4>
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