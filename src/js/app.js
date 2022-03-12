import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

let slideList = document.body.querySelector('.swiper-wrapper');
const swiper = new Swiper('.swiper', {
	loop: true,
	direction: 'horizontal',
	autoplay: {
		delay: 50000000,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: 'true',
		renderBullet: function (index, className) {
			let k = slideList.querySelector(`.swiper-slide[data-swiper-slide-index="` + index + `"]`);
			return `<div class="pag ` + className + `">
				<div class="pag__name">` + k.dataset.paganation + `</div>
				<div class="pag__progress"></div>
			</div>`
		},

	},
});
const brandsSwiper = new Swiper('.brands-swiper', {
	slidesPerView: 7,
	spaceBetween: 10,
	freeMode: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});




let dropdownList = document.querySelectorAll('.dropdown')
dropdownList.forEach(dropdown => {

	dropdown.addEventListener('mouseenter', (e) => {
		if (dropdown.classList.contains('closed')) {
			dropdown.classList.remove('closed')
		}
	})
	dropdown.addEventListener('mouseleave', (e) => {
		if (!dropdown.classList.contains('closed')) {
			dropdown.classList.add('closed')
		}
	})
})



let citySelector = document.body.getElementsByClassName('header__city');
let currentCity = document.body.querySelector('#citySelector');
console.log(currentCity.innerHTML);
citySelector[0].addEventListener('click', e => {
	if (e.target.classList[0] == 'dropdown__link') {
		currentCity.innerHTML = e.target.innerHTML + `<img class="arrow " src="./img/svg/up-arrow.svg" alt=""></img>`;
	}
})


let burger = document.body.querySelector('.header__account')
burger.addEventListener('click', () => {
	burger.classList.toggle('_active')
})