//creating classes and factories
//Hamster

// class hamster {
//     constructor(name) {
//         this.owner = ""
//         this.name = name
//         this.price = 15
//     }
//     wheelRun() {
//         console.log('squeak squeak')
//     }
//     eatFood() {
//         console.log('nibble nibble')
//     }
//     getPrice() {
//         return this.price
//     }
// }


//Person

// class Person {
//     constructor(name) {
//         this.name = name
//         this.age = 0
//         this.height = 0
//         this.weight = 0
//         this.mood = 0
//         this.hamsters = []
//         this.bankAccount = 0
//     }

//     getName() {
//         return this.name
//     }
//     getAge() {
//         return this.age
//     }
//     getWeight() {
//         return this.weight
//     }
//     greet() {
//         console.log(`I am ${this.name} hello`)
//     }
//     eat() {
//         this.weight++
//         this.mood++
//     }
//     exercise() {
//         this.weight--
//     }

//     ageUp() {
//         this.age++
//         this.height++
//         this.weight++
//         this.mood--
//         this.bankAccount += 10
//     }
//     buyHamster(hamster) {
//         this.hamsters.push(hamster)
//         this.mood += 10
//         this.bankAccount -= hamster.getPrice()
//     }
// }


//Timmy
// const timmy = new Person("timmy")
// for (let i = 0; i < 5; i++) {
//     timmy.ageUp()
// }
// for (let i = 0; i < 5; i++) {
//     timmy.eat()
// }
// for (let i = 0; i < 5; i++) {
//     timmy.exercise()
// }
// for (let i = 0; i < 9; i++) {
//     timmy.ageUp()
// }


// const gus = new hamster("gus")
// gus.owner = "timmy"
// timmy.buyHamster(gus)

// for (let i = 0; i < 15; i++) {
//     timmy.ageUp()
// }

// timmy.eat()
// timmy.eat()
// timmy.exercise()
// timmy.exercise()



//Chef Make Dinners
// class Dinner {
//     constructor(appetizer, entree, dessert) {
//         this.appetizer = ""
//         this.entree = ""
//         this.dessert = ""

//     }
// }



// class Chef {
//   cookLasagna(){
//     console.log("Mmm. Lasanga!")
//   }
//   cookGumbo(){
//     console.log("Mmm. Gumbo!")
//   }
//   cookPepperSteak(){
//     console.log("Mmm. Pepper Steak!")
//   }


// }


// const asha = new Chef ('asha')

// asha.cookGumbo
// console.log(asha.cookGumbo)
// asha.cookLasagna
// console.log(asha.cookLasagna)
// asha.cookPepperSteak
// console.log(asha.cookPepperSteak)


//I. Variables & Datatypes
//*A. Q + A
/*
How do we assign a value to a variable? let somevar = 10
We use let to make someVar a variable and then make 10 the value.

How do we change the value of a variable? somevar = 12
we take the variable someVar and make it equal to 12, changing the value from 10 to 12

How do we assign an existing variable to a new variable? let newvar = somevar
create the new variable using let and give it a name which is newVar and have it equal to the original variable, someVar


Remind me, what are declare, assign, and define? no wrong answers, they should show an understanding of how to use these words
declare is to use let/const to say the next word will be a variable. Assign using the = and giving a value. 

What is pseudocoding and why should you do it? no wrong answers but they should understand that psuedo code is not code its plain english 
description of what they want to accomplish
answer means that its plain english describing what you want your code to do

What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? no wrong answers but they should defend what they say
there is no set time but the person should be able to describe what the code it doing
*/



 //*B. Strings 
// let firstVariable = "Hello World"
// firstVariable = 11
// let secondVariable = firstVariable
// let yourName = "Ashley"
// let expression = "Hello, my name is "
// console.log(`${expression}${yourName}`)
// console.log(`Hello, my name is ${yourName}`)

//*C. Booleans
/*
used the variables make the statements true
*/

//D. The farm
/*
made if else statements based of if the animal was a cow or not
*/

//E. Driver's Ed
// if else statement based of the persons age. if they are 16 or older they get the keys, if they are younger than 16 they do not.

//II. Loops
//The basics
// wrote for loops for 1,2 and 3 using basic for loop structure. Used modelo for #3

//B. Get even 
//used for loop structure. used %2===0 to print message next to even numbers


//C. Give me Five
//used for loop structure, %5 and %10 separately and a %5 && %10 statement.

//D. Savings account
// used a for loop for problem

//III. Arrays & Control flow
// A. Talk about it:
// I got these answers correct

// B. Easy Does It
// made array with 3 quotes

// C. Accessing elements
// used array provided and correctly answered questions


// D. Change values
// used array provided and correctly answered questions


// E. Mix It Up
// used array to answer various problems about arrays

// F. Biggie Smalls
// used if else statement to print console.log statements based off of numbers

// G. Monkey in the Middle
// used if else statement to print console.log statements based off of numbers

// H. What's in Your Closet?
//was able to access and change different elements in the arrays


// IV. Functions
// A. printGreeting
// made a function to print a greeting

// B. printCool
// made a function to be able to print when someone is cool


// C. calculateCube
// used the forumale a*a*a to make function that would calculate the aread of a cube

// !D. isVowel
// E. getTwoLengths
// F. getMultipleLengths
// G. maxOfThree
// H. printLongestWord

// Objects
// A. Make a user object
// B. Update the user
// C. Adding keys and values
// D. Shopaholic!
// E. Object-within-object
// F. Loops
// G. Functions can operate on objects