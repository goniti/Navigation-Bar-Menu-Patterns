$(document).ready(function () {
    $(window).scroll(function () {
      if ($(document).scrollTop() >= 100) {
        $(".navbar").addClass("navbar__menu-scrolled");
      } else {
        $(".navbar").removeClass("navbar__menu-scrolled");
      }
    });
  
  });
  
  
  //$(document).scrollTop() >= 100 (1st scroll)
  //$(document).scrollTop() > 100 (2nd scroll)
  