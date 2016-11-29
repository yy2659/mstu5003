var data = [
	{
		name: "tiger",
		sound: "Rawr",
		friendly: false
	},
	{
		name: "duck",
		sound: "Quack quack", // No idea
		friendly: false
	},
	{
		name: "donkey",
		sound: "Hee haw",
		friendly: true
	}
];

// How do we create an object?
var Animal = function(animalObj) {
	this.name = animalObj.name;
	this.sound = animalObj.sound;

	this.makeSound = function() {
		alert("The " + this.name + " says " + this.sound);
	};
};

var animalA = new Animal({
	name: "aardvark",
	sound: "brrrrrrrllll"
});

var animal = {
	name: "dog",
	sound: "Woof",
	makeSound: function() {
		alert("The " + this.name + " says " + this.sound);
	}
};

var animal2 = {
	name: "cat",
	sound: "Meow"
};

animal2.makeSound();

var makeSound = function(animalObj){
	alert("The " + animalObj.name + " says " + animalObj.sound);
};

makeSound(animal);
makeSound(animal2);

var makeSound1 = function(){
	alert("The " + animal.name + " says " + animal.sound);
};

var makeSound2 = function(){
	alert("The " + animal2.name + " says " + animal2.sound);
};
