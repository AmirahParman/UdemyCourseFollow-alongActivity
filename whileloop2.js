/*Ask user for a name of someone. 
Then ask how old of that person.
keep asking over and over until they say done =
list out all friends that are over 18. */

let friendListOver18 = [];
let userName = prompt("What is your friend's name?")
let age = (prompt("How old is this person?"));

if (parseInt(age) > 18) {
    friendListOver18.push(userName);
}

while (userName) {
    userName = prompt("Any other friend?. Type 'done' if you want to view all your friends that are over 18");
    if (userName == 'done') {
        break;
    }
    age = prompt("How old is this person?");
    if (age == 'done') {
        break;
    }
    if (parseInt(age) > 18) {
        friendListOver18.push(userName);
    }
}

if (userName == 'done' || age == 'done') {
    console.log(friendListOver18)
}

/* Refactor */

// let friendListOver18 = [];
// let userName = prompt("What is your friend's name?")
// let age = (prompt("How old is this person?"));

// if (userName == 'done' || age == 'done') {
//     console.log('thank you for playing');
// }
// else {
//     if (parseInt(age) > 18) {
//         friendListOver18.push(userName);
//     }

//     while (true) {
//         userName = prompt("Any other friend?. Type 'done' if you want to view all your friends that are over 18");
//         age = prompt("How old is this person?");

//         if (age == 'done' || userName == 'done') {
//             break;
//         }
//         else if (parseInt(age) > 18) {
//             friendListOver18.push(userName);
//         }
//     }

//     console.log(friendListOver18)
// }