var readlineSync = require('readline-sync');

var degrees = readlineSync.question('Enter degrees in Celsius: ');
var degreesNum = Number(degrees);
var degreesFahrenheit = (degreesNum - 32) * .5555;
console.log('It is ' + degreesFahrenheit + ' degrees Fahrenheit!');