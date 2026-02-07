const contentTabsHandler = (tabsWrapper, tabsEls, content) => {
    const tabsParent = document.querySelector(tabsWrapper);
    if (!tabsParent) return;

    const tabs = tabsParent.querySelectorAll(tabsEls);
    const tabContent = document.querySelectorAll(content);

    if (!tabs.length || !tabContent) return;

    const hideTabContent = () => {
        tabContent.forEach((el) => {
            el.classList.add('tab-hide');
            el.classList.remove('tab-show', 'tab-fade');
        });
        tabs.forEach((el) => el.classList.remove('is-active'));
    };

    const showTabContent = (i = 0) => {
        tabContent[i].classList.remove('tab-hide');
        tabContent[i].classList.add('tab-show', 'tab-fade');
        tabs[i].classList.add('is-active');
    };

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const tab = e.target.closest(tabsEls);

        if (!tab) return;

        tabs.forEach((el, i) => {
            if (tab === el) {
                hideTabContent();
                showTabContent(i);
            }
        });
    });
};

export default contentTabsHandler;
