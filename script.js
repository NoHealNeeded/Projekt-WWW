function goToMain() {
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('http://localhost:3000/api/image');
    const data = await response.json();

    document.getElementById('pic').src = data.url;
    //const marker = document.getElementById('marker');

    // Laden des SVG-Bildes
    /*fetch(data.url)
        .then(response => response.text());*/
    //image.innerText = data.url;
    //const targetCoordinates = { x: data.x, y: data.y };

    // Klick-Event
    /*gameImage.addEventListener('click', (event) => {
        const rect = gameImage.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Überprüfen, ob die Koordinaten innerhalb eines bestimmten Bereichs liegen
        const tolerance = 10; // Toleranzbereich
        if (Math.abs(x - targetCoordinates.x) < tolerance && Math.abs(y - targetCoordinates.y) < tolerance) {
            alert('Gefunden!');
            marker.style.left = `${targetCoordinates.x - 5}px`;
            marker.style.top = `${targetCoordinates.y - 5}px`;
            marker.style.display = 'block';
        } else {
            alert('Nicht gefunden, versuche es noch einmal!');
        }
    });*/
});