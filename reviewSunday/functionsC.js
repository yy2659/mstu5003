var idString = "coolBtn";
document.getElementById("coolBtn");


document.querySelector("button");
document.querySelectorAll('button');


var btnEls = document.querySelectorAll('button');

for (var i=0; i < btnEls.length; i++) {
	btnEls[i].classList.add('danger');
}


els = document.querySelectorAll('.danger');
els.forEach(function(btnEl){
  btnEl.classList.remove('danger');
});

document.querySelector('#coolBtn').innerHTML = "VERY COOL BUTTON";

// Get the cat class buttons
// change the inside to say "Meow"
var els = document.querySelectorAll('.cat');
console.log(els);

els.forEach(function(catEl){
	if (catEl.tagName === "DIV") {
		catEl.innerHTML = "<a href='http://google.com/?q=cats'>Cats</a>";
	} else if (catEl.tagName === "BUTTON") {
		catEl.innerHTML = "MEOW";
	}
});

ages = [17, 16, 15, 18];
ages.forEach(function(age){
  if (age > 17) {
		console.log('can vote');
	} else {
		console.log('cannot vote');
	}
});


var inputs = document.querySelectorAll('.question [type="radio"]');

inputs.forEach(function(input){
  input.addEventListener('click', function(){
		document.querySelectorAll('.active').forEach(function(el){
		  el.classList.remove('active');
		});
    if (isCorrect(input)) {
			input.parentNode.classList.add('correct');
			input.parentNode.classList.add('active');
			console.log('correct answer!');
		} else {
			input.parentNode.classList.add('incorrect');
			input.parentNode.classList.add('active');
			console.log('incorrect answer boo!');
		}
  });
});


function isCorrect(el) {
	if (el.classList.contains('correct')) {
		return true;
	} else {
		return false;
	}
}
