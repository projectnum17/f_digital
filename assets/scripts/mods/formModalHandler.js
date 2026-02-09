const formModalHandler = () => {
    const modalTriggers = document.querySelectorAll('.js-modal-trigger');
    const modalBox = document.querySelector('.js-modal-form');

    if (!modalTriggers.length || !modalBox) return;

    const modalContent = modalBox.querySelector('.js-modal-content');
    const modalClose = modalBox.querySelector('.js-modal-close');

    if (!modalContent || !modalClose) return;

    const showModal = () => {
        document.body.classList.add('is-locked');
        modalBox.classList.add('is-show');
    };

    const closeModal = () => {
        document.body.classList.remove('is-locked');
        modalBox.classList.remove('is-show');
    };

    modalTriggers.forEach((trigger) =>
        trigger.addEventListener('click', showModal),
    );

    modalClose.addEventListener('click', closeModal);

    document.addEventListener('click', (e) => {
        if (
            !modalContent.contains(e.target) &&
            !e.target.closest('.js-modal-trigger')
        ) {
            closeModal();
        }
    });
};

export default formModalHandler;
