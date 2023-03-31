// function to generate a random color
function randomColor() {
	var hexValues = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += hexValues[Math.floor(Math.random() * 16)];
	}
	return color;
}

// function to generate a color palette
function generatePalette() {
	var colorPalette = document.getElementById('colorPalette');
	colorPalette.innerHTML = ''; // clear any previous colors
	for (var i = 0; i < 5; i++) {
		var color = randomColor();
		colorPalette.innerHTML += '<div class="col-md-2 col-sm-4 color-box" style="background-color: ' + color + ';" data-clipboard-text="' + color + '">' + color + '</div>';
	}
}

// function to copy HEX codes to clipboard
function copyToClipboard() {
	var clipboard = new ClipboardJS('.color-box');
	clipboard.on('success', function(e) {
		e.clearSelection();
		alert('HEX code copied to clipboard!');
	});
	clipboard.on('error', function(e) {
		alert('Failed to copy HEX code!');
	});
}

