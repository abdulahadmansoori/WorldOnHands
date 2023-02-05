$(document).ready(function () {
    let days = $(".days").html(); 
    $.ajax({
        type: "GET",
        url: "https://date.nager.at/api/v2/publicholidays/2023/US",
        dataType: "JSON",
        success: function (response) {
            response.forEach(element => {
                $(".days").html(days += `
                <tr>
                    <td>${element.localName}</td>
                    <td>${element.name}</td>
                    <td>${element.date}</td>
                </tr>
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