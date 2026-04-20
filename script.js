function changeText(){

document.getElementById("text").innerText =
"The text has been changed using JavaScript!";

}

function changeColor(){

document.getElementById("title").style.color = "blue";

}

function toggleImage(){

let img = document.getElementById("demoImg");

img.style.display =
(img.style.display === "none") ? "block" : "none";

}