// nav bar declarations
const nav = document.querySelector('.nav-bar');
let topOfNav = nav.offsetTop;
console.log(topOfNav);
// gallery page declarations
let page1Button = document.querySelector('#button1');
let page2Button = document.querySelector('#button2');
let page3Button = document.querySelector('#button3');

// nav bar funcionality
function fixNav() {
  if (window.scrollY >= topOfNav) {
    //document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
    //document.body.style.paddingTop = 0;
  }
}
// gallery page functionality
function setPage(e) {
	let pageID = -1;
	if (e.target.id == 'button1') {
		pageID = 1;
	} else if (e.target.id =='button2') {
		pageID = 2;
	} else if (e.target.id == 'button3') {
		pageID = 3;
	}
	let visiblePageIdString = '#page' + pageID;

	for (let page_idx = 0; page_idx < 3; page_idx++) {
		// set each page to collapsed
		idString = '#page' + (page_idx+1);
		let invisiblePage = document.querySelector(idString);
		invisiblePage.style.visibility = "collapse";
	}

	// set pageID'th page to visible
	visiblePage = document.querySelector(visiblePageIdString)
	visiblePage.style.visibility = "visible";
}

// nav bar listeners
window.addEventListener('scroll', fixNav);
// gallery page listeners
document.addEventListener("DOMContentLoaded",function(){ // document ready
    page1Button.addEventListener('click', setPage);
    page2Button.addEventListener('click', setPage);
    page3Button.addEventListener('click', setPage);
});
