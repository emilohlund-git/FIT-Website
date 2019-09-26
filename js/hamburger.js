let showing = false;
const hamburger = document.getElementById("hamburger-button");

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("rotate");
    document.getElementById("circle").classList.toggle("grow");
    showing = !showing;
    if (showing) {
        $('.logo').css("color", "#fff");
        $("body").css({ "overflow": "hidden" });
    } else {
        $('.logo').css("color", "#333");
        $("body").css({ "overflow": "visible" });
    }
});