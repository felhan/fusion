$(function() {


	/* team */
	
	$(".team__item").on("click", function(event){
 			event.preventDefault();

 			$(this).toggleClass("active");


 			});


	/* Slider */

	$("[data-slider]").slick({
 			infinite: true,
  			dots: true,
  			arrows: false
 		});






});

