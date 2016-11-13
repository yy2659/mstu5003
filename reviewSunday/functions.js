function funcName() {
	alert('demo function');
}

var funcName = function() {
	alert('demo function');
};

funcName();

var listOfActions = [
	function (){
		alert('x');
	},
	function (){
		alert('y');
	}
];

listOfActions[0]();

var human = {
	warCry: function() {
		alert('mmmeeaaaahhh....');
	},
	y: function(){
	  alert('y');
	},
	z: {
		y: [
			function() {
				alert('inside scoop');
			}
		],
		biggerWarCry: function(){
		  alert('AAAAAAAAhhhh!');
		},
		numLegs: 1
	}
};

human.warCry();
human.z.biggerWarCry();
human.z.y[0]();


// var length = 5;
// var width = 6;

var calcHappiness = function(happy, energy) {
	if (happy) {
		energy = energy * 2;
	} else {
		energy = energy * 1.25;
	}
	return energy;
};

calcHappiness(true, 50);


var getArea = function(length, width) {
	return length * length * width;
};

var getVolume = function(length, width, height) {
	return getArea(length, width) * height;
};

var getVolume = function(length, width, height) {
	return length * length * width * height;
};



var muffin = {
	toastiness: 0
};
var bagel = {
	toastiness: 50
};

toaster(muffin, 30);
toaster(bagel, 30);

function toaster(bread, timeInSec) {
	var toastLevel = bread.toastiness + timeInSec;

	bread.toastiness = toastLevel;

	return bread;
}


// Toaster function based on time
// input Bread, time
// output Bread, with some toastiness
