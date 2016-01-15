
$(document).ready(function(){
  $(".carousel").carousel(1);
  var answers = ["coffee","water","wakeUp","excitement","sand"];
  var destinations = ["deMoines","seattle","vla","moon","risa"];
  hideAllDestinations();

  $("#reset").click(function(){
    $('.carousel').carousel(1);
    $('.btn').removeClass('active');
    answers.forEach(function(arr){
      $('#'+arr+"1").parent().addClass('active');
      $('#'+arr+"1").prop('checked',true);
    });

  });

  $('form').submit(function(event){

    var total = parseInt($('input[name=coffee]:checked').val());
    total += parseInt($('input[name=water]:checked').val());
    total += parseInt($('input[name=wakeUp]:checked').val());
    total += parseInt($('input[name=excitement]:checked').val());
    total += parseInt($('input[name=sand]:checked').val());

    if(total < 6){
      hideAllDestinations();
      $('.vla').show();
    }else if(total > 5 && total < 11){
      hideAllDestinations();
      $('.deMoines').show();
    }else {
      hideAllDestinations();
      $('.risa').show();
    }


    $('.carousel').carousel(7);

    console.log(total);
    event.preventDefault();
  });

  function hideAllDestinations() {
    destinations.forEach(function(arr){
      $('.'+arr).hide();
    });
  }

});
