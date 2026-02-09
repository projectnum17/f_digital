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

    headerScrolledHandler();
    targetBtnsHandler();
};

export default headerHandler;
