$(document).ready(function() {

  $('.header-burger').click(function(event) {
    $('.header-burger, .nav').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.nav').click(function(){
    $('.header-burger, .nav').removeClass('active');
    $('body').removeClass('lock');
  }); 

  /* smooth scroll */

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();
    let elementId= $(this).data('scroll');
    let elementOffset= $(elementId).offset().top;  

    $("html, body").animate({
      scrollTop: elementOffset- 50 
    }, 700);
  });
});
  


