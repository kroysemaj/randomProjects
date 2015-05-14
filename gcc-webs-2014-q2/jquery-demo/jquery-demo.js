$(document).ready(function(){

  $('.header').slideDown('slow');

  $('.vanish-button').click(function(){
    $('.vanishing').toggle(400);
  });

  $('.slideToggle-button').click(function(){
    $('.slideToggle').slideToggle('slow');
  });

  $('.fade-guy').click(function(){
    $(this).fadeTo('slow', 0.25);
  });

  $('.css').click(function(){
    $(this).css({
      'background-color': '#036'
    });
  });



  $('.dingo').hover(
    function() {
      $(this).fadeTo('slow', 0.5);
      $('.fadeInText').fadeIn().css({
        'color': 'black',
        'text-decoration': 'underline'
      });
    },
    function() {
      $(this).fadeTo('slow', 1);
      $('.fadeInText').fadeOut();
    }
  );

});