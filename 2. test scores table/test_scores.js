var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) {
    return document.getElementById(id);
};

var addScore = function () {
    names.push($("name").value);
    scores.push($("score").value);
};


var Results = function () {
  var sum = 0;
  var high=0;
  var j;
for( var i = 0; i < scores.length; i++ ){
    j = parseInt(scores[i],10);
    sum += j;
    if (j>high) high=j; 
}

var avg = sum/scores.length;


    var h2Node = document.createElement("h2");
    var h2TextNode = document.createTextNode("Results");
    h2Node.appendChild(h2TextNode);
    document.body.appendChild(h2Node);
    var avgNode = document.createElement("p");
    var avgTextNode = document.createTextNode("Average Score = " + avg);
    avgNode.appendChild(avgTextNode);
    document.body.appendChild(avgNode);
    var highestNode = document.createElement("p");
    var highestTextNode = document.createTextNode("Highest Score = " + high);
    highestNode.appendChild(highestTextNode);
    document.body.appendChild(highestNode);

};

var displayResults = function () {

    $("results");
    /*scores.sort(function(a, b){return b-a});*/
    Results();

};

var displayScores = function () {
    var table = $("scores_table");
    var tBody = table.tBodies[0];
    if (tBody == undefined) {
        tBody = document.createElement("tBody");
        table.appendChild(tBody);
    }
    for (i = 0; i < scores.length; i++) {
        var row = tBody.insertRow(-1);
        var textNode = document.createTextNode(names[i]);
        var cellNode = row.insertCell(-1);
        cellNode.appendChild(textNode);
        var scoreNode = document.createTextNode(scores[i]);
        var cellNode2 = row.insertCell(-1);
        cellNode2.appendChild(scoreNode);
    }

};

window.onload = function () {
    $("add").onclick = addScore;
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
};