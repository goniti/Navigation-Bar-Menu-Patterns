
//CODE TO USE ON YOUR WEBSITE - !!! YOU NEED IT

//hide nav open btn when the nav is open, adding/removing open classes to nav and content
var navOpenBtn = document.querySelector('.burgerMenu__btn--open');
var navCloseBtn = document.querySelector('.nav__close');
var nav = document.querySelector('.nav');
var pageContent = document.querySelector('.page__content');
var navList = document.querySelector('.nav__list');
var page = document.querySelector('.page');

//open nav
navOpenBtn.addEventListener('click', function() {
  navOpenBtn.classList.add('js-hidden');
  
  nav.classList.add('js-opened');
  
  pageContent.classList.add('js-opened');
});

//close nav
navCloseBtn.addEventListener('click', function() {
  navOpenBtn.classList.remove('js-hidden');
  
  nav.classList.remove('js-opened');
  
  pageContent.classList.remove('js-opened');
});

//closing navigation if click outside it
page.addEventListener('click', function(e) {
  
  var evTarget = e.target;
  
  if((evTarget !== nav) && (nav.classList.contains('js-opened')) && (evTarget !== navOpenBtn) && (evTarget.parentNode !== navOpenBtn)) {
    console.log(navOpenBtn.firstChild);
    
    navOpenBtn.classList.remove('js-hidden');
  
    nav.classList.remove('js-opened');
  
    pageContent.classList.remove('js-opened');
  }
  
});