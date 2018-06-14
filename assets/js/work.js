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

  $text = $('.dropbtn');

  $education.click(function(){
    if ($edu.length){
      $('.wrap').prepend($edu);
      $edu.hide();
      $edu.fadeIn(2000);

      $edu.removeClass('blur');
      $ret.addClass('blur');
      $mix.addClass('blur');
      $civ.addClass('blur');
      $hea.addClass('blur');
    }
  })

  $retail.click(function(){
    if ($ret.length){
      $('.wrap').prepend($ret);
      $ret.hide();
      $ret.fadeIn(2000);

      $edu.addClass('blur');
      $ret.removeClass('blur');
      $mix.addClass('blur');
      $civ.addClass('blur');
      $hea.addClass('blur');
    }
  })

  $mixed.click(function(){
    if ($mix.length){
      $('.wrap').prepend($mix)
      $mix.hide();
      $mix.fadeIn(2000);

      $edu.addClass('blur');
      $ret.addClass('blur');
      $mix.removeClass('blur');
      $civ.addClass('blur');
      $hea.addClass('blur');
    }
  })

  $civic.click(function(){
    if ($civ.length){
      $('.wrap').prepend($civ)
      $civ.hide();
      $civ.fadeIn(2000);

      $edu.addClass('blur');
      $ret.addClass('blur');
      $mix.addClass('blur');
      $civ.removeClass('blur');
      $hea.addClass('blur');
    }
  })

  $health.click(function(){
    if ($hea.length){
      $('.wrap').prepend($hea)
      $hea.hide();
      $hea.fadeIn(2000);

      $edu.addClass('blur');
      $ret.addClass('blur');
      $mix.addClass('blur');
      $civ.addClass('blur');
      $hea.removeClass('blur');
    }
  })
})













