const connectTarget = () => {
    const btns = document.querySelectorAll('.js-appl-btn');

    if (!btns.length) return;

    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            btns.forEach((el) => el.classList.remove('is-active'));
            btn.classList.add('is-active');
        });
    });
};

export default connectTarget;
