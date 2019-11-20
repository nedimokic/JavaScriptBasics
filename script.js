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

/*************************
*  The Ternary Operator and Switch Statements
*/

var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' drink beer. ')
: console.log(firstName + ' drink juice. ');

var drink = age>= 18 ? 'beer' : 'juice';
console.log(drink);


var age=19
if (age >= 18) {
    var drink = 'beer'; 
    console.log(firstName + ' drink beer. ');
} else {
    var drink = 'juice';
    console.log(firstName + ' drink juice. ');
}

// Switch statement

var job = 'driver';
switch(job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + 'teaches kids how to code. ');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon. ');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites. ');
        break;
    default:
        console.log(firstName + ' does something else. ');
}

var age = 17;
switch(true) {
    case age < 13:
        console.log( firstName + ' is a boy. ');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager. ');
        break;
    case age >= 20 && age < 30:
        console.log( firstName + ' is a young man. ');
        break;
    default:
        console.log( firstName + ' is a men. ');
}

/*************************
*  Truthy and falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality opertaors
if (height == '23') {
    console.log('The == operator does type coercion!');
}

// Coding challenge

var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
console.log(scoreJohn, scoreMike);

if (scoreJohn > scoreMike) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn) {
    console.log('Mike\'s tema wins with ' + scoreMike + ' points');
} else {
    console.log('There is a draw')
}

var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreMary + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreJohn) {
    console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
    console.log ('There is a draw');
}


/*************************
*  Functions
*/

function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years');
    } else {
        console.log(firstName + ' is already retired.');
    }

}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');

/*************************
*  Functions statement and expressions
*/

// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites.'; 
        default:
            return firstName + ' does something else.';   
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('driver', 'Mike'));
console.log(whatDoYouDo('retired', 'Jane'));

/*************************
*  Arrays
*/

// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', 'false'];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ?
'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
