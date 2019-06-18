$(document).ready(function () {
    $(window).scroll(function () {
      if ($(document).scrollTop() >= 100) {
        $(".navbar").addClass("navbar-scrolled");
      } else {
        $(".navbar").removeClass("navbar-scrolled");
      }
    });
  
  });
  
  
  //$(document).scrollTop() >= 100 (1st scroll)
  //$(document).scrollTop() > 100 (2nd scroll)
  