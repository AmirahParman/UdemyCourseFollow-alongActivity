console.log('array reduce');

// when to use reduce

// 1. you have an array

let listOfFriends = ['Fathin', 'Mira', 'Shad', 'Bigs', 'Shakirah'];

// 2. you want to create something from this list

let groupName = '';

// and this groupName, you wanna make out of the first letter of every listOfFriends

var theReductionFuction = function (accumlator, currentValue) {
    accumlator += currentValue.slice(0, 1);
    return accumlator;
};

groupName = listOfFriends.reduce(theReductionFuction, 'GROUP');

console.log(groupName);

// take away point: array.reduce will ALWAYS reduce an array into ONE (not more) single value.
// in this example, your array of freinds became the groupName 'GROUPFMSBS'

// so now, we want to use INLINE (arrow functions / lambda) functions for reduce
var groupNameTwo = listOfFriends.reduce(
    (accumlator, currentValue) => accumlator += 'K'
    ,
    'GROUP'
);

console.log(groupNameTwo);


/*
You got an array of objects. 
Reduce it to one variabel with the names comma saparated:

contoh:
let array = [{id : 1, name : 'fathin'},{id : 2, name : 'mira'},{id : 3, name : 'shad'}]
let result = 'fathin,mira,shad';

*/

let arrayOfFriendsAndId = [{ id: 1, name: 'fathin' }, { id: 2, name: 'mira' }, { id: 3, name: 'shad' }];

let friendsName = arrayOfFriendsAndId.reduce(function (accumulator, currentObject) {
    return muddledUpNames = accumulator += ', ' + currentObject.name;
}, '')

console.log(friendsName);
