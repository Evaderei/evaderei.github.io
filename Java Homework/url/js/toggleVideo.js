$('input[type="button"]').click(function (){
  $('iframe').toggle(1000, function() {console.log("meow");});
  $('h2').toggle(1000);

});
