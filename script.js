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