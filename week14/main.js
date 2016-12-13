var theBtn = document.querySelector('#myBtn');

var myBtnA = jQuery('#myBtn');
var myBtnB = $('#myBtn');

$(document).ready(function() {
  $('#fullpage').fullpage({
		sectionsColor: ['red', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000']
	});
});

console.log('full page loaded');
