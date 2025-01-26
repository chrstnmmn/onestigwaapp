// this will only show the first step when the page is fully loaded
window.onload = () => {
	ShowDOM();
	GetAllElement();
	SelectDOMLayers();
};

const elementDisplay = {
	showElement: "block",
	hideElement: "none",
};

// the function where in which step should be shown first when the page is loaded
function ShowDOM() {
	const SecondLayer = document.querySelector(".Second-Layer");
	SecondLayer.style.display = elementDisplay.showElement;
}

// getting the user input, when the button is pressed
// checking if the button that is pressed is the Next button or the
// Previous button, depending on the button the count may
// increase or decrease. This will dictate what series of steps should be
// shown, and this will find what index inside of array should be called.
const NextButton = document.querySelectorAll(".buttonNext");
NextButton.forEach((NextButons) => {
	NextButons.addEventListener("click", IncrementValue);
});
const PrevButton = document.querySelectorAll(".buttonPrev");
PrevButton.forEach((PrevButtons) => {
	PrevButtons.addEventListener("click", DecrementValue);
});

// these are the function for increasing the count or decreasing the count
let currentCount = 0;
function IncrementValue() {
	console.clear();
	currentCount += 1;
	// console.log("counting up: ", count);
	SelectDomElement(currentCount);
	SelectDOMLayers(currentCount);
}
function DecrementValue() {
	console.clear();
	currentCount -= 1;
	// console.log("counting down: ", count);
	SelectDomElement(currentCount);
	SelectDOMLayers(currentCount);
}

// this function is for getting all the DOM that relates to step-by-step
const domElements = [];
function GetAllElement() {
	// creating an array for getting all the DOM elements
	const steps = [
		document.querySelector(".Second-Layer"),
		document.querySelector(".Third-Layer"),
		document.querySelector(".Fourth-Layer"),
		document.querySelector(".Fifth-Layer"),
		document.querySelector(".Sixth-Layer"),
		document.querySelector(".Seventh-Layer"),
	];

	// then pushing each step inside of another array for accessing the DOM attributes
	steps.forEach((step) => {
		if (step) {
			domElements.push(step);
		} else {
			console.log("Item missing inside the array");
		}
	});

	console.log("item size: ", domElements.length);
	console.log("lists of items: ", domElements);
}

// this function will select the DOM Layers based on the counting of array
function SelectDOMLayers(layersCount) {
	const FirstLayerFirst = document.querySelector(".First-Layer-First");
	const FirstLayerSecond = document.querySelector(".First-Layer-Second");
	const FirstLayerThird = document.querySelector(".First-Layer-Third");

	// default display of the layers
	FirstLayerFirst.style.display = elementDisplay.showElement;

	// checking which DOM layers should appear on the page based on the countings
	if (layersCount >= 0 && layersCount <= 2) {
		FirstLayerFirst.style.display = elementDisplay.showElement;
		FirstLayerSecond.style.display = elementDisplay.hideElement;
		FirstLayerThird.style.display = elementDisplay.hideElement;
	} else if (layersCount >= 3 && layersCount <= 4) {
		FirstLayerFirst.style.display = elementDisplay.hideElement;
		FirstLayerSecond.style.display = elementDisplay.showElement;
		FirstLayerThird.style.display = elementDisplay.hideElement;
	} else if (layersCount === 5) {
		FirstLayerFirst.style.display = elementDisplay.hideElement;
		FirstLayerSecond.style.display = elementDisplay.hideElement;
		FirstLayerThird.style.display = elementDisplay.showElement;
	}
}

// here in this function it basically check if the element that is currently selected matches the index inside the
// domeElements array, if it matches the DOM element correspond with its index will be shown in the page,
// while the rest are hidden behind.
function SelectDomElement(domIndex) {
	console.log("Current item count: ", domIndex);
	console.log("Item selected: ", domElements[domIndex]);

	domElements.forEach((elements, index) => {
		elements.style.display =
			index === domIndex
				? elementDisplay.showElement
				: elementDisplay.hideElement;
	});
}
