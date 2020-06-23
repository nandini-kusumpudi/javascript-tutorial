//The if Statement

if (new Date().getHours() < 18) {
    console.log("Good day!");
  }



  //The else Statement

  var hour = new Date().getHours(); 
  var greeting;
  if (hour < 18) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  console.log(greeting);


  //The else if Statement

  var greeting;
  var time = new Date().getHours();
  if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  console.log(greeting);

// example
var grade;
var average = 75;
var gender = "male";
if (average >= 90) {
    grade = " distinction"
} else if (average <= 89 && average >= 80) {
    grade = " grade A"
} else if (average <= 79 && average >= 70) {
    if (gender == "female") {
        grade = "grade A";
    } else if (gender == "male") {
        grade = "grade B";
    } // nested if
    //grade = " grade B"
} else if (average <= 69 && average >= 60) {
    grade = " grade C"
} else {
    grade = " fail";
}
console.log(grade);

var grade;
var average = 75;
var gender = "male";
if (average >= 90) {
    grade = " distinction"
} else if (average <= 89 && average >= 80) {
    grade = " grade A"
} else if (average <= 79 && average >= 70 && gender == "female") {
        grade = "grade A";
} else if (average <= 79 && average >= 70 && gender == "male") {
    grade = "grade B";
} else if (average <= 69 && average >= 60) {
    grade = " grade C"
} else {
    grade = " fail";
}
console.log(grade);


var grade;
var average = 95;
if (average >= 90) {
    grade = " distinction"
}
if (average <= 89 && average >= 80) {
    grade = " grade A"
}
if (average <= 79 && average >= 70) {
    grade = " grade B"
}
if (average <= 69 && average >= 60) {
    grade = " grade C"
}
if (average <= 59) {
    grade = " fail";
}
console.log(grade);


var gender = "female";

if (gender == "female") {
    gender = "welcome lady";
} else if (gender == "male") {
    gender = "welcome man";
}

console.log(gender);
  //Switch Statement

  var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
console.log("Today is " + day);

//The default Keyword

var text;
switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}
console.log(text);

//Common Code Blocks

var text;
switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}

console.log(text);


//Strict Comparison

var x = "0";

switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}console.log(text);