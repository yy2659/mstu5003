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
