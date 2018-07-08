
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


