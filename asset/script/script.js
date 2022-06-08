// Navbar
	const menuToggle = document.querySelector('.menu-toogle input');
	const nav = document.querySelector('.nav-items');

	menuToggle.addEventListener('click', function () {
		nav.classList.toggle('active')
	});



// Navbar Items
  let anchor = document.querySelectorAll('.nav-items li a')
	for( let i = 0; i < anchor.length; i++ ){
		anchor[i].addEventListener('click', function(){

		let active = nav.classList.contains('active')
			if(active){
				nav.classList.remove('active')
			}
		  })
     	}

// Function untuk munculin element pas di scroll

	window.addEventListener('scroll',muncul);
	function muncul (){

	let tinggiLayar = window.innerHeight;
	let ukuranScroll = 150;

	hilangg('.fitur-desc', 'tampil-atas')
	hilangg('.tentang', 'tampil-atas')
	hilangg('.profil', 'tampil-atas')
	hilangg('.donglod', 'tampil-atas')
	hilangg('.jumbotron-img', 'tampil-samping')

// ------------------------------------------------------------

	let fiturCard = document.querySelectorAll('.fitur-items article')
	for(let i = 0 ; i < fiturCard.length; i++){

	let jarakAtas6 = fiturCard[i].getBoundingClientRect().top;
		if (jarakAtas6 < tinggiLayar - ukuranScroll ) {
			fiturCard[i].classList.add('tampil-atas')
		}else{
			fiturCard[i].classList.remove('tampil-atas')
		}
	}

// ------------------------------------------------------------

	function hilangg (element, arah){
		let elements = document.querySelector(element)
		let jarakAtas1 = elements.getBoundingClientRect().top;

		if (jarakAtas1 < tinggiLayar - ukuranScroll ) {
			elements.classList.add(arah)
		}else{
			elements.classList.remove(arah)
		}
	}
}

// supaya Scroll nya mulus  

	var posisiY = 0;
	var jarak = 20;
	function smoothScroll(id){
		var target = document.getElementById(id).offsetTop;
		var scrollAnimate = setTimeout(function(){
			smoothScroll(id);
		}, 5)

		posisiY = posisiY + jarak;

		if (posisiY >= target) {
			clearTimeout(scrollAnimate);
			posisiY = 0;
		}else {
			window.scroll(0, posisiY)
		}
	}
