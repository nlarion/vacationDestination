$(document).ready(function(){
  $(".carousel").carousel(1);
  $("form").submit(function(event){
    console.log("awwwww yeah")
    event.preventDefault();
  });

});
