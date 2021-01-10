$('.slider').slick({
    dots: false,
    // arrows: false,
    nextArrow: $('.next'),
    prevArrow: false
});

$('.header__slider').slick({
    arrows: false
});

$('.burger__img').on('click', function () {
    $('.burger').animate({ width: 'toggle' }, 350);
    $('body').css({ 'overflow': 'hidden' });
})
$('.close').on('click', function () {
    $('.burger').animate({ width: 'toggle' }, 350);
    $('body').css({ 'overflow': 'visible' });
})