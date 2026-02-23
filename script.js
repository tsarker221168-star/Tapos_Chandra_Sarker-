const text = "Software Quality Assurance Engineer";
let index = 0;

function typeEffect(){
if(index < text.length){
document.getElementById("typing").innerHTML += text.charAt(index);
index++;
setTimeout(typeEffect,40);
}
}

window.onload = typeEffect;