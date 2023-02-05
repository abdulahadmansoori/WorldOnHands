// https://api.opensea.io/api/v1/assets?format=json
$(document).ready(function () {
    let nfts = $(".nfts").html(); 
    $.ajax({
        type: "GET",
        url: "https://api.opensea.io/api/v1/assets?format=json",
        dataType: "JSON",
        success: function (response) {
            response.assets.forEach(element => {
                $(".nfts").html(nfts += `
                <div class='col-md-4'>
                    <img class='w-100' src='${element.collection.image_url}' />
                    <h4 class='text-center'>${element.collection.name}</h4>
                </div>
                `);
                // console.log(element);
            });
            // console.log(response);
        },
        error: function (response) {
            console.log(response);
        }
    });
});

// https://api.hiztory.org/aviation/02/05/3/15/api.xml