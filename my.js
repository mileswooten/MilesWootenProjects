function loadGitHubRep() {
    const rep = new XMLHttpRequest();
    rep.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let repPull = JSON.parse(this.responseText);
            document.getElementById("gitHubResult").innerHTML = repPull.myJson;
        }
    }
    rep.open("GET", "my.json", true);
    rep.send();
}