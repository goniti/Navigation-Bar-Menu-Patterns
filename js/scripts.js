var navOpenBtn = document.querySelector('.burgerMenu__btn--open');
var navCloseBtn = document.querySelector('.burgerMenu__btn--close');
var nav = document.querySelector('.burgerMenu');
var pageContent = document.querySelector('.page__content');
var navList = document.querySelector('.burgerMenu__list');
var page = document.querySelector('body');

//open nav
navOpenBtn.addEventListener('click', function () {
  navOpenBtn.classList.add('js-hidden');

  nav.classList.add('js-opened');

  pageContent.classList.add('js-opened');
});

//close nav
navCloseBtn.addEventListener('click', function () {
  navOpenBtn.classList.remove('js-hidden');

  nav.classList.remove('js-opened');

  pageContent.classList.remove('js-opened');
});

//closing navigation if click outside it
page.addEventListener('click', function (e) {

  var evTarget = e.target;

  if ((evTarget !== nav) && (nav.classList.contains('js-opened')) && (evTarget !== navOpenBtn) && (evTarget.parentNode !== navOpenBtn)) {
    console.log(navOpenBtn.firstChild);

    navOpenBtn.classList.remove('js-hidden');

    nav.classList.remove('js-opened');

    pageContent.classList.remove('js-opened');
  }

});