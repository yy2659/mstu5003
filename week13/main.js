// assume this info is from login
var currentUser = {
	first: "Jin",
	last: "Kuwata",
	id: "a1"
};

var messageList = []; // ary.push(thingToPush)
var userMsg = "xxx";

// Program the component to take text data... and store it / when the button is pushed.

document.querySelector('#postBtn').addEventListener('click', function(){
	userMsg = document.querySelector('#userText').value;
	alert(userMsg);
});
