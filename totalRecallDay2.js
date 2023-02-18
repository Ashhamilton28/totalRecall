////////////////////////////////
// Easy Going
////////////////////////////////

// for (let i=1; i<=20; i++){
//     console.log(i)
// }
////////////////////////////////
// Get Even
////////////////////////////////
// for (let i = 1; i <= 200; i++) {
//    if(i % 2 === 0){
//     console.log(i)
//    }
// }

////////////////////////////////
// Fizz Buzz
////////////////////////////////
// for (let num = 1; num <=100; num++){
//     if(num % 3 === 0 && num % 5===0){
//         console.log(`${num} FizzBuzz`)
//     }else if(num % 3 === 0){
//         console.log(`${num} Fizz`)
//     }else if(num % 5 ===0){
//         console.log(`${num} Buzz`)
//     }

// }

////////////////////////////////
// Wild Wild Life
////////////////////////////////
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
// const sharky = ["Sharky", "shark", 20, "Left Coast"];
// const plantee = ["Plantee", "plant",  5000 , "Mordor"];
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];

// plantee.splice(2,1,5001);
// console.log(plantee);

// wolfy.splice(3,1, "Gotham City")
// console.log(wolfy)

// dart.push("Hawkins")
// console.log(dart)

// wolfy.splice(0,1,"Gameboy")
// console.log(wolfy)

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
// Use a for of loop(not a typo - try it out! Try a for ofloop) to call toUpperCase()on each of them and print out the result.

// let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
// for(let ninjaTurtle of ninjaTurtles){
//     console.log(ninjaTurtle.toUpperCase())
// }


////////////////////////////////
// Methods, Revisited
////////////////////////////////
// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// console.log(favMovies[8])

// favMovies.sort();
// console.log(favMovies.sort())
// .sort put the movies in alphabetical order

// favMovies.pop()
// console.log(favMovies.pop)

// favMovies.push("Guardians of the Galaxy")
// console.log(favMovies)

// favMovies.reverse()
// console.log(favMovies)

// favMovies.shift()
// console.log(favMovies)

// favMovies.unshift("Smile")
// console.log(favMovies)
//adds to the front of an array

// favMovies.splice(15,1,"Avatar")
// console.log(favMovies)

// let favMoviesHalf = favMovies.slice(10,20)
// console.log(favMoviesHalf)

// fastAndFurious= favMovies.splice(14,1)
// console.log(fastAndFurious)
//the value we get for something not in array is 0/
// console.log(favMovies)


//12. the variable "favMovies" cant be changed but we can change the contents



////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
["Lucinda", "Jacc", "Neff", "Snoop"],
["Petunia", ["Baked Goods", "Waldo"]]];


whereIsWaldo.splice(1, 1)
console.log(whereIsWaldo)

whereIsWaldo[1][2] = "No One"
console.log(whereIsWaldo[1][2])
console.log(whereIsWaldo)



console.log(whereIsWaldo[2][1][1])
////////////////////////////////
//  Excited Kitten
////////////////////////////////


//1
// const statements = ["...human...why you taking pictures of me?...", "...the catnip made me do it...",  "...why does the red dot always get away..." ]
// for (let i = 1; i <= 20; i++) {
//     console.log("Love me, pet me! HSSSS!")
//     //checking if current number is even 
//     if(i%2===0)
//     console.log(statements[Math.floor(Math.random()*3)])
// }
// //2
// console.log(Math.floor(Math.random()*3))


////////////////////////////////
//  Find the Median
////////////////////////////////

// const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12];

// function findTheMedian(nums) {
//     const sortNums = nums.sort();
//     const halfNums = nums.length / 2;
//     if (nums.length % 2 !== 0) {
//         return nums[Math.floor(halfNums)]
//     }
//     return (nums[halfNums-1 +nums[halfNums]] / 2);
// }

// console.log(findTheMedian(nums))
// console.log(nums.length)
// nums.sort()
// console.log(nums)
// const sortNums = nums.sort();
// const halfNums = Math.ceil(nums.length / 2);
// console.log(nums[halfNums])
// console.log(halfNums)