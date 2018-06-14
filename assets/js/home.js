
//function enables an extra element to the nav bar
// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//       x.className += " responsive";
//   } else {
//       x.className = "topnav";
//   }
// }

// var myNav = document.getElementById("myNav");

// var count = 0
// function clicker(){
// 	count++;
// 	if(count%2){
//   	myNav.style.height = "100%";
// 	} else{
//   	myNav.style.height = "0%";
// 	}
// }

$(document).ready(function(){

	var $x = $('#myFunction')
	if ($x.className === 'topnav'){
			x.className += 'responsive';
	} else{
		$x.className = 'topnav';
	}

	var $myNav = $('#myNav');
				// $('html').hide()
	var count = 0;

	$('.burger').click(function(){
		count ++;
		if(count%2){
			$myNav.css('height','100%');
			$('.carousel-indicators').css('display', 'none');
		} else{
			$myNav.css('height','0%');
			$('.carousel-indicators').css('display', 'block');
		}
	})

	// if($(window).width() >= 414){
 //    $('.overlay').css('display', 'none');
 //    $('.burger').css('display', 'none');
 //  }

 // var d = new Date();
 // if(d.getDate() == 3 && d.getMonth() == 11){
 // 		$('html').hide();
 // }

})

// for (var i=1; i <= 100; i++)
// {
//     if (i % 15 == 0)
//         console.log("FizzBuzz");
//     else if (i % 3 == 0)
//         console.log("Fizz");
//     else if (i % 5 == 0)
//         console.log("Buzz");
//     else
//         console.log(i);
// }






