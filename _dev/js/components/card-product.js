let cartProductMiniatures = document.querySelectorAll('.product-miniature .card__content [data-img]');
cartProductMiniatures.forEach(miniature => {
	let imgBlock = miniature.closest('.product-miniature').querySelector('.media img');
	let miniatureUrl = miniature.dataset.img;
	let originalImgUrl = imgBlock.src;

	miniature.addEventListener('mouseenter', () => {
		imgBlock.srcset = miniatureUrl;
	})
	miniature.addEventListener('mouseleave', () => {
		imgBlock.srcset = originalImgUrl;
	})
})