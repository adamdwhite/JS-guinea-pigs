console.log("May I handle your events?");

// 1. There is sample HTML file content below so create an `index.html` for it 
// and place the content in the `body` tag.
// 2. Link in a JavaScript file named `events.js`.
// 3. Link in a CSS file named `events.css`. You'll be using `element.classList` to 
// manipulate the CSS classes on elements.

///////////////////////////////////////////////////////////////////////////////////

//Assign doc.get element by ID, and create event listeners for all the sections, 
//the output area, the guinea pig,
// and the buttons. 
var h1Tag = document.getElementById("page-title");

var intro = document.getElementById("intro");
var body = document.getElementById("body");
var section1 = document.getElementById("section1");
var section2 = document.getElementById("section2");
var section3 = document.getElementById("section3");
var conclusion = document.getElementById("conclusion");

var outPut = document.getElementById("output-target");
var guineaPig = document.getElementById("guinea-pig");
var inPut = document.getElementById("keypress-input");

var colorButton = document.getElementById("add-color");
var hulkButton = document.getElementById("make-large");
var borderButton = document.getElementById("add-border");
var radiusButton = document.getElementById("add-rounding");

/////////////////////////////////////////////////////////////////////////////////
//Outputmessage for mouseover and mouseout of the h1:

h1Tag.addEventListener("mouseover", function(onHeader) {
    console.log(onHeader.target);
    outPut.innerHTML = "Mouse in the White House";
});

h1Tag.addEventListener("mouseout", function(offHeader) {
    console.log(offHeader.target);
    outPut.innerHTML = "Nobody leaves the Donald!";
});

/////////////////////////////////////////////////////////////////////////////////
//When you type characters into the input field, 
//the output element should mirror the text in the input field.
inPut.addEventListener("keyup", function(mirrorText) {
    console.log(mirrorText.target);
    outPut.innerHTML = inPut.value;
});

/////////////////////////////////////////////////////////////////////////////////
//When you click the "Add color" button, 
//the guinea-pig element's text color should change to blue.
// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
// When you click the "Rounded" button, the guinea-pig element's border should become rounded.

//From looking at other completed exercises, I discovered that classList.toggle('cssClass') is my friend here.

colorButton.addEventListener("click", function(colorPig) {
    console.log(colorPig.target);
    guineaPig.classList.toggle('colorPig');
});

hulkButton.addEventListener("click", function(growPig) {
    console.log(growPig.target);
    guineaPig.classList.toggle('growPig');
});

borderButton.addEventListener("click", function(borderPig) {
    console.log(borderPig.target);
    guineaPig.classList.toggle('borderPig');
});

radiusButton.addEventListener("click", function(radiusPig) {
    console.log(radiusPig.target);
    guineaPig.classList.toggle('radiusPig');
});

// The first section's text should be bold.
// The last section's text should be bold and italicized.
// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.