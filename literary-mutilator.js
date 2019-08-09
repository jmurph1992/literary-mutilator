window.onload = function () {
	colorChange();
	fontChange();
	highlight();
	partyBoxDown();
	partyBoxUp();
	replaceWords();
	};

function colorChange() {
//new colors!
	document.getElementById("first").style.color = "green";
	document.getElementById("second").style.color = "purple";
}

function fontChange() {
//new fonts!
	document.getElementById("first").style.fontFamily = "Impact,sans-serif";
	document.getElementById("second").style.fontFamily = "Courier New";
}

function highlight() {
	//highlights the paragraphs on load (took me a while to figure this out. There is probably an easier way.)
	//also, this stopped working and I'm not sure why yet. But it was extra, just for practice.
	var range = document.createRange();
	var selection = window.getSelection();
	range.selectNodeContents(document.getElementById('paragraphs'));

	selection.removeAllRanges();
	selection.addRange(range);
}

function partyBoxDown() {
	//click those keys
	document.getElementById("third").style.backgroundColor =  "yellow";
	console.log("WOOOOO PAAARRRTYYYYY!!!!");
}

function partyBoxUp() {
	//click those keys
	document.getElementById("third").style.backgroundColor = "magenta";
}

window.addEventListener("keydown", function(){partyBoxDown()} );
window.addEventListener("keyup", function(){partyBoxUp()} );

function replaceWords() {
	//replaces all instances of the word beard with the word puppy. Does this count as a regular expression?
	document.body.innerHTML = document.body.innerHTML.replace(/beard/g, "puppy");
}