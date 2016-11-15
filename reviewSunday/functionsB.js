var me = {
	name: "Jin Kuwata",
	age: 37,
	tired: false
};

var them = {
	name: "Barack Obama",
	age: 55,
	tired: true
};

// Function that alerts stats on user
// Input User object
// Action -> "Hi Jin Kuwata, you are 37 years old and not tired"
// Output (return) none

function statusMsgA(nameX, ageX, tiredX) {
	alert("Hi " + nameX + ", you are " + ageX + " years old and ");
}
statusMsgA("Jin", 50, true);
statusMsgA(me.name, me.age, me.tired);

function statusMsgB(person) {
	var lastPartOfMsg;

	if (person.tired) {
		lastPartOfMsg = "is tired.";
	} else {
		lastPartOfMsg = "is not tired.";
	}
	alert("Hi " + person.name + ", you are " + person.age + " years old and " + lastPartOfMsg);
}
statusMsgB({name:"Madeline Albright",age:70,tired:false});
statusMsgB(them);

var outside = "swimming pool";
var person = "Americans"

function statusMsgC(person) {
	var x = "Magic";
	if (person.tired) {
		alert("Hi " + person.name + ", you are " + person.age + " years old and tired.");
	} else {
		alert("Hi " + person.name + ", you are " + person.age + " years old and not tired");
	}
	console.log(outside);
}
