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

// Coding challenge

function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    } 
    return percentage * bill;
}

console.log(tipCalculator(150));

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];
            
console.log(tips, finalValues);

/*************************
*  Objects and properties
*/

// Object Literal
var john = {
    firstName:'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob','Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// New object

var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

/*************************
*  Objects and methods
*/

var john = {
    firstName:'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob','Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);


// Coding challenge

var john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;   
    }

}

var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}


if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + 'has a higher of ' +mark.bmi);
} else {
    console.log('they have the same BMI');
}

/*************************
*  Loops and iteration
*/

// For loop
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

for ( var i = 1; i <= 20; i++ ) {
    console.log(i);
}

for ( var i = 1; i <=20; i+=2 ) {
    console.log(i);
}  

// i = 0, 0 < 10 true, log i to the console, i++
// i = 1, 1 < 10 true, log i to the console, i++
// ...
// i = 9, 9 < 10 true, log i to the console, i++
// i = 10, 10 < 10 FALSE, exiti the loop!

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// While loop
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}

// Continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

//Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}


// Coding challenge 5

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
*/

// John tip calculator
 
var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++)
        {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            } else if(bill >=50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }

            // Add results to the corresponding arrays
            this.tips [i]= bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

// Mark tip calculator

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++)
        {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = .2;
            } else if(bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }

            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
             
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

// Do the calculation

john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}




