document.addEventListener("DOMContentLoaded", function() { // check document ready (wrapper)

	// test json loading -
	// solution from https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
	// todo it's working, implement dynamic gallery loading
	


	// nav bar declarations
	const nav = document.querySelector('.nav-bar');
	let topOfNav = nav.offsetTop;
	console.log(topOfNav);
	// gallery page declarations
	let page1Button = document.querySelector('#button1');
	let page2Button = document.querySelector('#button2');
	let page3Button = document.querySelector('#button3');

	let gallery = document.querySelectorAll('.portfolio-items')[0];
	console.log(gallery);

	// gallery images // todo ditch this
	let galleryImages = Array.from(document.querySelectorAll('.img-container'));
	console.log(galleryImages) // for testing

	// load the gallery on first visit
	loadJSON(function(response) {
	  
	    var json_response = JSON.parse(response); // Parse JSON string into object
	    //console.log(json_response);

	    prefix = "media/"; // turn the image names into paths
	    page_imgs = json_response.p0
	    //console.log(page_imgs)
	    html_chunks = page_imgs.map( img_name =>  // todo replace this with appropriate html:
`<a href="${prefix+img_name}.svg">
    <div class="img-container">
      <img class="svg-item square" src="${prefix+img_name}.svg"
      />
    </div>
  </a>
`
		);
	    //console.log(html_chunks)
	    //todo write html based on image_paths & insert into DOM
	    let galleryHTML = html_chunks.reduce( (oldString,newString) => oldString+newString, "");
		console.log(galleryHTML);

		gallery.innerHTML = galleryHTML;
		console.log(gallery);

		// todo insert galleryHTML into DOM
	});

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
		if (e.target.id == 'button1') {
			pageID = 1;
		} else if (e.target.id =='button2') {
			pageID = 2;
		} else if (e.target.id == 'button3') {
			pageID = 3;
		}
		let visiblePageIdString = '#page' + pageID;

		for (let page_idx = 0; page_idx < 3; page_idx++) {
			// set each page to hidden
			idString = '#page' + (page_idx+1);
			let invisiblePage = document.querySelector(idString);
			invisiblePage.classList.remove("unrolled"); // do we need to check the cases where unrolled is already absent from the class list?
		}
		// set pageID'th page to unrolled
		visiblePage = document.querySelector(visiblePageIdString)
		visiblePage.classList.toggle("unrolled");		
	}

	function loadJSON(callback) {   

	    var xobj = new XMLHttpRequest();
	        xobj.overrideMimeType("application/json");
	    xobj.open('GET', 'media/portfolio_page.json', true); // Replace 'my_data' with the path to your file
	    xobj.onreadystatechange = function () {
	          if (xobj.readyState == 4 && xobj.status == "200") {
	            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
	            callback(xobj.responseText);
	          }
	    };
	    xobj.send(null);  
 	}


	// nav bar listeners
	window.addEventListener('scroll', fixNav);
	// gallery page listeners
    page1Button.addEventListener('click', setPage);
    page2Button.addEventListener('click', setPage);
    page3Button.addEventListener('click', setPage);



});
