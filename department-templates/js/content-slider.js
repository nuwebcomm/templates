$(function() {
    var swipers = [];
    $( ".swiper-container" ).each(function( index ) {
        var next_button = $('.swiper-button-next:eq('+index+')');
		var prev_button = $('.swiper-button-prev:eq('+index+')');
		var container = $(this);
		swipers.push(new Swiper(
			this, {
				slidesPerView: 1,
				spaceBetween: 30,
				keyboardControl: true,
				nextButton: next_button,
				prevButton: prev_button,
                loop: false,
				a11y: true,
				prevSlideMessage: 'Previous slide',
				nextSlideMessage: 'Next slide',
				firstSlideMessage: 'This is the first slide',
				lastSlideMessage: 'This is the last slide',
				onReachEnd: function(swiper) {
					container.append('<div class="swiper-button-next refresh-button" aria-disabled="false" tabindex="0" role="button" aria-label="Return to first slide" style="background-color: rgb(78, 42, 132); background-image: url(\'//common.northwestern.edu/v8/css/images/icons/refresh.svg\');"></div>');
					container.on('click', '.refresh-button', function() {
						swiper.slideTo(0);
						$(this).remove();
					});
					container.find('.swiper-button-prev').click(function() {
						$('.refresh-button').remove();
					});
				}
			})
		);
	});
});
