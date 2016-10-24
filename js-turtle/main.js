class Turtle { //Create class called Turtle with properties "gender" and "happy"
	constructor() {
		this.gender = Math.round(Math.random()) === 0 ? "male" : "female"; //Determine turtle's gender by choosing random number between 0 and 1 and rounding; if gender = 0, turtle is male, or else turtle is female.
		this.happy = (Math.round(Math.random()) === 0); //Determine whether turtle is happy by choosing random number between 0 and 1 and rounding; if happy = 0, turtle is happy.
	}
}

var turtles = []; //Created an empty turtle array

for (var i = 0; i < 100; i++) {
	turtles.push(new Turtle()); //Create 100 new turtles
}

var males = turtles.filter(function(turtle){ //Create a new male turtles array with all turtles in the turtles array that pass the function which checks if turtle is male or not
  return turtle.gender === "male";
});
var females = turtles.filter(function(turtle){ //Create a new female turtles array with all turtles in the turtles array that pass the function which checks if turtle is female or not
  return turtle.gender === "female";
});


function getHappiness(turtles) { //Create function getHappiness that does the following if called
	var happyTurtles = turtles.filter(function(turtle){ //Create a new happy turtles array with all turtles in the turtles array that pass the function which checks if turtle is happy or not
	  return turtle.happy; 
	});
	return happyTurtles.length / turtles.length; //If called, getHappiness returns proportion of happy turtles to total turtles
}

console.log('Total Turtles:', turtles.length);
console.log('Male Turtles:', males.length);
console.log('Female Turtles:', females.length);
console.log('Happy Male percentage:', getHappiness(males) * 100);
console.log('Happy Female percentage:', getHappiness(females) * 100);
