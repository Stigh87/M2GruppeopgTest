//view
show();
function show() {
let appDiv = document.getElementById('app');
let html = '';

html += `MAL
    <button>Start ny meningsmåling</button><br>
    <div id="activePolls">
        <h3>Liste over aktive meningsmålinger:</h3><hr><br>
        <ol>
            <li>Tittel</li>
            <li>Tittele</li>
            <li>Tittelei</li>
            <li>Titte</li>
            <li>Tittelo</li>
            <li></li>
            <li></li>
        </ol>
    </div>
    
    <div id="finishedPolls">
        <h3>Liste over ferdige meningsmålinger:</h3><hr><br>
        <ol>
            <li>Ferdig tittel</li>
            <li>Ferdi tittel</li>
            <li>Fredig tittel</li>
            <li>Frodig tittel</li>
            <li></li>
            <li></li>
            <li></li>
        </ol>
    </div>
    
    `

appDiv.innerHTML = html;
}

//<button id="stopPoll">Avslutt alle</button>