
// wait for page to load
/*
document.addEventListener("DOMContentLoaded", function() { // document ready

	// menu declarations
	let menu_trigger = document.querySelector('.nav-bar');
	let menu_bar = document.querySelector('.nav-unrolled-menu');


	// menu functionality
	function unrollMenu() {
		let menuStatus = menu_bar.style.visibility;
		console.log(String(menuStatus));
		if (menuStatus === 'visible') {

			menu_bar.style.visibility = 'collapse'; // collapse
		} else if (menuStatus === 'collapse') {
			menu_bar.style.visibility = 'visible';  // show
		} else {
			menu_bar.style.visibility = 'visible'; // handle the initial case
		}
		
		console.log('unroll menu');
	}


	// menu event listeners
	menu_trigger.addEventListener('click',unrollMenu)
	

}); // document ready enclosure

*/


document.addEventListener("DOMContentLoaded", function() { // document ready

	// menu declarations
	let menu_trigger = document.querySelector('.nav-bar');
	let menu_bar = document.querySelector('.nav-main-menu');


	// menu functionality
	function unrollMenu() {
		menu_bar.classList.toggle('unrolled');
	}


	// menu event listeners
	menu_trigger.addEventListener('click',unrollMenu)
	

}); // document ready enclosure


