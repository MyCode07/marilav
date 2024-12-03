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

        if (link.closest('.header__bottom') && link.getAttribute('href') == '/#mainservices') {
            link.insertAdjacentHTML('afterend', arrow);
        }

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



const serviceMenu = document.querySelector('.menu-service');
const serviceMenulink = document.querySelector('.header__bottom [href="/#mainservices"]');

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


    if (targetEl.closest('.header__bottom')) {
        if (targetEl.hasAttribute('href') && targetEl.getAttribute('href') == '/#mainservices') {
            e.preventDefault();
            const li = targetEl.closest('li')
            li.classList.toggle('_active');
            serviceMenu.classList.toggle('_open');

            set();
        }

        if (targetEl.closest('li') && targetEl.tagName == 'BUTTON' && targetEl.closest('li').querySelector('[href="/#mainservices"]')) {
            const li = targetEl.closest('li')
            li.classList.toggle('_active');
            serviceMenu.classList.toggle('_open');

            set();
        }
    }

    if (targetEl.classList.contains('menu-service__close')) {
        serviceMenu.classList.remove('_open');
        serviceMenulink.closest('li').classList.remove('_active')
    }

    if (targetEl.hasAttribute('data-menu-item')) {
        const menuId = targetEl.getAttribute(`data-menu-item`);
        const menu = document.querySelector(`[data-servce-menu="${menuId}"]`);

        const allMenuItems = document.querySelectorAll('.menu-service [data-menu-item]');
        const allMenus = document.querySelectorAll('.menu-service [data-servce-menu]');

        allMenuItems.forEach(item => {
            const itemId = item.getAttribute(`data-menu-item`);

            if (itemId == menuId) {
                item.classList.add('_active')
            }
            else {
                item.classList.remove('_active')
            }
        })

        allMenus.forEach(item => {
            const itemId = item.getAttribute(`data-servce-menu`);

            if (itemId == menuId) {
                item.classList.add('_active')
            }
            else {
                item.classList.remove('_active')
            }
        })
    }
})


const set = () => {
    const header = document.querySelector('header');
    const headerheigth = header.getBoundingClientRect().height;

    serviceMenu.style.height = window.innerHeight - headerheigth + 'px'
    serviceMenu.style.top = headerheigth + 'px'
}


function setServiceMenuTop() {
    set();

    window.addEventListener('resize', set);
    window.addEventListener('scroll', set);
}
setServiceMenuTop();