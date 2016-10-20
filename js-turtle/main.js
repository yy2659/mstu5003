class Turtle {
	constructor() {
		this.gender = Math.round(Math.random()) === 0 ? "male" : "female";
		this.happy = (Math.round(Math.random()) === 0);
	}
}

var turtles = [];

for (var i = 0; i < 100; i++) {
	turtles.push(new Turtle());
}

var males = turtles.filter(function(turtle){
  return turtle.gender === "male";
});
var females = turtles.filter(function(turtle){
  return turtle.gender === "female";
});

function getHappiness(turtles) {
	var happyTurtles = turtles.filter(function(turtle){
	  return turtle.happy;
	});
	return happyTurtles.length / turtles.length;
}

console.log('Total Turtles:', turtles.length);
console.log('Male Turtles:', males.length);
console.log('Female Turtles:', females.length);
console.log('Happy Male percentage:', getHappiness(males) * 100);
console.log('Happy Female percentage:', getHappiness(females) * 100);
