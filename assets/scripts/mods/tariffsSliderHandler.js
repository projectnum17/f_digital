const tariffsSliderHandler = () => {
    if (typeof Swiper === 'undefined') return;

    const sliderEls = document.querySelector('.js-tariffs-slider');

    new Swiper(sliderEls, {
        slidesPerView: 4,
        spaceBetween: 24,
        speed: 700,
        navigation: {
            prevEl: '.js-tariffs-prev',
            nextEl: '.js-tariffs-next',
        },
    });
};

export default tariffsSliderHandler;
