const tariffsSliderHandler = () => {
    if (typeof Swiper === 'undefined') return;

    const sliderEls = document.querySelector('.js-tariffs-slider');
    if (!sliderEls) return;

    new Swiper(sliderEls, {
        slidesPerView: 4,
        spaceBetween: 24,
        speed: 700,
        navigation: {
            prevEl: '.js-tariffs-prev',
            nextEl: '.js-tariffs-next',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 2,
            },
            1199: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1440: {
                slidesPerView: 4,
            },
        },
    });
};

export default tariffsSliderHandler;
