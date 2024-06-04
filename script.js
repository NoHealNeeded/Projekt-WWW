function goToMain() {
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('http://localhost:3000/api/image');
    const data = await response.json();

    document.getElementById('pic').setAttribute("href", data.url);
    

});

var counter = 0;
function increaseCounter() {
    counter++;
    document.getElementById("counter").innerHTML = "Gefundene Fehler: " + counter;
}