import "Styles/sections/slider.scss";
import AxSwiper from "../components/swiper-element";

//Calcul hauteur de l'image si option "adapté à la taille de l'écran"
let sectionSlider = document.querySelector('[data-ax-section="slider"]');

const calcFullHeight = () => {
    let img = sectionSlider.querySelectorAll('.swiper-slide:not(.mobile_content-outside) .media--display'),
        headerHeight = document.getElementById('shopify-section-header').offsetHeight,
        announcementBarHeight = document.getElementById('shopify-section-announcement-bar').offsetHeight,
        heightToRemove = headerHeight + announcementBarHeight + 'px';
    img.forEach(image => {
        image.style.height = `calc(100vh - ${heightToRemove})`;
    })
}

if (sectionSlider.querySelectorAll('.media--display') !== undefined) {
    calcFullHeight();
}

//Override Swiper
class AxSlider extends AxSwiper {
    constructor() {
        super();
    }

    init () {
        let firstSlide = this.config.random_slide && this.config.loop ? Math.floor(Math.random() * this.config.slider_length) : 0;

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
            }
        });

        //LazyLoad
        this.swiperInstance.el.addEventListener('mouseenter', () => {
            let otherSlides = JSON.parse(decodeURIComponent(escape(window.atob(this.swiperInstance.el.dataset.otherSlides))));
            this.swiperInstance.appendSlide(otherSlides);
            this.swiperInstance.el.removeAttribute('data-other-slides');
        }, { once: true });
    }
}

customElements.get('swiper-slider') || customElements.define('swiper-slider', AxSlider);