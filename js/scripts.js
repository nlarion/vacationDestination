$(document).ready(function(){
  $(".carousel").carousel(1);
  var answersArray = [];
  hideAll();

  $("#reset").click(function(){
    $(".carousel").carousel(1);
  });

  $("form").submit(function(event){

    var total = parseInt($("input[name=coffee]:checked").val());
    total += parseInt($("input[name=water]:checked").val());
    total += parseInt($("input[name=wakeUp]:checked").val());
    total += parseInt($("input[name=excitement]:checked").val());
    total += parseInt($("input[name=sand]:checked").val());

    if(total < 6){
      hideAll();
      $(".vla").show();
    }else if(total > 5 && total < 11){
      hideAll();
      $(".deMoines").show();
    }else {
      hideAll();
      $(".risa").show();
    }

    $(".carousel").carousel(7);

    console.log(total);
    event.preventDefault();
  });

});


function hideAll(argument) {
  $(".vla").hide();
  $(".deMoines").hide();
  $(".risa").hide();
  $(".seattle").hide();
  $(".moon").hide();
}
