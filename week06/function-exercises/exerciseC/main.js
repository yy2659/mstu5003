var email;
var username = "jmk2142";
var first = "Jin";
var last = "Kuwata";

// What does this line do? HINT: compare HTML to Browser
document.getElementById('greeting').innerHTML = "Hola!";

/* Make a function that takes 3 arguments
   Returns 1 String message like this: "Hello Jin Kuwata, your username is fabulous." */

/* Replace the h1 innerText with the message by calling the function you created. */



// Try console logging these, what gets returned?
var emailEl = document.getElementById('userEmail');
var basicsBtnEl = document.getElementById('basicsBtn');

// Adds an event 'click' listener on the button element
// 2nd arg, an anonymous function is what gets called-back after the 'click'
basicsBtnEl.addEventListener('click', function(){
	email = emailEl.value;
	console.log('clicked', email);
});
// What is the value of email before the click?
// After you type in an email and then click?


/* Create a second button with an id */
/* Set the value of secondBtnEl to the second button element */
var secondBtnEl;

/* Create a function that will return a String  message like so: Jin Kuwata is 40 years old. The age should be a random number between 37 and 65. The name should be come from the html. */

/* Add an 'click' event listener to your second button. When clicked, it should create the message using the function you just declared previously, and print it to the HTML, replacing YYY. */

/* Can you add HTML and extra JS code in this program, so that username, first, and last can be dynamically set from the page input when the basic button is clicked? */
