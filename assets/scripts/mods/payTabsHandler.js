const payTabsHandler = () => {
    const tabsParent = document.querySelector('.js-pay-parent');
    if (!tabsParent) return;

    const tabs = tabsParent.querySelectorAll('.js-pay-tab');
    const contents = document.querySelectorAll('.js-pay-content');
    const contactBlock = document.querySelector('.js-pay-contact');

    if (!tabs.length || !contents.length) return;

    const hideAll = () => {
        contents.forEach((el) => {
            el.classList.add('tab-hide');
            el.classList.remove('tab-show', 'tab-fade');
        });

        tabs.forEach((el) => el.classList.remove('is-active'));
    };

    const showContent = (key) => {
        const targetContent = document.querySelector(
            `.js-pay-content[data-content="${key}"]`,
        );

        if (!targetContent) return;

        targetContent.classList.remove('tab-hide');
        targetContent.classList.add('tab-show', 'tab-fade');

        const activeTab = tabsParent.querySelector(
            `.js-pay-tab[data-tab="${key}"]`,
        );

        if (activeTab) activeTab.classList.add('is-active');

        if (contactBlock) {
            contactBlock.classList.toggle('tab-hide', key === 'terminals');
        }
    };

    const firstKey = tabs[2].dataset.tab;
    hideAll();
    showContent(firstKey);

    tabsParent.addEventListener('click', (e) => {
        const tab = e.target.closest('.js-pay-tab');
        if (!tab) return;

        const key = tab.dataset.tab;

        hideAll();
        showContent(key);
    });
};

export default payTabsHandler;
