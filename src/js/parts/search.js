const search = document.querySelector('.header__search');
const searchButton = document.querySelector('.header__search-button');

document.addEventListener('click', function (e) {
    let targetEl = e.target;
    console.log(targetEl);

    if (!targetEl.closest('.header__search') && !targetEl.classList.contains('header__search') && document.querySelector('.header__search._open')) {
        document.querySelector('.header__search._open').classList.remove('_open')
        document.querySelector('.header__search-button._open').classList.remove('_open')
    }

    if (targetEl.classList.contains('header__search-button')) {
        search.classList.toggle('_open');
        searchButton.classList.toggle('_open');
        console.log(11);

    }
})
