// this will only show the first step when the page is fully loaded
window.onload = () => {
  ShowDOM();
  GetAllElement();
};

// the function where in which step should be shown first when the page is loaded
function ShowDOM() {
  const SecondLayer = document.querySelector(".Second-Layer");
  SecondLayer.style.display = "block";
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
let count = 0;
function IncrementValue() {
  console.clear();
  count += 1;
  // console.log("counting up: ", count);
  SelectDomElement(count);
}
function DecrementValue() {
  console.clear();
  count -= 1;
  // console.log("counting down: ", count);
  SelectDomElement(count);
}

// this function is for getting all the DOM that relates to step-by-step
const domeElements = [];
function GetAllElement() {
  const firstStep = document.querySelector(".Second-Layer");
  const secondStep = document.querySelector(".Third-Layer");
  const thirdStep = document.querySelector(".Fourth-Layer");

  domeElements.push(firstStep, secondStep, thirdStep);

  console.log("item size: ", domeElements.length);
  console.log("lists of items: ", domeElements);
}

function SelectDomElement(domeIndex) {
  console.log("Current item count: ", domeIndex);
  console.log("Item selected: ", domeElements[domeIndex]);

}