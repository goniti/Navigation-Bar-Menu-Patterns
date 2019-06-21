$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() >= 100) {
      //value >= 100 (1 scroll)
      //value > 100 (2 scroll)

      $(".navbar").addClass("navbar__menu-scrolled");
    } else {
      $(".navbar").removeClass("navbar__menu-scrolled");
    }
  });

  //BURGER-MENU
  const burgerMenu = $('.burgerMenu');
  const burgerMenuBtnOpen = $('.burgerMenu__btn--open');
  const burgerMenuBtnClose = $('.burgerMenu__btn--close');
  const page = $('.page__content');

  // Open burger menu
  $(burgerMenuBtnOpen).on('click', function () {
    $(burgerMenuBtnOpen).addClass('js-hidden');
    $(burgerMenu).addClass('js-opened');
    $(page).addClass('js-opened');

  });

  // Close burger menu
  $(burgerMenuBtnClose).on('click', function () {
    $(burgerMenuBtnOpen).removeClass('js-hidden');
    $(burgerMenu).removeClass('js-opened');
    $(page).removeClass('js-opened');
  });
  // Click outside close burger menu
  $(page).on("click", function () {
    $(burgerMenuBtnOpen).removeClass('js-hidden');
    $(burgerMenu).removeClass('js-opened');
    $(page).removeClass('js-opened');
  });


});


