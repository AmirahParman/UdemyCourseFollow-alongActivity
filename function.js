/* Fortune Teller
Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.
 */

function tellFortune(noOfChildren, partnersName, loc, jobTitle) {
    return `You will be a ${jobTitle} in ${loc}, and married to ${partnersName} with ${noOfChildren} kids`;
}

/* The Puppy Age Calculator
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years. */

function calculateDogAge(age) {
    return `You doggie is ${age * 7} years old in dog year!`;
}

/* The Lifetime Supply Calculator
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.
 */

function calculateSupply(age, amountPerDay) {
    let maxAge = 100;
    return `You will need ${amountPerDay * (maxAge - age)} kcal of food to last until the ripe of old age of ${maxAge}`;
}