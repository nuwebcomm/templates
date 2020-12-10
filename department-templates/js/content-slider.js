$(function() {
    var swipers = [];
    $( ".swiper-container" ).each(function( index ) {
        if ($(this).find('.swiper-slide').length > 1) {
            var next_button = $(this).find('.swiper-button-next');
            var prev_button = $(this).find('.swiper-button-prev');
            var page_control = $(this).find('.swiper-pagination');
            var container = $(this);
            swipers.push(new Swiper(
                this, {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 15,
                    keyboardControl: true,
                    loop: true,
                    a11y: true,
                    pagination: {
                        el: page_control,
                        clickable: true,
                    },
                    navigation: {
                        nextEl: next_button,
                        prevEl: prev_button,
                    },
                    prevSlideMessage: 'Previous slide',
                    nextSlideMessage: 'Next slide'
                })
            );
        }
	});
});
