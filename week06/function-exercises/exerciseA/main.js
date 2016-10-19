// This code is INCOMPLETE, meaning some things will need massaging and some things are missing.
// Adjust code appropriately to solve the problems listed.

var numPizzas;
var subTotal;
var total;
var hasDiscount = Boolean('false'); // Hint for prompts

// By convention, these variables represent CONSTANTS (unchanging values)
var DISCOUNTCODE = "ChicagoStyleNumberOne";
var DISCOUNTRATE;
// Set the flat rate per pizza

var customerName = prompt('What is your name?');

/* prompt for the following: 1) number of pizzas in order, 2) Whether they have a discount, 3) The discount code (if they indicated they have one.) */

/* Write 4 functions: */
// Function that checks if the discount code the user gives matches the known discount code. Does not return anything but will set the has discount state to true if it matches. It will alert the user whether the code worked or not.

// Function that calculates subtotal based on number of pizzas, flat rate per pizza, and discount. It should return a number.

// Function that calculates the total based on subtotal and tax rate. It should return a number;

// Function that writes a reciept with user information, pizza order info, including prices, discount, etc. Does not return anything but will output to the console.


/* Call functions in correct sequence and utilize them to create a "receipt" for the order in the console. */





// This function will write the following message to the <pre> element in HTML. New lines are indicated by \n
function writeToPre(text) {
	document.getElementById('info').innerHTML = text;
}
var message = "Hello, Jin.\nYour order is pending this program.";
writeToPre(message);

// Can you transform your code so that instead of to the console, it writes to the webpage?
