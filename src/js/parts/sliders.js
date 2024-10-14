import Swiper from 'swiper';
import { Pagination, Autoplay, Thumbs, Navigation, Scrollbar, FreeMode } from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');

if (sliders.length) {
    sliders.forEach(slider => {
        const section = slider.closest('section');
        let prev = section.querySelector('.prev')
        let next = section.querySelector('.next')
        let pagination = section.querySelector('.pagination')

        if (slider.closest('.mainSwiper')) {
            const thumbs = new Swiper('.thumbsSlider', {
                modules: [
                    FreeMode
                ],
                direction: 'vertical',
                freeMode: true,
                watchSlidesProgress: true,
                slidesPerView: 'auto',
                spaceBetween: 8,
            });

            new Swiper('.mainSwiper', {
                modules: [
                    Thumbs, Pagination
                ],
                spaceBetween: 20,
                slidesPerView: 1,
                pagination: {
                    el: pagination,
                    clickable: true,
                },
                thumbs: {
                    swiper: thumbs,
                },
            });
        }
        // if (slider.closest('.consultations')) {
        //     new Swiper(slider, {
        //         modules: [Autoplay, Navigation, Pagination],
        //         slidesPerView: 3,
        //         spaceBetween: 20,
        //         navigation: {
        //             prevEl: prev,
        //             nextEl: next,
        //         },
        //         pagination: {
        //             el: pagination,
        //             type: 'bullets',
        //             clickable: true,
        //         },
        //         breakpoints: {
        //             300: {
        //                 slidesPerView: 1,
        //             },
        //             500: {
        //                 slidesPerView: 2,
        //             },
        //             1025: {
        //                 slidesPerView: 3,
        //             },
        //         }
        //     })
        // }
        // if (slider.closest('.video')) {
        //     new Swiper(slider, {
        //         modules: [Autoplay, Navigation, Pagination],
        //         slidesPerView: 4,
        //         spaceBetween: 20,
        //         navigation: {
        //             prevEl: prev,
        //             nextEl: next,
        //         },
        //         pagination: {
        //             el: pagination,
        //             type: 'bullets',
        //             clickable: true,
        //         },
        //         breakpoints: {
        //             300: {
        //                 slidesPerView: 2,
        //                 spaceBetween: 10,

        //             },
        //             500: {
        //                 slidesPerView: 3,
        //                 spaceBetween: 20,
        //             },
        //             1025: {
        //                 slidesPerView: 4,
        //             },
        //         }
        //     })
        // }
        // if (slider.closest('.gallery')) {
        //     new Swiper(slider, {
        //         modules: [Autoplay, Navigation, Pagination],
        //         slidesPerView: "auto",
        //         centeredSlides: true,
        //         navigation: {
        //             prevEl: prev,
        //             nextEl: next,
        //         },
        //         pagination: {
        //             el: pagination,
        //             type: 'bullets',
        //             clickable: true,
        //         },
        //         breakpoints: {
        //             300: {
        //                 spaceBetween: 20,
        //                 slidesPerView: 1,
        //             },
        //             500: {
        //                 spaceBetween: 50,
        //             },
        //             1025: {
        //                 spaceBetween: 112,
        //                 slidesPerView: "auto",

        //             },
        //         }
        //     })
        // }
        // if (slider.closest('.doctors')) {
        //     new Swiper(slider, {
        //         modules: [Autoplay, Scrollbar],
        //         slidesPerView: 4,
        //         spaceBetween: 20,
        //         scrollbar: {
        //             el: ".swiper-scrollbar",
        //             hide: true,
        //         },
        //         breakpoints: {
        //             300: {
        //                 slidesPerView: 1,
        //                 spaceBetween: 10,

        //             },
        //             500: {
        //                 slidesPerView: 3,
        //                 spaceBetween: 20,
        //             },
        //             1025: {
        //                 slidesPerView: 4,
        //             },
        //         }
        //     })
        // }
    })
}

