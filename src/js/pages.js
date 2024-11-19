document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.closest('.pages-menu') && targetEl.tagName == 'BUTTON') {
        targetEl.closest('.pages-menu').classList.toggle('_active')
    }

    if (!targetEl.closest('.pages-menu') && document.querySelector('.pages-menu')) {
        document.querySelector('.pages-menu').classList.add('_active')
    }
})

