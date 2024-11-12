const prices = document.querySelectorAll('.price-table');

if (prices.length) {
    prices.forEach(price => {
        const btn = price.querySelector('.show-more');

        if (btn) {
            btn.addEventListener('click', () => {
                btn.classList.toggle('_active')

                if (btn.classList.contains('_active')) {
                    btn.textContent = btn.dataset.textHide
                }
                else {
                    btn.textContent = btn.dataset.textShow
                }

                price.classList.toggle('_active')
            })
        }
    })
}