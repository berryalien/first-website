$(function () {

$(".menu__link, .logo, .header__icon ").on("click", function (e) {
  e.preventDefault();
  var id = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({
    scrollTop: top
  }, 1500);
});

$('.menu__btn, .menu__link').click(function () {
  $('.menu__btn, .menu__list').toggleClass('active');
  $('body').toggleClass('lock');
});


const header = $(".header__top");
const scrollChange = 60;
$(window).scroll(function() {
const scroll = $(window).scrollTop();

if (scroll >= scrollChange) {
  header.addClass('header-fixed');
} else { 
  header.removeClass("header-fixed");
}

});
});


var mixer = mixitup('.portfolio__gallery');