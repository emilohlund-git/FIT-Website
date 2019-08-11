$(".small-read-more").click(function() {
    if (!$(".fas-small").hasClass("fa-arrow-circle-up")) {
        $(".list-group").removeClass("d-none");
        $(".fas-small").removeClass("fa-arrow-circle-down");
        $(".fas-small").addClass("fa-arrow-circle-up");
    } else {
        $(".list-group").addClass("d-none");
        $(".fas-small").removeClass("fa-arrow-circle-up");
        $(".fas-small").addClass("fa-arrow-circle-down");
    }
});