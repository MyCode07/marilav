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
                spaceBetween: 4,
            });

            new Swiper('.mainSwiper', {
                modules: [
                    Navigation, Thumbs, Pagination
                ],
                spaceBetween: 20,
                slidesPerView: 1,
                pagination: {
                    el: pagination,
                    clickable: true,
                },
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
                thumbs: {
                    swiper: thumbs,
                },
            });
        }
        if (slider.closest('.advantages') && window.innerWidth <= 1024) {
            new Swiper(slider, {
                modules: [Autoplay, Navigation, Pagination],
                slidesPerView: "auto",
                spaceBetween: 8,
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
                pagination: {
                    el: pagination,
                    type: 'bullets',
                    clickable: true,
                },

            })
        }
        if (slider.closest('.discounts')) {
            new Swiper(slider, {
                modules: [Autoplay, Navigation, Pagination],
                slidesPerView: "auto",
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
                pagination: {
                    el: pagination,
                    type: 'fraction',
                },
                breakpoints: {
                    300: {
                        spaceBetween: 8,
                    },
                    1025: {
                    },
                    1025: {
                        slidesPerView: "auto",
                        spaceBetween: 30,
                    },
                }
            })
        }
        if (slider.closest('.gallery')) {
            new Swiper(slider, {
                modules: [Autoplay, Navigation, Pagination],
                slidesPerView: "auto",
                centeredSlides: true,
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
                pagination: {
                    el: pagination,
                    type: 'bullets',
                    clickable: true,
                },
                breakpoints: {
                    300: {
                        spaceBetween: 20,
                        slidesPerView: 1,
                    },
                    500: {
                        spaceBetween: 50,
                    },
                    1025: {
                        spaceBetween: 112,
                        slidesPerView: "auto",

                    },
                }
            })
        }
        if (slider.closest('.doctors')) {
            new Swiper(slider, {
                modules: [Autoplay, Scrollbar],
                slidesPerView: 4,
                spaceBetween: 20,
                scrollbar: {
                    el: ".swiper-scrollbar",
                    hide: true,
                },
                breakpoints: {
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 10,

                    },
                    500: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1025: {
                        slidesPerView: 4,
                    },
                }
            })
        }
    })
}

