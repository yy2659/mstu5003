// This code is INCOMPLETE, meaning some things will need massaging and some things are missing.
// Adjust code appropriately to solve the problems listed.

var numPizzas;
var subTotal;
var total;
var hasDiscount = false;

// By convention, these variables represent CONSTANTS (unchanging values)
var DISCOUNTCODE = "ChicagoStyleNumberOne";
var DISCOUNTRATE = 0.25; // Added a value to the CONSTANT discount rate
// Set the flat rate per pizza
var COSTOFPIZZA = 12.00;

var customerName = prompt('What is your name?');

/* prompt for the following: 1) number of pizzas in order, 2) Whether they have a discount, 3) The discount code (if they indicated they have one.) */
numPizzas = prompt("How many pizzas would you like to order?");
numPizzas = Number(numPizzas);

// Decided to create a separate variable for the user reported discount to separate my concern between the user reported value and the value that represents the state of the program -> hasDiscount
var reportedDiscount = prompt("Do you have a discount? Y or N");
var providedCode; // A variable dedicated to the user provided discount code

// Allows for 'y'
if (reportedDiscount === "y") {
	providedCode = prompt("Enter your discount code.");
}

/* Write 4 functions: */
// Function that checks if the discount code the user gives matches the known discount code. Does not return anything but will set the has discount state to true if it matches. It will alert the user whether the code worked or not.
function validateCode(userCode) {
	if (userCode === DISCOUNTCODE) {
		hasDiscount = true;
		alert('Code was valid.');
	} else {
		hasDiscount = false;
		alert('Code was invalid.');
	}
}

// Function that calculates subtotal based on number of pizzas, flat rate per pizza, and discount. It should return a number.
function calcSubTotal(quantity, ratePerPizza, discountRate) {
	if (hasDiscount) {
		return (quantity * ratePerPizza) * (1 - discountRate);
	} else {
		return quantity * ratePerPizza;
	}
}

// Function that calculates the total based on subtotal and tax rate. It should return a number;
function calcTotal(amount, taxRate) {
	return (amount * taxRate) + amount;
}

// Function that writes a reciept with user information, pizza order info, including prices, discount, etc. Does not return anything but will output to the console.

// There are many ways to do this. In this sample I didn't use any arguments and the variables inside directly reference the GLOBAL variables outside. Not really clean as this function is VERY coupled, tied down and dependent on the outside code. What happens if I change a the name of a GLOBAL variable? This function will break. Less than ideal but isn't "wrong" per se.
function printReceipt() {
	// \n is a special character that means new line
	var greetingText = "Your Order: " + customerName + "\n";
	var quantityText = "Quantity: " + numPizzas + "\n";

	var discountText;

	if (hasDiscount) { // This is repeated code > should've made a function.
		discountText = "Discount: " + (numPizzas * COSTOFPIZZA * DISCOUNTRATE) + "\n";
		// This would have been a lot easier if I had created a function way earlier, dedicated to returning just the discount in dollars.
	} else {
		discountText = "Discount: None\n";
	}

	var subTotalText = "Subtotal: " + subTotal + "\n"
	var totalText = "Total: " + total + "\n";

	var receiptText = greetingText + quantityText + discountText + subTotalText + totalText;

	console.log(receiptText);
}

/* Call functions in correct sequence and utilize them to create a "receipt" for the order in the console. */
validateCode(providedCode);
subTotal = calcSubTotal(numPizzas, COSTOFPIZZA, DISCOUNTRATE);
total = calcTotal(subTotal, 0.095);
printReceipt();



// This function will write the following message to the <pre> element in HTML. New lines are indicated by \n
function writeToPre(text) {
	document.getElementById('info').innerHTML = text;
}
var message = "Hello, Jin.\nYour order is pending this program.";
writeToPre(message);

// Can you transform your code so that instead of to the console, it writes to the webpage?
