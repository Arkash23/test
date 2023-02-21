$(document).ready(function(){


	$(".slider-wrapper").slick({
		slidesToShow: 3,
		nextArrow: document.querySelector('.my-next'),
		prevArrow: document.querySelector('.my-prev'),
		slidesToScroll: 1,
		responsive: [
			{
			    breakpoint: 1375,
				settings: {
			
					slidesToShow: 2,
					slidesToScroll: 1,
					
				}

			},
			{
			    breakpoint: 1175,
				settings: {
			
					slidesToShow: 1,
					slidesToScroll: 1,
					
				}

			},
		]
	})

	$(".review-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
		{
			breakpoint: 800,
			settings: {
				
			}

		}
		]
	})
	
  
})


		