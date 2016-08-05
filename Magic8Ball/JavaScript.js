/// <reference path="c:\users\wecancodeit\documents\visual studio 2015\Projects\Magic8Ball\Magic8Ball\scripts/jquery-3.1.0.js" />

var responses = ["Yes", "No", "Maybe", "Unclear try again later", "Wrong question"];

//http://stackoverflow.com/questions/4550505/getting-random-value-from-an-array

function getRandom() {
    var rand = Math.floor(Math.random() * responses.length);
    var concat = responses[rand];
    document.getElementById("answer").innerHTML = (concat);
}
$('button')