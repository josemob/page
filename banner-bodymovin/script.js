//js code for Restart Animations

var startBtn = document.querySelector("#clickMe");
var elements = [document.querySelector("#clickMe"), document.getElementById("path1"), document.getElementById("path2"), document.getElementById("holes"), document.getElementById("pngImage"), document.getElementById("pinkDiv"), document.getElementById("blueDiv"), document.getElementById("silueta"), document.getElementById("words"), document.getElementById("restartBtn"), document.getElementById("rectCover")]

startBtn.addEventListener("click", function () {
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("run-animation");
    }
    window.requestAnimationFrame(function () {
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.add("run-animation");
        }
    });
}, false);

startBtn.addEventListener("animationend", function () {
    startBtn.style.display = "none";
}, false);

document.getElementById("restartBtn").addEventListener("click", function () {
    //window.location.href;
    history.go(0);
}, false);