console.log('Hello World!')
var language = 'Javascript';
var status = 'Awesome';
var ourThoughts = language + ' is ' + status;

console.log(ourThoughts);

var greeting = 'Hello';
greeting = greeting + ' World!';

console.log('greeting:', greeting);

var capitalGreet = greeting.toUpperCase();
var lowerCaseGreet = greeting.toLowerCase();

console.log('capitalGreet:', capitalGreet);
console.log('lowerCaseGreet:', lowerCaseGreet);

var sentence = 'the quick brown fox jumped over the lazy dog';
var words = sentence.split(' ');
console.log(words);

var firstName = 'Brendan';
var lastName = 'Eich';

console.log('firstName:', firstName);
console.log('lastName:', lastName);

var fullName = `
Full Name

---

First Name: ${firstName}
Last Name: ${lastName}`;

console.log(fullName);

var price = 23.09;
var tax = 0.07;
var total = price * (1 + tax);

console.log(total);

var age = 11;
age++;
console.log(age);
age--;
console.log(age);

var noVal;
console.log(noVal);

var nullVall = null;
console.log(nullVall);

var favoriteThings = ['dogs', 'nature', 'friends'];
var firstThing = favoriteThings[0];
var secondThing = favoriteThings[1];
var thirdThing = favoriteThings[2];

console.log(`I like ${firstThing}, ${secondThing}, and ${thirdThing}`);



var car = {
  make: 'Tesla',
  model: 'Model 3', 
  color: 'red'
};

var key = 'color';

console.log(`Car Make: ${car.make}`);

console.log(`Car Model: ${car['model']}`);

console.log(`Car Color: ${car[key]}`);

car.engineSound = 'Vroom!!!';

console.log(`Car Engine Sound: ${car.engineSound}`);

var willLearnJavaScript = false;
willLearnJavaScript = !willLearnJavaScript;

console.log(willLearnJavaScript);

var areSame = 'Hello World' === 'Hello World!';
console.log('areSame:', areSame);

var areSame = 10 == '10';
console.log('areSame:', areSame);

var areSame1 = false == 0;
console.log('false == 0:', areSame1);

var areSame2 = false == '';
console.log('false == "":', areSame2);

var areSame3 = true == '1';
console.log('true == "1":', areSame3);

var areSame4 = null == undefined;
console.log('null == undefined', areSame4);

var areSame1 = 10 !== 10;
console.log ('areSame1:', areSame1);

var areSame2 = 6 !== '6';
console.log('areSame2:', areSame2);

var shouldExecute = true;

if (shouldExecute === true) {
  console.log('Hazaaaa! This code ran!');
}


var num = 9;

if (num > 10) {
  console.log('num is more than 10!');
  } else if (num < 8) {
    console.log('num is less than 8!');
  } else {
    console.log('num is somewhere between 8 and 10');
  }


var num = 6;

if (num > 3 && num < 10) {
  console.log('The number is larger than 3 AND smaller than 10');
}

var num = 6;

if (num == 6 || num > 10) {
  console.log('The number is equal to six or larger than 10');
}

for (var i = 10; i > 0; i--) {
  console.log(i);
}


var counter = 1;

while (counter <= 10) {
  console.log(counter);
  counter++;
}

var count = 1

while (count < 10) {
  console.log(count);
  count += 2;
}

var strangeKids = ['Will', 'Mike', 'Lucas', 'Dustin', 'Max', 'Eleven'];

strangeKids.forEach(function(kid, index) {
  console.log(`${index + 1}. ${kid}`);
});

var movies = ['The Matrix', 'Eternal Sunshine', 'Coraline', 'Interstellar'];

movies.forEach(function(movie) {
  console.log(movie);
});


function subtract(num1, num2) {
  var difference = num1 - num2;
  return difference;
}

var difference = subtract(12, 4);
console.log(difference);

var sum = add(6, 7);
console.log(sum);

function add(num1, num2) {
  var sum = num1 + num2;
  return sum;
}

var multiply = function(num1, num2) {
  var product = num1 * num2;
  return product;
};

var product = multiply(3, 4);
console.log(product);

var product = multiply(3, 4);
console.log(product);

var multiply = function(num1, num2) {
  var product = num1 * num2;
  return product;
};

var multiply = (num1, num2) => num1 * num2;

var divide = (num1, num2) => {
  var quotient = num1 / num2;
  return quotient;
};

console.log(multiply(4, 8));
console.log(divide(21, 7));


var dog = {
  name: 'Fido',
  sound: 'Woof!!!',
  readCollar: function() {
    console.log(this.name);
  },
  speak: function() {
    console.log(this.sound);
  }
};

dog.readCollar();
dog.speak();


var dog = {
  name: 'Fido',
  sound: 'Woof!!!',
  readCollar: function() {
    console.log(this.name);
  },
  speak: function() {
    console.log(this.sound);
  },
  speakAfterWait: function(timeInSeconds) {
    setTimeout(() => {
      this.speak();
    }, timeInSeconds * 1000);
  }
};

dog.readCollar(); // prints 'Fido'
dog.speak(); // prints 'Woof!!!'
dog.speakAfterWait(1); // prints 'Woof!!!'










































