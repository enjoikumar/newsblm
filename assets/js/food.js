$(document).ready(function(){

  $('.top').click(function(){
    $('html, body').animate({
      scrollTop: $('.title').offset().top
    }, 500)
  })

  var count = 0;

  $('.details').click(function(){
    count++;
    if(count%2){
      $('.details').html('Project Details &#x25BC;');
      $('#bio').css('display', 'none');
      $('#stats').css('display', 'none');
    } else{
      $('.details').html('Project Details &#x25B2;')
      $('#bio').css('display', 'block');
      $('#stats').css('display', 'block');
    }
  });

})

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}