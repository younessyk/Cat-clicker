let cats = ['Kitty', 'Mitty', 'Finny', 'Lilly', 'Vinny', 'Zizzy'];
let images = ['img/Kitty.jpeg', 'img/Mitty.jpeg', 'img/Finny.jpeg', 'img/Lilly.jpeg', 'img/Vinny.jpeg', 'img/Zizzy.jpeg'];

for (let i = 0; i < cats.length; i++) {
	let cat = cats[i];
	let image = images[i];
	let clickCounter = 0;

	// Create list of cats
	let catContainer = document.querySelector('.cat-list');
    let catListItem = document.createElement('li');
	catListItem.innerHTML = cat;
	catContainer.appendChild(catListItem);

	// Display of the images
 	let catDisplay = document.querySelector('.cat-display');

	let clickNumber = document.querySelector('.click-number');

	// Click event for each cat
	catListItem.addEventListener('click', (function(e) {
		return function(e) {
			// Clean display for new cat
			catDisplay.innerHTML = "";

			// Add specific image
		 	let catImg = document.createElement('img');
		 	catImg.src = image;

		 	// Add specific name
		 	let catName = document.createElement('h3');
		 	catName.innerHTML = cat;

		 	// Attach specific image and name to the Display Area 
		 	catDisplay.appendChild(catImg);
		 	catDisplay.appendChild(catName);

		 	// Attach specific counter of the cat to the HTML.
		 	// Retains last number of click.
		 	clickNumber.innerHTML = clickCounter;		 	

		 	// Click event for each image of specific cat
			catImg.addEventListener('click', (function(e) {
				return function(e) {
				 	clickCounter++;
				 	clickNumber.innerHTML = clickCounter;		 	
				};
			})(cat));
		};
	})(cat));
};
