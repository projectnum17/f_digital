const headerHandler = () => {
    const targetBtnsHandler = () => {
        const btns = document.querySelectorAll('.js-header-target');

        if (!btns.length) return;

        btns[0].classList.add('is-active');

        btns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();

                btns.forEach((el) => el.classList.remove('is-active'));

                btn.classList.add('is-active');
            });
        });
    };

    const headerScrolledHandler = () => {
        const header = document.querySelector('.js-header');
        if (!header) return;

        let lastScroll = 0;

        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > 10) {
                header.classList.add('is-scroll');
            } else {
                header.classList.remove('is-scroll');
            }

            if (currentScroll > lastScroll && currentScroll > 100) {
                header.classList.add('is-transform');
            } else {
                header.classList.remove('is-transform');
            }

            lastScroll = currentScroll;
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
    };
    const locationBox = () => {
        const locationBox = document.querySelector('.js-location-box');
        if (!locationBox) return;

        const headerLocationText = document.querySelector(
            '.header__location p',
        );
        if (!headerLocationText) return;

        const title = locationBox.querySelector('.location-box__title');
        if (!title) return;

        const controls = locationBox.querySelector('.js-loc-controls');
        const changeLocation = controls.querySelector('.js-change-loc');
        const submitLocation = controls.querySelector('.js-submit-loc');
        if (!changeLocation || !submitLocation) return;

        const map = locationBox.querySelector('.js-loc-map');
        if (!map) return;

        const cities = map.querySelectorAll('.js-city-loc');
        if (!cities.length) return;

        const savedCity = localStorage.getItem('selectedCity');

        if (savedCity) {
            headerLocationText.textContent = savedCity;
            title.textContent = savedCity.replace('м. ', '') + '?';
        } else {
            setTimeout(() => {
                locationBox.classList.add('is-show');
            }, 400);
        }

        submitLocation.addEventListener('click', (e) => {
            e.stopPropagation();

            const currentCity = headerLocationText.textContent.trim();

            localStorage.setItem('selectedCity', currentCity);

            locationBox.classList.remove('is-show');
        });

        changeLocation.addEventListener('click', (e) => {
            e.stopPropagation();
            map.classList.add('is-show');
            controls.classList.add('is-hide');
        });

        cities.forEach((city) => {
            city.addEventListener('click', (e) => {
                e.stopPropagation();

                const cityText = city.textContent.trim();

                headerLocationText.textContent = cityText;
                title.textContent = cityText.replace('м. ', '') + '?';

                localStorage.setItem('selectedCity', cityText);

                map.classList.remove('is-show');
                controls.classList.remove('is-hide');
                locationBox.classList.remove('is-show');
            });
        });
    };

    headerScrolledHandler();
    targetBtnsHandler();
    locationBox();
};

export default headerHandler;
