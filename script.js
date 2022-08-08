/* Add Elements to an Array -.push() and .unshift()

1. they take one or more arguments (the element or elements you want to add)
2. they return the length of the modified array
3. they are destructive methods

diff
-.push() method adds elements to the end of an Array
.unshift() adds them to the beginning of the array

*/

const superheroes = ['Catwoman', 'She-Hulk', 'Jessica Jones'];

superheroes.push('Wonder Woman'); // add end

superheroes.unshift('Boston', 'Chicago'); // add front

console.log(superheroes);

//==============================================================================

// Spread Operator '' [... previous arrary name ]'' , allows us to "spread out" the elements of an existing Array into a new Array, creating a copy/clone non-nested arrays.

var copyOfSuperheroes = ['Atom man', ...superheroes, 'water'];

console.log(copyOfSuperheroes);

//==============================================================================

/* .pop() and .shift(), these two methods work in the same way:

they don't take any arguments
they remove a single element
they return the element that is removed
they are destructive methods 

The .shift() method removes the first element in an Array:
The .pop() method removes the last element in an Array

*/

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

days.pop(); //remove Sun
days.shift(); // remove Mon

console.log(days);
//==============================================================================

//.slice remove array without mutation

const primes = [2, 3, 5, 7];

const copyOfPrimes = primes.slice(0, primes.length - 3);

console.log(primes);
console.log(copyOfPrimes);

//==============================================================================

//.splice() performs destructive actions / allows us to remove elements, add elements, or replace elements (or any combination of the three). With a Single Argument

const originalDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
originalDays.splice(4);
console.log(originalDays);

//==============================================================================

// array.splice(start, deleteCount, item1, item2, ...)  3+ arguments

const cards = ['Ace of Spades', 'Jack of Clubs', 'Nine of Clubs', 'Nine of Diamonds', 'Three of Hearts'];

cards.splice(2, 1, 'Ace of Clubs', 'Joker');

console.log(cards);


const menu = ['Jalapeno Poppers', 'Cheeseburger', 'Fish and Chips', 'French Fries', 'Onion Rings'];

const newMenu = [...menu.slice(0, 1), 'Veggie Burger', 'House Salad', 'Teriyaki Tofu', ...menu.slice(3)];

console.log(menu);
console.log(newMenu);


