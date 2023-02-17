// Example of What your JS File in VS Code should look like


/*
    Remember!!! Once you’ve completed a problem,
    COMMENT OUT YOUR WORK before moving on to the next one.
    This makes it easier to read and debug the current 
    Solution you are working on.
*/


// I. Variables & Data Types
// 1. How do we assign a value to a variable?  With the assignment operator... let or const, the name of the variable = value
// 2. How do we change the value of a...
// of a what?


// A. Q + A

// How do we assign a value to a variable? = the assignment operator

// How do we change the value of a variable? 
// let variable = value
// variable = otherValue

// How do we assign an existing variable to a new variable?
// let variable = value;
// let newVariable=value;


// Remind me, what are declare, assign, and define?
// declare- use let or const to make a variable
// assign-give a variable a value
// define-

// What is pseudocoding and why should you do it?
// pseudocoding is using words to say what you want your code to do. You should do it because it gives you a map of what you want your program to do before you write the actual code for it.

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? 90%?


// B. Strings
// Create a variable called firstVariable
// let firstVariable;


// Assign it the value of the string "Hello World"
// let firstVariable="Hello World";


// Change the value of this variable to some number
// firstVariable= 28;

// Store the value of firstVariable in a new variable called secondVariable
// let firstVariable="Hello World";
// firstVariable= 28;
// let secondVariable =firstVariable
// console.log(secondVariable)

// Change the value of secondVariableto any string.
// let firstVariable="Hello World";
//  firstVariable= 28;
// let secondVariable =firstVariable
// secondVariable="You are my sunshine"
// console.log(secondVariable)




// What is the value of firstVariable?
//28

// Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.

// let yourName="Ashley";
// let expression = "Hello, my name is ";
// let theString= expression + yourName;
// console.log(theString)

// ex: Hello, my name is Jean Valjean


// C. Booleans

// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true|| false);
// console.log(false || false || false || false || false || true);
// console.log(false === false)
// console.log(e=== 'Kevin');
// console.log(a !> b !> c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a === a !== d); // note: the answer is a simple arithmetic equation, not something "weird"

// console.log(48 == '48');




// D. The Farm
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
// Commit

// let animal="Snake";
// if(animal==="Cow"){
//     console.log("mooooo")
// } else if (animal!=="Cow"){
//     console.log("Hey! You're not a cow")
// }



// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

// let age = 14;
// if(age>= 16){
//     console.log("Here are the keys!")
// }else if (age<16){
//     console.log("Sorry, you're too young.")
// }




// II. Loops
// A. The Basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
// for(let i =0; i <=10; i++){
//     console.log(i);
// }


// Write a loop that will print out all the numbers from 10 up to and including 400
// for(let i =10; i<=400; i++){
//     console.log(i);
// }



// Write a loop that will print out every third number starting with 12 and going no higher than 4000
// let i=12
// while(i <4000){
//     console.log(i)
//     i+=3
// }



// B. Get even
// Print out the numbers that are within the range of 1 - 100
// for(let i=1; i<=100; i++){
//     console.log(i)
// }



// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

// for(let i = 1; i <= 100; i++){
//         if(i %2===0)
//         console.log(`${i} <-- is an even number`)
// else console.log(i)
//     }





// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five

// for(let i = 1; i <= 100; i++){
//         if(i %5===0)
//         console.log(`${i} I found a number. High five! `)
// else console.log(i)
//     }


// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0)
//         console.log(`${i} I found a number. High five! `)
//     else if (i % 3 === 0)
//         console.log(`${i} I found a number. Three is a crowd`)
//     else console.log(i)
// }



// For numbers divisible by both three and five, be sure your code prints both messages

// for (let i = 1; i <= 100; i++) {
//     if(i % 3 === 0 && i % 5 === 0)
//     console.log(`${i} I found a number. High five! I found a number. Three is a crowd `)
//     else if (i % 5 === 0)
//         console.log(`${i} I found a number. High five! `)
//     else if (i % 3 === 0)
//         console.log(`${i} I found a number. Three is a crowd`)
//     else console.log(i)
// }





// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.
// let bank_account=0;
// for (let i=1; i<=10; i++){
//     bank_account+=i
//     console.log(bank_account)
// }
//for loops- you know how many loops
//while

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.
// let bank_account=0;
// for(let i=1; i<=100; i++){

//     bank_account+=i*2
//     console.log(bank_account)
// }


// III. Arrays & Control Flow
//A
// What are the things in an array called?elements

// Do Arrays guarantee those things will be in order?yes and indexed

// What real-life thing could you model with an array?
// lists of items:candy




// B. Create an array that contains three quotes and store it in a variable called quotes
// let quotes =["Elevation requires separation", "The world is grand, awfully big and astonishingly beautiful, frequently thrilling. But I love New York", "There is a past version of you that is proud of how far you have come "]

//C
// const randomThings =[1, 10, "Hello", true]

// How do you access the 1st element in the array?
// console.log(randomThings[0])

// Change the value of "Hello"to "World"
// console.log(randomThings.splice(2,1,"World"))

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log()
// console.log(randomThings)



//D. Change Values

// const ourClass= ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// What would you write to access the 3rd element of the array?

// console.log(ourClass[2])

// Change the value of "Github" to "Octocat"
// console.log(ourClass.splice(4,1,"Octocat"))
// console.log(ourClass)

// Add a new element, "Cloud City" to the array

// console.log(ourClass.push("Cloud City"))
// console.log(ourClass)


//E. Mix it up
// const myArray = [5,10,500,20]

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// console.log(myArray.push("Aegon", "Ashley"))
// console.log(myArray)

// Remove the 5 from the beginning of the array.
// console.log(myArray.shift())
// console.log(myArray)

// Add the string "Bob Marley"to the beginning of the array.
// console.log(myArray.unshift("Bob Marley"))
// console.log(myArray)

// Remove the string of your choice from the end of the array.
// console.log(myArray.pop())
// console.log(myArray)


// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

// console.log(myArray.reverse())

// F.Biggie Smalls

// console.log()s "little number" if the number is entered is less than 100
// console.log()s big number if the number is greater than or equal to 100.
// let integer = 88
// if(integer < 100){
//     console.log("little number")
// }else if(integer>=100){
//     console.log("Big number")
// }



// G. Monkey in the Middle
// console.log()little number if the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey"
// let number = 8;
// if(number<5){
//     console.log("little number")
// }else if(number>10){
//     console.log("big number")
// }else{
//     console.log("monkey")
// }

// H. Whats in your closet?
// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "Per Scholas hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];

// Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],
//     [
// These are Thom's pants
//   "grey jeans",
//   "jeans",
//   "PJs"
// ],
// [
// Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

//   What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

// console.log(kristynsCloset[3]);
// console.log("Kristyn is rocking that " + kristynsCloset[3] + " today!")


// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
// console.log(kristynsCloset.splice(6,0,"raybans"))
// console.log(kristynsCloset)


// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.

// console.log(kristynsCloset.splice(5,1,"stained knit hat"))
// console.log(kristynsCloset)

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.

// console.log(thomsCloset[0][0])


// In the same way, access one item from Thom's pants array.
// console.log(thomsCloset[1][0])

// Access one item from Thom's accessories array.
// console.log(thomsCloset[2][2])

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

// console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]} and ${thomsCloset[2][2]}!`)


// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
// console.log(thomsCloset.splice([1][2]), 1, "Footie Pajamas")




// A. Talk about it:
// B. Easy Does It
// C. Accessing elements
// D. Change values
// E. Mix It Up
// F. Biggie Smalls
// G. Monkey in the Middle
// H. What's in Your Closet?
//_____________________________________________________________
// IV. Functions
// A. printGreeting




// function printGreeting(name) {

//     console.log(`Hello ${name}`)
// }

// printGreeting("Ashley");
// printGreeting("Jennifer");



// B. printCool
// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

// function printCool(name) {
//     console.log(`${name} is cool`)
// }
// printCool("Ashley")
// printCool("Jennifer")


// C. calculateCube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number


