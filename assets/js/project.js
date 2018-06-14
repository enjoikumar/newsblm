$(document).ready(function(){

  //just another way of writing document.ready
  //but for some reason, need to have both
  //could be a conflict of libraries
  (function(){

  // to keep track of current slide
  var counter = 0, 

  // a collection of all of the slides, caching for performance
  $items = document.querySelectorAll('.slideshow figure'),

  // total number of slides
  numItems = $items.length; 

  // this function is what cycles the slides, showing the next or previous slide and hiding all the others
  var showCurrent = function(){

  // uses remainder (aka modulo) operator to get the actual index of the element to show
  var itemToShow = Math.abs(counter%numItems);  
  
  // remove .show from whichever element currently has it 
  [].forEach.call( $items, function(el){
    el.classList.remove('show');
  });
  
  // add .show to the one item that's supposed to have it
  $items[itemToShow].classList.add('show');
  };

  // add click event to next button, as well as adding 1 to the counter 
  document.querySelector('.next').addEventListener('click', function() {
     counter++;
     showCurrent();
  }, false);

  // click event to prev button and subtracting 1 to the counter 
  document.querySelector('.prev').addEventListener('click', function() {
     counter--;
     showCurrent();
  }, false);
  
  })();  

  
  var $animation_elements = $('.animation-element');
  var $window = $(window);

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
   
    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
   
      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view');
      }
    });
  }

  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');
})