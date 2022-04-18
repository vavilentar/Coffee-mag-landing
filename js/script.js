
const tl = gsap.timeline({defaults: { duration: 0.5, ease: "power3.easeOut" }
});

// tl.fromTo('.overview, .header', {opacity: 0}, {opacity: 1})
// tl.fromTo('.overview-title', {opacity: 0}, {opacity: 1},"<75%")
// tl.fromTo('.overview-subtitle', {opacity: 0}, {opacity: 1},"<50%")
// tl.fromTo('.button-view', {opacity: 0}, {opacity: 1}, "<20%")

// // gsap.registerPlugin(ScrollTrigger);

// tl.fromTo('.info', {scrollTrigger: {
// 	trigger: '.info',
// 	toggleActions: "restart none none none"
// }, opacity: 0}, {opacity: 1})
// tl.fromTo('.featured', {scrollTrigger: '.featured', opacity: 0}, {opacity: 1})
// tl.fromTo('.products', {scrollTrigger: '.products', opacity: 0}, {opacity: 1})
// tl.fromTo('.promo', {scrollTrigger: '.promo', opacity: 0}, {opacity: 1})
// tl.fromTo('.coffee-img', {scrollTrigger: '.coffee-img', opacity: 0}, {opacity: 1})
// tl.fromTo('.stories', {scrollTrigger: '.stories', opacity: 0}, {opacity: 1})
// tl.fromTo('.updates', {scrollTrigger: '.updates', opacity: 0}, {opacity: 1})

const toggleMenuBtn = document.querySelector('.btn-hamburger');
const menuShow = document.querySelector('.navbar');

toggleMenuBtn.addEventListener('click', (e) =>{
	e.preventDefault();
	tl.fromTo('.navbar', {opacity: 0}, {opacity: 1});
	menuShow.classList.toggle('navbar')
	menuShow.classList.toggle('navbar-show')
})