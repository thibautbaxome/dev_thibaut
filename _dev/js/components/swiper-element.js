const AxSwiper = class extends HTMLElement {
    constructor() {
        super();
        this.slider = this.querySelector('[id^="Swiper-"]');
        this.slides = this.querySelectorAll('.swiper-slide');
        this.sliderLength = this.slides.length;
        this.prevButtonEl = this.querySelector(".swiper-button-prev");
        this.nextButtonEl = this.querySelector(".swiper-button-next");
        this.paginationEl = this.querySelector(".swiper-pagination");
        this.config = JSON.parse(this.slider.dataset.options);
        this.swiperInstance = null;
        this.init();
    }

    init () {
        this.swiperInstance = new window.Swiper(this.slider, {
            loop: this.config.loop,
            effect: this.config.effect,
            grabCursor: this.config.grabCursor,
            speed: this.config.speed,
            pagination: {
                el: this.paginationEl,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1.5,
                    slidesPerGroup: 1,
                    navigation: false,
                },
                768: {
                    slidesPerView: 2,
                    navigation: false
                },
                1200: {
                    slidesPerView: this.config.slideInView,
                    slidesPerGroup: this.config.slidesToMove,
                    navigation: {
                        prevEl: this.prevButtonEl,
                        nextEl: this.nextButtonEl,
                    },
                },
                2000: {
                    slidesPerView: this.config.slideInView === 4 || this.config.slideInView === 3 ? this.sliderLength >= 5 ? this.config.slideInView + 1 : this.sliderLength : this.config.slideInView,
                    slidesPerGroup: this.config.slidesToMove,
                    navigation: {
                        prevEl: this.prevButtonEl,
                        nextEl: this.nextButtonEl,
                    }
                }
            }
        });
    }
}

export default AxSwiper;