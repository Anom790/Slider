document.querySelector('.catalog').addEventListener('click', function() {
		this.classList.toggle('open');

});

const tabsTitle = document.querySelectorAll('.tab__title');
const tabsContent = document.querySelectorAll('.tab__content');

tabsTitle.forEach(item => item.addEventListener('click', event => {

	const tabsTitleTarget = event.target.getAttribute('data-tab');

	tabsTitle.forEach(element => element.classList.remove('active-tab'));

	tabsContent.forEach(element => element.classList.add('hidden-tab-content'));

	item.classList.add('active-tab');

	document.getElementById(tabsTitleTarget).classList.remove('hidden-tab-content');

}));

document.querySelector('[data-tab="tab-1"]').classList.add('active-tab');
document.querySelector('#tab-1').classList.remove('hidden-tab-content');




const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	slidesPerView: 5,
	grabCursor: true,
	speed: 500,
	grid: {
	  rows: 2,
	  slidePerView: 5,
	},



	
 

	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-right',
	  prevEl: '.swiper-button-left',
	},

	

	

 });

 




 
 const gallary = new Swiper('.gallary', {

	pagination: {

		el: ".yes",
		clickable: true,
		
	 },


	 	slideActiveClass: 'foto-slide-active',
	 	slideNextClass: 'foto-slide-next',


      grabCursor: true,
		loop: false,
	 	
		

		slidesPerView: 'auto',
		spaceBetween: 140,
		centeredSlides: true,
		slidesPerGroup: 1,
		speed: 500,
		initialSlide: 2,


		navigation: {
			nextEl: '.btn-ref',
			prevEl: '.btn-lef',
		},

	

 });
