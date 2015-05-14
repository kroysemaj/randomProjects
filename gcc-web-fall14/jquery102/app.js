$(document).ready(function(){

  $('.css-button').click(function(){
    $('.first').toggleClass('green');
    $('.second').toggleClass('green');
  });

  $('body').mousemove(function(){

    $('.words').append('.');
  });

});