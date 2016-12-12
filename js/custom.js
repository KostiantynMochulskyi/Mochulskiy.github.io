$(function() {

	$('.main-nav__toggle').on('click', function(e) {

		e.preventDefault();
		$('.main-nav').toggleClass('main-nav--closed');
		$('.main-nav').toggleClass('main-nav--opened');
	
	});


	$('#comments__slider--is').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true
	});



	$('.pointer__togle1').on('click', function(){

		$('.pointer__togle').removeClass('pointer__togle--active');

		if($(this).hasClass('pointer__togle--active')){

		}
		else{
			$('.options__table').css('transform', 'translateX(0px)');
			$(this).addClass('pointer__togle--active')
		};
	});

	$('.pointer__togle2').on('click', function(){

		$('.pointer__togle').removeClass('pointer__togle--active');

		if($(this).hasClass('pointer__togle--active')){

		}
		else{
			
			$('.options__table').css('transform', 'translateX(0px)');
			var widthTable = ($('.options__wrapper').width() - 40);

			$(this).addClass('pointer__togle--active');
			$('.options__table').css('transform', 'translateX(-' + widthTable + 'px)');
		};
	});

	$('.pointer__togle3').on('click', function(){

		$('.pointer__togle').removeClass('pointer__togle--active');

		if($(this).hasClass('pointer__togle--active')){

		}
		else{

			$('.options__table').css('transform', 'translateX(0px)');
			var widthTable = ($('.options__wrapper').width() - 40)*2;

			$(this).addClass('pointer__togle--active');
			$('.options__table').css('transform', 'translateX(-' + widthTable + 'px)');
		};
	});

	
	//console.log($('.options__table').css('transform', 'translateX(-100px)' ));
});