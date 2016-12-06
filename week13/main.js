// assume this info is from login
var currentUser = {
	first: "Jin",
	last: "Kuwata",
	id: "a1"
};

var userMsg = document.querySelector('#userText').value;

// Program the component to take text data... and store it / when the button is pushed.

document.querySelector('#postBtn').addEventListener('click', function(){
	alert('thing in textarea gets printed here');
});
