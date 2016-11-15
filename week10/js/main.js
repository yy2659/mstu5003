var animals = [
	{
		name: "Giraffe",
		diet: {
			vegetation: true,
			meat: false
		},
		quantity: 3
	},
	{
		name: "Bear",
		diet: {
			vegetation: true,
			meat: true
		},
		quantity: 1
	},
	{
		name: "Lion",
		diet: {
			vegetation: false,
			meat: true
		},
		quantity: 2
	}
];

document.getElementById('animalButton').addEventListener('click', function(event) {
  printAnimals(animals);
});


// element.innerHTML returns the inside as a STRING
// element.content returns the inside as an OBJECT

function printAnimals(animalList){

	for (var i = 0; i < animalList.length; i++) {
		var animal = animalList[i];

		var template = document.querySelector("#animalTMPL");

		template.content.querySelector('.animalCount').innerHTML = animal.quantity;
		template.content.querySelector('.animalName').innerHTML = animal.name;

		var foodStatus = "Eats: ";
		if (animal.diet.vegetation) {
			foodStatus += "Vegetables ";
		}
		if (animal.diet.vegetation && animal.diet.meat) {
			foodStatus += "and "
		}
		if (animal.diet.meat) {
			foodStatus += "Meat";
		}

		template.content.querySelector('p').innerHTML = foodStatus;

		// content of templates are considered separate documents
		// importNode(nodeObject, deepClone) imports nodes from another document
		var clone = document.importNode(template.content, true);
		document.querySelector('.animalList').appendChild(clone);
	}

}
