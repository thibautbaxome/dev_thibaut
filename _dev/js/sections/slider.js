import "Styles/sections/slider.scss";
import AxSwiper from "../components/swiper-element";

//Override Swiper
class AxSlider extends AxSwiper {
    constructor() {
        super();
    }

    init () {
        let firstSlide = this.config.random_slide && this.config.loop ? Math.floor(Math.random() * this.config.slider_length) : 0;
        let needLazyLoad = true;

        this.swiperInstance = new window.Swiper(this.slider, {
            loop: this.config.loop,
            slidesPerView: this.config.slideInView,
            slidesPerGroup: this.config.slidesToMove,
            autoplay: this.config.autoplay,
            speed: this.config.speed,
            effect: this.config.effect,
            freeMode: this.config.freemode_mobile,
            initialSlide: firstSlide,
            pagination: {
                el: this.paginationEl,
            },
            navigation: {
                prevEl: this.prevButtonEl,
                nextEl: this.nextButtonEl,
            },
            breakpoints: {
                1200: {
                    grabCursor: this.config.grabCursor,
                    freeMode: false,
                }
            },
            on: {
                afterInit: function (swiper) {
                    const addSlides = () => {
                        needLazyLoad = false;
                        let otherSlides = JSON.parse(decodeURIComponent(escape(window.atob(swiper.el.dataset.otherSlides))));
                        swiper.appendSlide(otherSlides);
                        swiper.el.removeAttribute('data-other-slides');
                    }

                    ['ontouchstart', 'click', 'mousemove'].forEach(function (evt) {
                        window.addEventListener(evt, function () {needLazyLoad === true && addSlides()});
                    })
                }
            }
        })
    }
}

customElements.get('swiper-slider') || customElements.define('swiper-slider', AxSlider);