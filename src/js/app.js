import { maskInputs } from "./static/inputmask.js";
import "./parts/sliders.js";
import "./parts/tabs.js";
import "./parts/show-more.js";
import "./parts/popup.js";
import "./parts/menu.js";
import "./parts/search.js";
import { accorden } from "./static/accordeon.js";
import { stickyHeader } from "./parts/header.js";



import { Fancybox } from "@fancyapps/ui";
import { replaceDomElements } from "./static/replace.js";
import './static/before-after.js'


accorden();
replaceDomElements();



stickyHeader();
maskInputs('+7 (999) 999-99-99', '._mask-phone')
// animateAction();
// animateStaggerAction();

Fancybox.bind("[data-fancybox]", {
    Carousel: {
        Panzoom: {
        },
    },
});

import "./pages.js";


// const inputItems = [...document.querySelectorAll('input ')].concat([...document.querySelectorAll('textarea ')])
// if (inputItems.length) {
//     inputItems.forEach(input => {
//         if (input.closest('.form__item')) {
//             input.addEventListener('input', () => {
//                 console.log(input.value);
//                 if (input.value != '') {
//                     input.classList.add('_active')
//                 }
//                 else {
//                     input.classList.remove('_active')
//                 }
//             })
//         }
//     })
// }

