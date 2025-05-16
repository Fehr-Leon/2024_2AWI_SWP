



let scores = [
    {
        name: "Olaf",
        points: 50
    },
    {
        name: "Sven",
        points: 60
    },
    {
        name: "Hugo",
        points: 40
    }
]

function displayScores() {
    let html = ""
    scores.forEach((element) => {
        html = html + "<div class = 'score '>" + element.name + ": " + element.points + "</div>"
    });


    document.getElementById("scores").innerHTML = html;
}

displayScores();