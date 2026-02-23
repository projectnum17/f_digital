const mobileMenu = () => {
    const targetBtnsHandler = () => {
        const btns = document.querySelectorAll('.js-menu-target');

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

    const menuHandler = () => {
        const menuTrigger = document.querySelector('.js-menu-trigger');
        const menuBox = document.querySelector('.js-mob-menu');

        if (!menuTrigger || !menuBox) return;

        const menuToggle = () => {
            menuTrigger.classList.toggle('is-active');
            menuBox.classList.toggle('is-open');
            document.body.classList.toggle('is-locked');
        };

        menuTrigger.addEventListener('click', menuToggle);

        menuBox.addEventListener('click', (e) => {
            const submenuBtn = e.target.closest('.js-mob-menu li:has(ul) a');
            const backBtn = e.target.closest('.js-mob-menu li:has(ul) ul button');

            if (submenuBtn) {
                const submenuWrap = submenuBtn.nextElementSibling;
                if (submenuWrap) {
                    submenuWrap.classList.add('is-open');
                }
            }

            if (backBtn) {
                const ddWrap = backBtn.closest('.js-mob-menu li:has(ul) ul');
                if (ddWrap) {
                    ddWrap.classList.remove('is-open');
                }
            }
        });
    };

    menuHandler();
    targetBtnsHandler();
};

export default mobileMenu;
