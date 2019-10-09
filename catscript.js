/* global fetch */

var pictureArray = [];
var futureArray = [];

document.getElementById("backButton").disabled = true;

document.getElementById("catButton").addEventListener("click", function(event) {
    var pictureNode = document.getElementById("catPic");
    if (!futureArray.length) {
        const url = "https://api.thecatapi.com/v1/images/search";
        fetch(url)
            .then(function(results) {
                return results.json();
            })
            .then(function(json) {
                const pictureUrl = json[0].url;
                pictureArray.push(pictureNode.getAttribute("src"));
                if (pictureArray.length > 1) {
                    document.getElementById("backButton").disabled = false;
                }
                pictureNode.setAttribute("src", pictureUrl);
            });
        }
    else {
        const pictureUrl = futureArray.pop();
        pictureArray.push(pictureNode.getAttribute("src"));
        if (pictureArray.length > 1) {
            document.getElementById("backButton").disabled = false;
        }
        pictureNode.setAttribute("src", pictureUrl);
    }
});

document.getElementById("backButton").addEventListener("click", function(event) {
    event.preventDefault();
    var pictureNode = document.getElementById("catPic");
    futureArray.push(pictureNode.getAttribute("src"));
    var pictureUrl = pictureArray.pop();
    pictureNode.setAttribute("src", pictureUrl);
    if (pictureArray.length <= 1) {
        document.getElementById("backButton").disabled = true;
    }
})