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
        if (slider.closest('.team__box')) {
            new Swiper(slider, {
                modules: [Autoplay, Scrollbar],
                scrollbar: {
                    el: ".swiper-scrollbar",
                    hide: true,
                },
                breakpoints: {
                    300: {
                        slidesPerView: 2,
                        spaceBetween: 8,
                    },
                    769: {
                        slidesPerView: 3,
                    },
                    1025: {
                        slidesPerView: 4,
                        spaceBetween: 30,
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
        if (slider.closest('.works')) {
            new Swiper(slider, {
                modules: [Autoplay, Pagination],
                slidesPerView: 'auto',
                pagination: {
                    el: pagination,
                    clickable: true,
                },
                breakpoints: {
                    300: {
                        spaceBetween: 12,
                    },

                    1025: {
                        spaceBetween: 28,
                    },
                }
            })
        }
        if (slider.closest('.licens')) {
            new Swiper(slider, {
                modules: [Pagination],
                pagination: {
                    el: pagination,
                    clickable: true,
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
                        spaceBetween: 30,
                        slidesPerView: 4,
                    },
                }
            })
        }



        if (window.innerWidth <= 1024) {
            if (slider.closest('.advantages') || slider.closest('.about-text')) {

                if (slider.closest('.has-slider-nav')) {
                    new Swiper(slider, {
                        modules: [Autoplay, Pagination, Navigation],
                        slidesPerView: "auto",
                        spaceBetween: 10,
                        navigation: {
                            prevEl: prev,
                            nextEl: next,
                        },
                        pagination: {
                            el: pagination,
                            clickable: true,
                        },
                    })
                }
                else {
                    new Swiper(slider, {
                        modules: [Autoplay, Pagination],
                        slidesPerView: "auto",
                        spaceBetween: 10,
                        pagination: {
                            el: pagination,
                            clickable: true,
                        },
                    })
                }
            }
        }
    })
}

