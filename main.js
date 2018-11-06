var gifs = ["Cat", "Dog", "Dragon", "Lion"];
console.log('gifs', gifs)

function displayGifInfo() {
    var gif = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=ei7S1AwB9xAo4NRGNVKj1nzE1gBqKoVA&q=" + gif + "&limit=5&offset=0&rating=G&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        // console.log(response);
        // console.log('response.data', response.data[0].rating);
        // console.log('response.data', response.data);
        var gifHold = $("#gifs-view");

        $.each(response.data, function(index, obj) {
            gifHold.append('<div id="rating">Rating: ' + obj.rating);
            gifHold.append('<img id="img" src = "' + obj.images.original.url + '">');
            console.log(obj.images.original.url)
        })
        // console.log(response.rating);
        // gifHold.append('<div id="rating">Rating: ' + obj.rating);
        // gifHold.append('<img id="img" src = "' + obj.images + '">');
    });
}

function renderBtn() {
    $("#button1").empty();
    for (var i = 0; i <gifs.length; i++) {
        var a = $("<button>");
        a.addClass("gif");
        a.attr("data-name", gifs[i]);
        a.text(gifs[i]);
        $("#button1").append(a);
    }
}

$("#add-gif").on("click", function(event) {
    event.preventDefault();
    console.log('in click')

    var gif = $("#gif-input").val().trim();
    console.log('gif', gif)
    
    gifs.push(gif);
    renderBtn()
});

$(document).on("click", ".gif", displayGifInfo);

renderBtn();