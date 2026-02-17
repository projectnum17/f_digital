const selectInit = () => {
    const lightweightDropdown = (selectEl) => {
        if (!selectEl) return;

        const options = Array.from(selectEl.options);
        if (options.length === 0) return;

        selectEl.classList.add('select-hidden');

        const wrap = document.createElement('div');
        wrap.className = 'select-wrap';
        selectEl.parentNode.insertBefore(wrap, selectEl);
        wrap.appendChild(selectEl);

        const styledSelect = document.createElement('div');
        styledSelect.className = 'select-styled';

        const placeholderSpan = document.createElement('span');
        placeholderSpan.className = 'placeholder-text';
        placeholderSpan.textContent = options[0].textContent;
        styledSelect.appendChild(placeholderSpan);

        const selectedSpan = document.createElement('span');
        selectedSpan.className = 'selected-text';
        selectedSpan.textContent = '';
        styledSelect.appendChild(selectedSpan);

        wrap.appendChild(styledSelect);

        const list = document.createElement('ul');
        list.className = 'select-options hidden';
        wrap.appendChild(list);

        options.forEach((opt) => {
            const li = document.createElement('li');
            li.textContent = opt.textContent;
            li.dataset.value = opt.value;
            if (opt.selected) li.classList.add('is-selected');
            list.appendChild(li);
        });

        const updateSelection = (value, text) => {
            selectedSpan.textContent = text;

            if (value === '' || value === null) {
                styledSelect.classList.remove('selected');
            } else {
                styledSelect.classList.add('selected');
            }

            selectEl.value = value;
            const index = options.findIndex((opt) => opt.value === value);
            if (index >= 0) selectEl.selectedIndex = index;

            selectEl.dispatchEvent(new Event('change', { bubbles: true }));

            list.querySelectorAll('.is-selected').forEach((li) =>
                li.classList.remove('is-selected'),
            );
            const activeLi = list.querySelector(`li[data-value="${value}"]`);
            if (activeLi) activeLi.classList.add('is-selected');
        };

        styledSelect.addEventListener('click', (e) => {
            e.stopPropagation();
            document.querySelectorAll('.select-styled.active').forEach((el) => {
                if (el !== styledSelect) {
                    el.classList.remove('active');
                    el.nextElementSibling.classList.add('hidden');
                }
            });
            styledSelect.classList.toggle('active');
            list.classList.toggle('hidden');
        });

        list.addEventListener('click', (e) => {
            const target = e.target;
            if (target.tagName !== 'LI') return;
            updateSelection(target.dataset.value, target.textContent);
            styledSelect.classList.remove('active');
            list.classList.add('hidden');
        });

        document.addEventListener('click', () => {
            styledSelect.classList.remove('active');
            list.classList.add('hidden');
        });

        selectEl.addEventListener('change', () => {
            const selectedOption = selectEl.selectedOptions[0];
            updateSelection(selectedOption.value, selectedOption.textContent);
        });

        const form = selectEl.closest('form');
        if (form) {
            form.addEventListener('reset', () => {
                selectEl.selectedIndex = 0;
                selectedSpan.textContent = '';
                styledSelect.classList.remove('selected');

                list.querySelectorAll('.is-selected').forEach((li) =>
                    li.classList.remove('is-selected'),
                );
                const firstLi =
                    list.querySelector('li[data-value=""]') || list.firstChild;
                if (firstLi) firstLi.classList.add('is-selected');
            });
        }
    };

    const selects = document.querySelectorAll('.js-select');
    if (!selects.length) return;

    selects.forEach(lightweightDropdown);
};

export default selectInit;
