$(document).ready(function(){
  $('button').click(function(){
    var x = $('input').val();
    $('.output').empty();
    for (i=1; i<=x; i++) {
      if(i%15===0) {
        $('.output').append('<li>pingpong</li>');
      }
      else if(i%3===0) {
        $('.output').append('<li>ping</li>');
      }
      else if(i%5===0) {
        $('.output').append('<li>pong</li>');
      }
      else{
        $('.output').append('<li>'+i+'</li>');
      }
    }
  });
})
