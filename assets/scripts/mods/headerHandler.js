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

    targetBtnsHandler();
};

export default headerHandler;
