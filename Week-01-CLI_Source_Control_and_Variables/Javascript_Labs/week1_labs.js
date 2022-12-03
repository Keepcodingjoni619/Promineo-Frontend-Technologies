//create a variable to hold the quantity of available plane seats left on a flight
var availableSeats = 12;

		
//create a variable to hold the cost of groceries at checkout
var groceryCostTotal = 89.99;

//create a variable to hold a person's middle initial
var middleInitial = 'M';

//create a variable to hold true if it's hot outside and false if it's cold outside
var isHotOutside = true;

var isColdOutside = true;

//create a variable to hold a customer's first name
var customerFirstName = 'Katy';


//create a variable to hold a street address
var homeAddress = "2415 Holloway Road";

//print all variables to the console
console.log(availableSeats);
console.log(groceryCostTotal)
console.log(middleInitial);
console.log(isHotOutside);
console.log(isColdOutside);
console.log(customerFirstName);
console.log(homeAddress);



//a customer booked 2 plane seats, remove 2 seats from the available seats variable
availableSeats = availableSeats - 2;


//impulse candy bar purchase, add 2.15 to the grocery total
//costOfGroceries = costOfGroceries + 2.15;

groceryCostTotal = groceryCostTotal + 2.15;

//birth certificate was printed incorrectly, change the middle initial to something else
middleInitial = 'J';

//the season has changed, update the hot outside variable to be opposite of what it was
isHotOutside = false;

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
var fullName = customerFirstName + " " + middleInitial;
console.log(fullName)
//print a line to the console that introduces the customer and says they live at the address variable
console.log("My name is " + customerFirstName + " and I live at " + homeAddress)