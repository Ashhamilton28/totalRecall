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


