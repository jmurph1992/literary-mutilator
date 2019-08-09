window.onload = function () {
	colorChange();
	fontChange();
	highlight();
	partyBoxDown();
	partyBoxUp();
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

