
$(document).ready(function(){
  $('.carousel').carousel(1);
  var answers = ['coffee','water','wakeUp','excitement','sand'];
  var destinations = ['deMoines','seattle','vla','moon','risa'];

  hideAllDestinations();

  $('.carousel').on('slide.bs.carousel',function(e){
    var slideTo = $(e.relatedTarget).index();
    console.log(slideTo);
  });

  $('#reset').click(function(){
    $('.carousel').carousel(1);
    $('.btn').removeClass('active');
    answers.forEach(function(arr){
      $('#'+arr+'1').parent().addClass('active');
      $('#'+arr+'1').prop('checked',true);
    });
  });

  $('form').submit(function(event){
    var total = 0;
    for (var i = 0; i < answers.length; i++) {
      total += parseInt($('input[name='+answers[i]+']:checked').val());
    }

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
    event.preventDefault();
  });

  function hideAllDestinations() {
    destinations.forEach(function(arr){
      $('.'+arr).hide();
    });
  }

});
