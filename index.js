const query = document.getElementById("input-text");
const solution = document.getElementById("output");
const action = document.getElementById("translate");
const api = "https://api.funtranslations.com/translate/minion.json";

function clickhandler() {
    var val = query.value;
    var url = api + "?text=" + val;
    fetch(url)
        .then(response => response.json())
        .then(json => {
            solution.innerHTML = json.contents.translated;
        })
}