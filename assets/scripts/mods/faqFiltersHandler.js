const faqFiltersHandler = () => {
    const btns = document.querySelectorAll('.js-faq-filter');

    if (!btns.length) return;

    btns[0].classList.add('is-active');

    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            btns.forEach((el) => el.classList.remove('is-active'));
            btn.classList.add('is-active');
            btn.scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest',
            });
        });
    });
};

export default faqFiltersHandler;
