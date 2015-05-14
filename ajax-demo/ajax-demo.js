$(document).ready(function(){

  function getLyrics() {
    $.ajax({
      url: 'https://twlaas.herokuapp.com/',
      success: function(data) {
        console.log(data);
        $('#lyric').html(data);
      }
    });
  }

  window.setInterval(getLyrics, 7000);

});