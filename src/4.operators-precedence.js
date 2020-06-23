/************************************* Operators *****************************/


/***Arithmetic operators ****/ 

//addition
var x = 5;
var y = 2;
var z = x + y;
console.log(z);

//Subtracting

var x = 5;
var y = 2;
var z = x - y;
console.log(z);

//Multiplying

var x = 5;
var y = 2;
var z = x * y;
console.log(z);

//Dividing

var x = 5;
var y = 2;
var z = x / y;
console.log(z);

//Remainder

var x = 5;
var y = 2;
var z = x % y;
console.log(z);

//Incrementing

var x = 5;
x++;
var z = x;
console.log(z);

//Decrementing

var x = 5;
x--;
var z = x;
console.log(z);

//Exponentiation

var x = 5;
console.log(x**2);


/***JavaScript Assignment Operators: ****/ 

var x = 10;
x += 5;
console.log(x);

var x = 10;
x -= 5;
console.log(x);

var x = 10;
x *= 5;
console.log(x);

var x = 10;
x /= 5;
console.log(x);

var x = 10;
x %= 5;
console.log(x);


/***JavaScript Comparison Operators : ****/ 


//== equal to
var x = 5;
console.log(x == 6);

var x = 5;
console.log(x == 5);

var x = 5;
console.log(x == "5");

// ===	equal value and equal type
var x = 5;
console.log(x === 5);

var x = 5;
console.log(x === "5");

// !=	not equal
var x = 5;
console.log(x != 9);

// !==	not equal value or not equal type
var x = 5;
console.log(x !== 5);
console.log(x !== "5");
console.log(x !== 8);

//>	greater than
var x = 5;
console.log(x > 8);

//<	less than
var x = 5;
console.log(x < 8);

//>=	greater than or equal to
var x = 5;
console.log(x >= 8);

//<=	less than or equal to

var x = 5;
console.log(x <= 8);



/********* JavaScript Logical Operators : ***********/


//&&	and
var x = 6;
var y = 3;
console.log((x < 10 && y > 1)  + 
(x < 10 && y < 1));

//||	or
var x = 6;
var y = 3;
console.log((x == 5 || y == 5) +
(x == 6 || y == 0) + 
(x == 0 || y == 3) + 
(x == 6 || y == 3));

//!	not

var x = 6;
var y = 3;
console.log(!(x === y) + "<br>" + 
!(x > y));




/************************************* Operators precedence*****************************/


var a= 15;
var b = 10;
var c = 5;
console.log(a+b*c);

console.log(100+10/5);