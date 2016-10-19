// Set BREAKPOINTS to pause the execution of your script.
// Set x as expression to WATCH
var x = 1;
x = 0;
x = true;
x = "mstu5003";
x = x + " is cool!";
x = x.length;
x = x * 5;

// Stepping IN to a function - serious step by step
// And stepping OUT
var y = "blah";
y = function() {
	var msg = "Lemonade tastes ";
	msg = msg + "okay.";

	console.log("Too much! Step OUT!")

	return msg;
};
y = y();






// Stuff we didn't cover  yet - but see if you can't start to dissect what {} is:
// By stepping through it.
// By watching it.
var alpaca = {};
alpaca.sad = undefined;
alpaca.age = 3;
alpaca.funny = true;
alpaca.fur = "fuzzy";
alpaca.makeSound = function() {
	this.sad = true;
	console.log('No one understands me.');
};

alpaca.makeSound();
