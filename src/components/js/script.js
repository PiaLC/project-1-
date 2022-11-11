
/***************/
window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				noWrap:false
			  }
			}
		]
	});
});


document.addEventListener('DOMContentLoaded',()=>{
	const elementoscarrousel=document.querySelectorAll('.carousel');
	M.Carousel.inti(elementoscarrousel,{
		duration:150,
		dist:-80,
		shift:5,
		padding: 5 ,
		munVisible:3,
		indicators: true,
		noWrap:false
	});
});
