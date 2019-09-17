$('#close').addEventListener("click", () => {
    $('#modal').modal('hide');
});

function newsletterSubmit() {
    $('#newsletter-form').css("display", "none");
    $('#newsletter-lead').removeClass('d-none');
}

$('#modal').on('hidden.bs.modal', function() {
    $('#newsletter-form').css("display", "block");
    $('#newsletter-lead').addClass('d-none');
})