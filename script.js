// 1. Build an object that represent an employee at the taco shop.
// 2. The employee object should have the following properties:
// - a name
// - a startDate
// - a jobTitle
// - a payRate
// - a favoriteTaco
// - an array of menu items they know how to make

const Derrick = {
    name: "Derrick Henderson",
    startDate: 05/7/19,
    jobTitle: "Line Cook",
    payRate: 10,
    favoriteTaco: "Chicken soft taco",
    learnedRecipes: ["chicken taco", "steak nachos", "quesadilla", "beef taco"],
}

const Jacob={
    name: "Jacob Perry",
    startDate: 03/04/19,
    jobTitle: "Manager",
    payRate:15,
    favoriteTaco: "Beef soft taco",
    learnedRecipes: ["chicken taco", "steak nachos", "quesadilla", "beef tacos", "beef burrito", "chicken burrito"],
}

const Luke ={
    name: "Luke Miller",
    startDate: 06/4/19,
    jobTitle: "Line Cook",
    payRate:10,
    favoriteTaco: "Steak nachos",
    learnedRecipes: ["chicken taco", "steak nachos", "quesadilla", "beef taco", "beef burrito"],
}
//     makeTaco: function(tacoName){
//         for(var i=0; i < this.learnedRecipes.length; i++){
//             if(tacoName === this.learnedRecipes[i]){
//                 console.log()
//             }
//         }
//     console.log(`Here's your ${tacoName}!`)}

// }

// // function makeTaco (tacoName){
// //     console.log(`Here's your ${tacoName}!`)
// // }

// employeeName.makeTaco("chicken taco")

// --------- LIGHTNING EXERCISE --------------------------------//
// Build an object called tacoShopStaff

// One of its properties should be called employees. This property should hold an array. Store the employee objects you created in the previous lightning exercise in this array.

// Your tacoShopStaff object should have a method called hireEmployee. It should take a parameter of a new employee and use the .push() method to add that new employee to the tacoShopStaff's array of employees.

// Your tacoShopStaff object should have another method called fireEveryone. It should reassign the employees array to be an empty array.

const tacoShopStaff = {
    employees: [Derrick, Jacob, Luke],
    hireEmployee: function(newEmployee){
        this.employees.push(newEmployee)},
        fireEmployee: function(oldEmployee){
            for(i=0; i< this.employees.length; i++){
     this.employees.splice(oldEmployee)}
            }}


tacoShopStaff.hireEmployee("Draco Malfoy");
console.log(tacoShopStaff);

tacoShopStaff.fireEmployee(Derrick);
console.log(tacoShopStaff.employees);

// Create an object that represents your pet.

// Name property with a string value.
// Species property with a string value.
// Nicknames property with an array value. Array contains strings.
// Age property with an integer value

const cooper ={
    name: "Cooper",
    species: "Bulldog",
    nicknames: ["Bull", "Coop", "Pup", "Bully"],
    age: 1,
    bark: function (something) {
        window.alert(`${cooper.name} barks 'WOOF!' at ${something}`)
    },
    cry:function(something){
        windows.alert(`${cooper.name} cries at ${something}`)
    },
    toot:function(something){
        windows.alert(`${cooper.name} farts on ${something}`)
    },
    favoriteToy: [],
    play: function(toy){
            if (toy.includes("chewy")){
            this.favoriteToy.push(toy)
        } else (toy.includes("chewy"))
    }
}

cooper.play("chewy Treat")
console.log(cooper)
// Now that you have an object that represents your pet, it's time to add some behavior. Pick three behaviors that your pet has and add three kys to your pet object. Each key's value should be a function that logs to the console or displays a window alert. Your choice.

// For example, if your pet is a dog, you could add a bark property, and the function would window.alert("WOOF!").

// Once you have define the properties, invoke each behavior. For example:

// angus.bark()
// angus.whine()
// angus.pant()

// cooper.bark( "my Mom")
// cooper.cry( "my Dad")
// cooper.toot( "my Brother")

// Give your pet a new key named favoriteToys whose value is an empty array.
// Now define another new key named play whose value is a function with a single parameter named toy.
// The function should determine if your pet liked the toy, and if s/he does, then it should be added to the favoriteToys array using the this keyword (see example above).
// Here's an example. If your pet is a cat, then he likely only likes furry toys, so you could put an if..then condition in the play() method that checks if the word "fuzzy" is in the argument value. If it is, it gets added to the array.

// You need to write code to represent the process of ordering food at a fast food joint. Your restaurant is Bob's Burgers, and you have some starter code below. The object will have two behaviors that you must define.

// The object should have a property named orders that is an array. You will need to define this.
// Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.
// Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.
// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.

const restaurant = {
    name: "Bob's Burgers",
    orders:[],
    placeOrder: function (meal) {
        this.orders.push(meal)
    }
}

const chickenComboMeal = {
    sandwichType: "Chicken",
    fries: true || false,
    drinkSize: "small",

}

// Place an order
restaurant.placeOrder(chickenComboMeal)
console.log(restaurant)

// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()