// function calculateCube(a) {
//     return a * a * a
// }
// console.log(calculateCube(11, 11, 11))

// D.isVowel
// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.



// function isVowel(a){
//     a = a.toLowerCase()
//     if(a.toLowerCase() ==="a" ||a.toLowerCase() === "e" || a.toLowerCase() ==="i" || a.toLowerCase() === "o" ||a.toLowerCase() === "u" ){
//         return true
//     }
//     else {
//         return false
//     }
// }
// console.log(isVowel("a"))


// E. getTwoLengths
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
// function getTwoLengths(a,b){
// return [a.length, b.length]
// }
// console.log(getTwoLengths("Ashley", "Hamilton"))



// F. getMultipleLengths
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

// function getMultipleLengths(arrayOfStrings){
//     let newArray= []
//     for(let i =0; i<arrayOfStrings.length; i++){
//        newArray.push(arrayOfStrings[i].length); 
//     }

//     return newArray
// }


// console.log(getMultipleLengths(["I love you", "Thank you", "I love you too"]))
// getMultipleLengths(["I love you", "Thank you", "I love you too"])

// G.maxOfThree
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

// function maxOfThree(num1, num2, num3) {
// if (num1 > num2 && num1 > num3){
// return num1
//     }else if (num2 >num3 && num2> num1){
//         return num2
//     }
//     else{
//         return num3
//     }
// }
//     console.log(maxOfThree(2, 6, 26))






// H.printLongestWord
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

// function printLongestWord(arrayOfStrings) {
//     let longestWord = "";
//     for (let i = 0; i < arrayOfStrings.length; i++) {
//         if (arrayOfStrings[i].length > longestWord.length) {
//             longestWord = arrayOfStrings[i]
//         }
//     }
//     return longestWord
// }
// console.log(printLongestWord(["Print", "Longest", "Word"]))

// function printLongestWord()
//_____________________________________________________________





// V. Objects
// A.Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.
let user = {
    name: "Asha",
    email: "AshaNYC@gmail.com",
    age: 30,
    purchased: []
}


// B.Update the user
// Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
user['email'] = "AshaNewYork@gmail.com"
console.log(user)

// Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++
console.log(user.age = user.age + 1)

// C.Adding keys and values
// You have decided to add your user's location to the data that you want to collect.

// Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).
user["location"] = "NYC"
console.log(user)

// D.Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
user["purchased"].push("carbohydrates")
console.log(user)

// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.

user["purchased"].push("peace of mind")
console.log(user)

// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
user["purchased"].push("Merino jodhpurs")
console.log(user)


// Console.log just the "Merino jodhpurs" from the purchased array.
// console.log(user["purchased"][2])

// E. Object-within-object
user.friend = {
    name: "Yelhsa",
    age: 32,
    location: "NYC",
    purchased: []
}

// Console.log just the friend's name
console.log(user.friend["name"])

// Console.log just the friend's location
console.log(user.friend["location"])

// CHANGE the friend's age to 55
user.friend['age'] = 55;
console.log(user.friend)


// The friend has purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchased array.
user.friend["purchased"].push("The One Ring")
console.log(user.friend)


// The friend has purchased "A latte". Use .push()to add "A latte" to the friend's purchased array.
user.friend["purchased"].push("A latte")
console.log(user.friend)

// Console.log just "A latte" from the friend's purchased array.
console.log(user.friend["purchased"][1])




// F.Loops
// Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
// for (let i = 0; i<user.purchased.length; i++){
//     console.log(user.purchased[i])
// }

// Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.
// for (let i = 0; i<user.friend.purchased.length; i++){
//     console.log(user.friend.purchased[i])
// }

//! G.Functions can operate on objects
// Write a single function updateUser that takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase


function updateUser() {
    user.age++
    user.name = user.name.toUpperCase()

}

// Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our user object, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument.

function oldAndLoud(person) {
    person.age++
    
    person.name = person.name.toUpperCase()
}

oldAndLoud(user)
updateUser(user)
updateUser(user)
console.log(user.name)
console.log(user.age)





//_____________________________________________________________


// Extra