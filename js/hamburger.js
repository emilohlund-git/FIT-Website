const hamburger = document.getElementById("hamburger-button");
const circle = document.getElementById("circle");
const body = document.querySelector("body");

var showing = false;

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("rotate");

    circle.classList.toggle("grow");
    showing = !showing;
    if (showing) {
        $('.logo').css("color", "#fff");
        $("body").css({ "overflow": "hidden" });
    } else {
        $('.logo').css("color", "#333");
        $("body").css({ "overflow": "visible" });
    }
});