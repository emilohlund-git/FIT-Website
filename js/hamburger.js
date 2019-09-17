let showing = false;

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

$('#hamburger-button').addEventListener("click", () => {
    $('#hamburger-button').classList.toggle("rotate");
    $('#circle').classList.toggle("grow");
    showing = !showing;
    if (showing) {
        $('.logo').css("color", "#fff");
        $("body").css({ "overflow": "hidden" });
    } else {
        $('.logo').css("color", "#333");
        $("body").css({ "overflow": "visible" });
    }
});