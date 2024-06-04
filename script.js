function goToMain() {
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('http://localhost:3000/api/image');
    const pic = await response.json();
    document.getElementById('pic').setAttribute("href", pic.url);
});

let allCircs = ['c1','c2','c3','c4','c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'c11', 'c12', 'c13', 'c14', 'c15'];

document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('http://localhost:3000/api/imageInfo');
    const imageInfo = await response.json();
    //console.log(imageInfo);
    for(let i = 0; i < imageInfo.length; i++) {
        document.getElementById(imageInfo[i].cid).setAttribute("r", imageInfo[i].r);
        document.getElementById(imageInfo[i].cid).setAttribute("cx", imageInfo[i].cx);
        document.getElementById(imageInfo[i].cid).setAttribute("cy", imageInfo[i].cy);
    }
});

var counter = 0;
let circArray = [];
function increaseCounter(aCircle) {
    if( !circArray.includes(aCircle)) {
        document.getElementById(aCircle).setAttribute("opacity", 0.5);
        circArray.push(aCircle);
        counter++;
        document.getElementById("counter").innerHTML = "Gefundene Fehler: " + counter; 
    }
}
