window.onload = function () {
	colorChange();
	fontChange();
	highlight();
	wordsToArray();
};

function colorChange() {
//changes the color of the paragraphs
	document.getElementById("first").style.color = "green";
	document.getElementById("second").style.color = "purple";
}

function fontChange() {
//changes the font style of the paragraphs
	document.getElementById("first").style.fontFamily = "Impact,sans-serif";
	document.getElementById("second").style.fontFamily = "Courier New";
}

function highlight() {
	//highlights the paragraphs
	var range = document.createRange();
	var selection = window.getSelection();
	range.selectNodeContents(document.getElementById('paragraphs'));	

	selection.removeAllRanges();
	selection.addRange(range);
}

function wordsToArray() {

	let paragraph = "This is a string.";
	let words = paragraph.split(' ');
	console.log(words[3]);
}