// CONSTANT VARIABLES (don't change) - at top in group
var DISCOUNTCODE = "ChicagoStyleNumberOne";
var DISCOUNTRATE = 0.25;
var COSTOFPIZZA = 12.00;
var TAXRATE = 0.095;

// GLOBAL VARIABLES - nicely organized at top w/ default values
var customerName = "John Doe";
var numPizzas = 0;
var subTotal = 0;
var discount = 0;
var tax = 0;
var total = 0;
var hasDiscount = false;
var codeClaimed = false;
var providedCode = "";

// FUNCTIONS - notice that we keep them simple. Good functions do one thing and one thing well.
function validateCode(userCode) {
	return (userCode === DISCOUNTCODE);
}
function calcSubTotal(quantity, ratePerPizza) {
	return quantity * ratePerPizza;
}
function calcDiscount(amount, applyDiscount) {
	return applyDiscount ? (amount * DISCOUNTRATE) : amount; // Called a ternary operator
}
function calcTax(amount) {
	return amount * TAXRATE;
}
function calcTotal(sub, discount, tax) {
	return sub - discount + tax;
}

// Notice the separation of concern between creating the receipt text, and outputting the receipt text. If we can generate a receipt text - we can output it to console, or the HTML page, or to a text-to-voice reader etc.
function getReceiptText(name, quantity, discount, subTotal, tax, total) {
	// Notice this uses back-ticks ``. This is called a template string.
	var receiptText = `Name: ${name}\nQuantity: ${quantity}\nSubtotal: ${subTotal}\nDiscount: ${discount}\nTax: ${tax}\n----------\nTotal: ${total}`;

	return receiptText;
}
// This is an output function - output to HTML
function writeToPre(text) {
	document.getElementById('info').innerHTML = text;
}

// Get User Data
customerName = prompt('What is your name?');
numPizzas = Number(prompt("How many pizzas would you like to order?"));
codeClaimed = prompt("Do you have a discount? Y or N");

if (codeClaimed.toLowerCase() === "y" || codeClaimed.toLowerCase() === "yes") {
	providedCode = prompt("Enter your discount code.");
}

// Evaluate $ values
subTotal = calcSubTotal(numPizzas, COSTOFPIZZA);
discount = validateCode(providedCode) ? calcDiscount(subTotal, true) : calcDiscount(subTotal, false);
tax = calcTax(subTotal - discount);
total = calcTotal(subTotal, discount, tax);

// Generate receipt text
var text = getReceiptText(customerName, numPizzas, discount, subTotal, tax, total);

// Output text to two places, console and HTML
console.log(text);
writeToPre(text);
