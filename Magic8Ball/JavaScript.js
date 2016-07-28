
var responses = ["Yes", "No", "Maybe", "Unclear try again later", "Wrong question"];

//http://stackoverflow.com/questions/4550505/getting-random-value-from-an-array

function getRandom() {
    var rand = Math.floor(Math.random() * responses.length);
    var concat = responses[rand];
    document.getElementById("answer").innerHTML = (concat);
}
