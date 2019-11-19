console.log('Hello World!!!');

/*************************
* Variables and data types
*/
var firstName = 'John';
console.log(firstName);

var lastName ='Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

//Variable naming rules
/*
var 3years = 3;
var john/mark = 'John and Mark';
var if = 23;
var delete = 23;
var function = 23;
*/

/*************************
* Variables mutation and type coercion
*/

/*
var firstName = 'John';
var age = '28';

//Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = 'false';

console.log(firstName + ' is a ' + age + ' years old.' + ' Is he married?' + isMarried);

//Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' years old.' + ' Is he married?' + isMarried);

var lastName = prompt('what is his last name?');
console.log(firstName + ' ' + lastName);
*/

/*************************
* Basic operations
*/

var year, yearJohn, yearMark;
now = '2018';
ageJohn ='28';
ageMark = '33';

//Math operations
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(yearMark);

console.log(now - 2);
console.log(now * 2);
console.log(now / 10);

//Logical operations
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//Typeof operator
console.log(typeof johnOlder);
console.log(typeof yearMark);
console.log(typeof 'Markis older than John');
var x;
console.log(typeof x);

/*************************
* Operator precedence
*/

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x=y=(3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x,y);

// More operators
x = x * 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
x++;
console.log(x);
x++
console.log(x);

// Coding challenge
var massMark = 88; //kg
var heightMark = 1.78; // meters

var massJohn = 82; //kg
var heightJohn = 1.83; //meters

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log(' Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);

/*************************
* If / else statement
*/

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married! ');
} else { 
    console.log(firstName + ' will hopefully marry soon :) ');
}

var isMarried = false;
if (civilStatus ==='married') {
    console.log( firstName + ' is Married ');
} else {
    console.log( firstName + ' will hopefully marry soon :) ');
}

var massMark = 88; //kg
var heightMark = 1.78; // meters

var massJohn = 82; //kg
var heightJohn = 1.83; //meters

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log(' Mark\'s BMI is higher than John\'s. ');
} else {
    console.log(' John\'s BMI is higher than Marks\'s. ');
}

/*************************
*  Boolean logic
*/

var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log( firstName + ' is a boy. ');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager. ');
} else if (age >= 20 && age <30) {
    console.log( firstName + ' is a young man. ');
} else {
    console.log( firstName + ' is a men. ');
}