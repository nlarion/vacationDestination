$(document).ready(function(){
  $(".carousel").carousel(1);
  var answersArray = ["coffee","water","wakeUp","excitement","sand"];
  hideAll();

  $("#reset").click(function(){
    $('.carousel').carousel(1);
    $('.btn').removeClass('active');
    answersArray.forEach(function(arr){
      $('#'+arr+"1").parent().addClass('active');
      $('#'+arr+"1").prop('checked',true);
    });
    // $('input[type=radio]').prop('checked', function () {
    //     return this.getAttribute('checked') == 'checked';
    // });


  });

  $('form').submit(function(event){

    var total = parseInt($('input[name=coffee]:checked').val());
    total += parseInt($('input[name=water]:checked').val());
    total += parseInt($('input[name=wakeUp]:checked').val());
    total += parseInt($('input[name=excitement]:checked').val());
    total += parseInt($('input[name=sand]:checked').val());

    if(total < 6){
      hideAll();
      $('.vla').show();
    }else if(total > 5 && total < 11){
      hideAll();
      $('.deMoines').show();
    }else {
      hideAll();
      $('.risa').show();
    }

    $('.carousel').carousel(7);

    console.log(total);
    event.preventDefault();
  });

});


function hideAll(argument) {
  $('.vla').hide();
  $('.deMoines').hide();
  $('.risa').hide();
  $('.seattle').hide();
  $('.moon').hide();
}
