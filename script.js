function gameFunction(string) {
    
    document.getElementById("scissor").disabled = true;
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    console.log(string);
    let yourchoice = document.getElementById("yourchoice");
    yourchoice.innerHTML += string;
    const tools = ["Schere", "Stein", "Papier"];
    const cpuChoice = Math.floor(Math.random() * tools.length);
    console.log(tools[cpuChoice]);
    let cpuchoice = document.getElementById("cpuchoice");
    cpuchoice.innerHTML += tools[cpuChoice];

    if (string === tools[cpuChoice]) {
        let scorearea = document.getElementById("score");
        scorearea.innerHTML += "Gleichstand!";
    } else if (string === "Schere" && tools[cpuChoice] === "Papier") {
        let scorearea = document.getElementById("score");
        scorearea.innerHTML += "Gewonnen!";
    } else if (string === "Papier" && tools[cpuChoice] === "Schere") {
        let scorearea = document.getElementById("score");
        scorearea.innerHTML += "Verloren!";
    } else if (string === "Stein" && tools[cpuChoice] === "Schere") {
        let scorearea = document.getElementById("score");
        scorearea.innerHTML += "Gewonnen!";
    } else if (string === "Schere" && tools[cpuChoice] === "Stein") {
        let scorearea = document.getElementById("score");
        scorearea.innerHTML += "Verloren!";
    } else if (string === "Papier" && tools[cpuChoice] === "Stein") {
        let scorearea = document.getElementById("score");
        scorearea.innerHTML += "Gewonnnen!";
    } else if (string === "Stein" && tools[cpuChoice] === "Papier") {
        let scorearea = document.getElementById("score");
        scorearea.innerHTML += "Verloren!";
    }

    document.getElementById("buttonAppear").innerHTML = '<button onclick="window.location.reload();">Nochmal probieren?</button>';

}
