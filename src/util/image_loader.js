let images = [
	'./assets/background/sunnybackground.jpg',
	'./assets/sorcerer/Idle.png',
	'./assets/sorcerer/idle_left.png',
	'./assets/sorcerer/Run.png',
	'./assets/sorcerer/sorcerer_run_left.png',
	'./assets/sorcerer/Jump.png'
]

function loadImages(imagefiles) {
		let images = []
		let loadcount = 0;
		let loadtotal = 0;
		let preloaded = false; 
		
		
		 loadcount = 0;
		 loadtotal = imagefiles.length; 
		 preloaded = false; 
		
		 // Load the images
		 let loadedimages = [];
		 for (let i = 0; i < imagefiles.length; i++) {
			let image = new Image();
		
			// Add onload event handler 
			image.onload = function() {
				loadcount++ 
				if (loadcount === loadtotal) {
					preloaded = true; 
				}
			};
		
			// Set the source of the url of the image
			image.src = imagefiles[i];
			loadedimages[i] = image;
		 }
		 return images = loadedimages;
}

export const loadedImages = loadImages(images);
//export default function loadImages(imagefiles) {
//let loadcount = 0;
//let loadtotal = 0;
//let preloaded = false; 


// loadcount = 0;
// loadtotal = imagefiles.length; 
// preloaded = false; 

// // Load the images
// let loadedimages = [];
// for (let i = 0; i < imagefiles.length; i++) {
//	let image = new Image();

//	// Add onload event handler 
//	image.onload = function() {
//		loadcount++ 
//		if (loadcount === loadtotal) {
//			preloaded = true; 
//		}
//	};

//	// Set the source of the url of the image
//	image.src = imagefiles[i];
//	loadedimages[i] = image;
// }
// return loadedimages;
//}