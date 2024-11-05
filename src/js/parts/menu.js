import { lockPadding, unLockPadding } from '../utils/lockPadding.js';


const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header nav');
const menuMobile = document.querySelector('.menu');
const allMenuLinks = document.querySelectorAll('nav ul li a');
const menuCloseBtn = document.querySelector('._close');
if (burger) {
    burger.addEventListener('click', (e) => {
        menu.classList.toggle('_open');
        menuMobile.classList.toggle('_open');
        burger.classList.toggle('_active');

        if (menu.classList.contains('_open')) {
            lockPadding();
        }
        else {
            unLockPadding();
        }
    })
}


if (menuCloseBtn) {
    menuCloseBtn.addEventListener('click', (e) => {
        menu.classList.remove('_open');
        burger.classList.remove('_open');
        unLockPadding();
    })
}


if (allMenuLinks.length) {
    allMenuLinks.forEach(link => {
        link.addEventListener('click', (е) => {
            if (menu.classList.contains('_open')) {
                menu.classList.remove('_open');
                unLockPadding();
            }
        })
    })
}


// menu arrow buttom
const arrow = `<button><svg width="13" height="8" viewBox="0 0 13 8"  xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.03441 0.0923667L0.658154 1.46862L5.12349 5.93395L5.12328 5.93416L6.49953 7.31041L12.341 1.46892L10.9648 0.0926666L6.49974 4.5577L2.03441 0.0923667Z"/>
</svg>
</button>`;

// add menu summenu opener button
const submenuList = document.querySelectorAll('nav ul li');
if (submenuList.length) {
    submenuList.forEach(li => {
        const submenu = li.querySelector('ul');
        const link = li.querySelector('a');

        if (submenu) {
            link.insertAdjacentHTML('afterend', arrow);
            const btn = li.querySelector('button');

            if (btn) {
                btn.addEventListener('click', function (e) {
                    toggleMenu(li)
                })
            }
        }
    })

    function toggleMenu(item) {
        const menu = item.closest('ul');
        const menuItems = menu.querySelectorAll('li');

        if (!item.hasAttribute('data-open')) {
            const openitem = menu.querySelector('li[data-open]');
            if (openitem) {
                openitem.removeAttribute('data-open')
            }

            menuItems.forEach(item => {
                item.removeAttribute('data-open')
            })

            item.setAttribute('data-open', 'open')
        }
        else {
            item.removeAttribute('data-open')
        }
    }
}



document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (!targetEl.closest('li[data-open]') && !targetEl.closest('nav') && document.querySelector('li[data-open]')) {
        document.querySelector('li[data-open]').removeAttribute('data-open')
    }

    if (targetEl.classList.contains('header__lang')) {
        targetEl.classList.toggle('_active');
    }

    if (!targetEl.closest('header__lang') && !targetEl.classList.contains('header__lang') && document.querySelector('.header__lang._active')) {
        document.querySelector('.header__lang._active').classList.remove('_active')
    }
})



// const pagesMenu = document.querySelector('.pages-menu');
// const pagesMenuButton = document.querySelector('.pages-menu button');

// pagesMenuButton.addEventListener('click', function () {
//     pagesMenu.classList.toggle('_active');

// })
