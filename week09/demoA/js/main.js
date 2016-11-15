document.getElementById('buttonA').addEventListener('click', function() {
  alert('Button A was pressed!');
});

var btnB = document.getElementById('buttonB');
		btnB.addEventListener('click', function(){
		  alert('Button B was pressed!');
		});

var btnC = document.getElementById('buttonC');
		btnC.addEventListener('click', function(event) {
		  console.log('Event Object:', event);

			console.log('type:', event.type);
			console.log('target:', event.target);
			console.log('currentTarget:', event.currentTarget);

			alert('Button C was pressed!');
		});

var btnD = document.querySelector('#buttonD');
		btnD.addEventListener('click', function(event) {

			alert('Button D was pressed!');

			var preEl =	document.querySelector('#buttonsPre');

			var template = `${event.currentTarget.nodeName} of id "${event.currentTarget.id}" was pressed.`;

			preEl.innerHTML = template;
		});

function sayHello(event) {
	var greetings = ["Hello","Hola","Konnichiwa","Bonjour","Salaam", "Namaste","Zdras-tvuy-te"];
	var greetingIndex = Math.floor(Math.random() * greetings.length);

	var el = document.querySelector('#buttonsPre');

	el.innerHTML = `<strong><em>${greetings[greetingIndex]}</em></strong>\n<em>${Math.floor(event.timeStamp)} ms</em>`;
}

var btnE = document.querySelector('#buttonE');
		btnE.addEventListener('click', sayHello);










// TEXT EXAMPLES
document.querySelector('#textA').addEventListener('change', function(event) {
  var textValue = event.currentTarget.value;
	alert('Value of text changed: ' + textValue);
});

var passwordEl = document.querySelector('#passwordA');
passwordEl.addEventListener('keypress', function(event) {
  if (event.which === 13) { // event.which is key identifier, 13 is Enter Key
		var enteredPass = event.currentTarget.value;
		if (enteredPass === "jiniscool") {
			alert('Password accepted.');
		} else {
			alert('Wrong password.');
		}
	}
});

var textareaEl = document.querySelector('#textareaA');
var textsPreEl = document.querySelector('#textsPre');
var counterEl = document.querySelector('#textsCounter');
textareaEl.addEventListener('focus', function(event) {
	textsPreEl.innerHTML = "Textarea: READY";
});
textareaEl.addEventListener('blur', function(event) {
  textsPreEl.innerHTML = "Textarea: Inactive"
});
textareaEl.addEventListener('keyup', function(event) {
  textsPreEl.innerHTML = textareaEl.value;
	counterEl.innerHTML = textareaEl.value.length;
	countWarning(textareaEl.value);
});
textareaEl.addEventListener('mouseover', function(event) {
  textsPreEl.classList.add('activePre');
});
textareaEl.addEventListener('mouseout', function(event) {
	textsPreEl.classList.remove('activePre');
});

function countWarning(text) {
	var CHARMAX = 100;
	if (text.length > CHARMAX) {
		counterEl.classList.add('countWarning');
	} else {
		counterEl.classList.remove('countWarning');
	}
}











// CHOICES EXAMPLES
var checkedRadioEl = document.querySelector('[name="favoriteAnimal"]:checked');
