$(document).ready(function(){

  $education = $('#education');
  $retail = $('#retail');
  $mixed = $('#mixed');
  $civic = $('#civic');
  $health = $('#health')

  $edu = $('.edu');
  $ret = $('.ret');
  $mix = $('.mix');
  $civ = $('.civ');
  $hea = $('.hea');

  

  $education.click(function(){
    if ($edu.length){
      $('.wrap').prepend($edu)
    }
  })

  $retail.click(function(){
    if ($ret.length){
      $('.wrap').prepend($ret)
    }
  })

  $mixed.click(function(){
    if ($mix.length){
      $('.wrap').prepend($mix)
    }
  })

  $civic.click(function(){
    if ($civ.length){
      $('.wrap').prepend($civ)
    }
  })

  $health.click(function(){
    if ($hea.length){
      $('.wrap').prepend($hea)
    }
  })

  $education.trigger('click');
})