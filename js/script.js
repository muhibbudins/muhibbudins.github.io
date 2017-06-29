$(document).ready(function() {
    $('.anchor').click(function() {
        const target = $(this).data('target');
        const redirect = $(this).data('redirect');
        
        if (!redirect) {
            $('html, body').animate({ scrollTop: $(target).offset().top - 50}, 500);
            return false;
        } else {
            window.open(redirect, '_blank');
        }
    });
});
