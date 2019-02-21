$(document).ready(function() {
    $('.main_btna').on('click', showModal);
    $('.main_btn').on('click', showModal);
    $('.main_nav li').eq(1).on('click', showModal);

    function showModal() {
        $('.overlay').fadeIn(1000);
        $('.modal').slideDown(3000);
    }

    $('.close').on('click', function() {
        $('.modal').slideUp(3000, function() {
            $('.overlay').fadeOut(1000);
        });
    });
});