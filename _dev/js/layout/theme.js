import SectionObserver from "../components/observer";
import AxSwiper from "../components/swiper-element";
import 'swiper/css/bundle';
import "Styles/layout/theme.scss";
import "../components/obfuscations";
import "../components/card-product";

import('swiper/bundle').then(() => {
	window.Swiper = require('swiper/bundle').default
	customElements.get('swiper-component') || customElements.define('swiper-component', AxSwiper);
	new SectionObserver('[data-ax-section]', 0);
})