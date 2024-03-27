// // // // // Assignment Solution
// // //  Task 2
// let personName : string = "Eric";
// console.log(`Hello ${personName}, would you like to learn some Python today?`);
// // // Task 3
// let personName : string = "Sana javed";
// In lowercase.
// console.log("lowercase:", personName.toLowerCase());
// In uppercase.
// console.log("uppercase:", personName.toUpperCase());
// Title case.
// console.log("Title case:", personName.replace(/\b\w/g,c=> c.toUpperCase()));
// // // Task 4
// let quote : string = "A person who never made a mistake never tried anything new.";
// let author : string = "Albert Einstein";
// console.log(`${author} once said, "${quote}"`);
// // // Task 5
// let quote : string = "A person who never made a mistake never tried anything new.";
// let author : string = "Albert Einstein";
// console.log(`${author} once said, "${quote}"`);
// let famous_person : string = "Albert Einstein";
// let message : string = `${famous_person} once said, "${quote}"`;
// console.log(message);
// // // Task 6
// let personName : string = "\t\n  Aima Ali \n\t";
// console.log("Original:", personName);
// console.log("Stripped:", personName.trim());
// // // Task 7 & Task 8
//Addition.
// console.log(5+3);
//Subtraction.
// console.log(10-2);
//Multiplication.
// console.log(4*2);
//Division.
// console.log(16/2);
// // // Task 9
// let favoriteNumber : number = 6
// console.log(`My favorite number is ${favoriteNumber}.`);
// // // Task 10 
// // Author : [Sana Javed]
// // Date :[ Monday , Feb 25 , 2024 ]
// // Task 9 : printing my favorite number.
// let favoriteNumber : number = 6
// // Reveling my favorite number in a message formate
// console.log(`My favorite number is ${favoriteNumber}.`);
// // // Task 11
// let names : string [] = ["Sana","Saima","Sawera","Saman"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// // // Task 12
// let names : string [] = ["Sana","Saima","Sawera","Saman"];
// let message : string = "Do you like to play football?"
// console.log(names[0] + " "+ message )
// console.log(names[1] + " "+ message )
// console.log(names[2] + " "+ message )
// console.log(names[3] + " "+ message )
// // // Task 13 
// let transpotation : string [] = ["Honda Motorcycle","Audi","Honda city"];
// transpotation.map((items) => console.log(`I would like to own a ${items}`));
// // // Task 14
// let guestArr : string [] = ["Sana","Saima","Sawera"];
// guestArr.map((items) => (console.log(`Dear ${items} , You are invited to the dinner`)));
// // // Task 15 
// let guestArr : string [] = ["Sana","Saima","Sawera","Saman"];
// let canNotAttend : string = "Sana"
// console.log(canNotAttend + " " "can not attend the dinner.")
// let newGuest : string = "Aliya"
// guestArr [guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr)
// guestArr.map((items) => 
// console.log(`Dear ${items}, you are invited to the dinnar.`);
// // // Task 16 
// let guestArr : string [] = ["Aliya","Saima","Sawera","Saman"];
// let canNotAttend : string = "Sawera"
// let newGuest : string = "Areeba"
// guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr)
// guestArr.map((items) =>
// console.log(`Dear ${items},I found a bigger dinner table so I am invited more peoples.`)
// );
// // Part 2 Began
// let guestBeg : string = "Aena"
// guestArr.unshift(guestBeg);
// console.log(guestArr)
// // // Part 3 Middle
// let middleGuest : string = "Fatima"
// let middleIndex = guestArr.length/3
// guestArr.splice(middleIndex,0,middleGuest)
// console.log(guestArr)
// // // Part 4 Append
// guestArr.push("Rabia")
// console.log(guestArr)
// // // Part 5 
// guestArr.map((items) => 
// console.log(` Dear ${items}, you are invited in the more people list on dinner`));
// // // Task 17 
// // Initial list of guests
// let guests : string [] = ["Aima", "Amna", "Dua", "Zunaira", "Aqsa"];
// // // Informing that only two people can be invited
// console.log("Due to limited space,only two people can be invited for dinner.");
// // // // Removing guests untill only two names remain
// while (guests.length > 2) {
//       const removedGuest = guests.pop();
//       console.log(`Sorry, ${removedGuest}, you're no longer invited to dinner.`);
// }
// // // // Printing invitations to the remaining two guests
// let guests : string [] = ["Aima", "Amna"];
// guests.forEach((guests) => {
//    console.log(`Dear ${guests}, you're still invited to dinner.`);
// });
// // // // Removeing the last two names from the list
// guests.pop();
// guests.pop();
// // // // Printing the final list to confirm it's empty
// console.log("Final guest list:" , guests);
// // // Task 18 
// // Store the locations in an array 
// let placesToVisit : string[] = ["Tokyo", "Pakistan", "America", "China", "Japan"];
// // Print the array in its original order
// console.log("Original order:", placesToVisit);
// // Print the array in alphabetical order without modifying the actual list
// console.log("Alphabetical order:" , [...placesToVisit].sort());
// // Show that the array is still in its original order 
// console.log("Original order after sorting:", placesToVisit);
// // Print that array in reverse albhabetical order without changing the order of the original list 
// console.log("Reverse Alphabetical order:", [...placesToVisit].sort().reverse());
// // Show that the array is still in its original order
// console.log("Original order after reverse sorting:", placesToVisit);
// // Reverse the order of the list
// placesToVisit.reverse();
// console.log("Reversed order:", placesToVisit);
// // Reverse the order of the list again to get back to the original order
// placesToVisit.reverse();
// console.log("back to original order:", placesToVisit);
// // // Sort the array in alphabetical order 
// placesToVisit.sort();
// console.log("sorted in alphabetical order:", placesToVisit);
// // // Sort the array in reverse alphabetical order 
// placesToVisit.sort((a, b) => b.localeCompare(a));
// console.log("sorted in reversed alphabetical order:", placesToVisit);
// // // Task 19
// let invitations : string [] = ["Sana", "Saman"]
// let count_invitations : number = invitations.length
// console.log(`${count_invitations} people will come to the dinner`)
// // // Task 20 
// let country : string [] = ["Pakistan","India","Newyork","Japan","China"];
// console.log("List of country:");
// console.log(country)
// // // Task 21
// let person : {name : string, fname : string , age : number} = {name : "Sana" , fname : "female" , age : 25}
// console.log(person)
// // // Task 22
// // International Error: If you haven't received an array index error is one of your 
// // programs yet, try to make one happen. Change in index in one of your programs
// // produce an index error. Make sure you correct the error before closing the program.
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//console.log(days{7})
console.log(days[6]);
// // // Task 23
// // Conditional Tests Write a series of conditional tests. 
// // Print a statement describing each test and your prediction for the results of each test.
// // Your code should look something like this this
// let car = "subaru"; 
// console.log("is car == 'subaru'? predict true")
// console.log(car == 'subaru')
// console.log("is car != 'honda city'? predict true")
// console.log(car != 'honda city')
// console.log("is car == 'Subaru'? predict false")
// console.log(car == 'Subaru')
// console.log("is car == 'SUBARU'? predict false")
// console.log(car == 'SUBARU')
// console.log("is car.lenght == 6? predict true")
// console.log(car.length == 6)
// console.log("is car.lenght != 10? predict true")
// console.log(car.length != 10)
// console.log("is 10 > 45 ? predict false")
// console.log(10 > 45)
// console.log("is 3 <= 2 ? predict false")
// console.log(3 <= 2)
// console.log("is 72 >= 83 ? predict false")
// console.log(72 >= 83)
// console.log("is car == 'subaru' && car.length == 6? predict true ")
// console.log(car == 'subaru' && car.length == 6)
// // // // Task 24 
// // More conditional Test You don't have to limit the number of tests you create to 10.
// // If you want to try more comparisons,write more tests.
// // Have atleast one True and one False results for each of the following.
// // Tests for equality and inequality with strings.
// let name_1 : string = "Sana"
// let name_2 : string = "Sana javed"
// let name_3 : string = "Miss sana javed"
// if (name_1 == name_3){
//    console.log("names are equal")
// } else {
//   console.log("names are not equal")
// }
// if (name_1 != name_2){
//    console.log("names are equal")
// }
// // Test using the lower case function.
// if (name_1 != name_3){
//   console.log("names are equal")
// }
// // Numerical tests involving equality and inequality, greater than and less than,
// // greater than or equal to, ans less than or equal to.
// let age_1 : number = 18
// let age_2 : number = 22
// if (age_1 == 18) {
//    console.log("eligible for certificate")
// }
// if (age_1 != 22) {
//       console.log("eligible for certificate in older category")
// }
// if (age_1 <= age_2){  //less
//    console.log("younger")
// }
// if (age_2 >= age_1){  //greater
//    console.log("older")
// }
// // Tests using "and" and "or" operators.
// if (age_1 == 18 && age_2 == 22) {
//    console.log(" person is eligible for certificate")
// }
// if (age_1 == 18 || age_2 != 22) {
//    console.log(" person is not eligible for certificate")
// }
// // Test whether an item is in a array.
// let country : string []  = ["Pakistan", "India","Japan","China"]
// if (country.includes("Pakistan")){
//        console.log("Pakistan is in country list")
// }
// // Test whether an item is not in a array.
// let country : string []  = ["Pakistan", "India","Japan","China"]
// if (!country.includes("America")){
//    console.log("America is not include in an array")
// }
// // // Task 25 
// // Alien Colours #1 imagine an alien was just shot down in a game.
// // Create a variable called alien_colour and assign it a value of 'green','yellow'or 'red'.
// // write an if statement to test wheather the alien's colour is green if it is ,
// //print a message that the player just earned 5 points.
// let alien_color = "green"
// if (alien_color == "green")
// console.log( 'you earn 5 points')
// // write one version of this program that passes the if test and another that fails.
// //(The version that fails will have no output.)
// let alien_color : string = "red"
// if (alien_color == "green")
// console.log("no output")
// // // Task 26 
// // Alien colors #2. choose a color for an alien as you did Exercise 25, and write an if-else chain.
// // If the alien's color is green, print a statement that the player just earned 5 points for 
// // shooting the alien.
// let alien_color = "green"
// if (alien_color == "green") {
// console.log("player just earned 5 points for shooting the alien")
// } else{
//   console.log("player just earned 10 points")
// }
// // If the alien's color isn't green, print a statement that the player just earned 10 points.
// // Write one version of this program that runs the if block and another that runs the else block.
// let alien_color = "red"
// if (alien_color == "green") {
// console.log("player just earned 5 points for shooting the alien")
// } else{
//    console.log("player just earned 10 points")
// }
// // // Task 27
// // Alien colors #3 Turn your if-else chain from Exercise 5.4 into an if-else chain.
// // If the alien is green, print a message that the player earned 5 points.
// let alien_color : string = "green"
// if (alien_color == "green") {
//    console.log("5 points")
// } else if (alien_color == "yellow") {
//    console.log("10 points")
// } else {
//    console.log("15 points")
// }
// // If the alien is yellow, print a message that the player earned 10 points.
// let alien_color : string = "yellow"
// if (alien_color == "green") {
//    console.log("5 points")
// } else if (alien_color == "yellow") {
//    console.log("10 points")
// } else {
//    console.log("15 points")
// }
// // If the alien is red, print a message that the player earned 15 points.
// // Write three versions of this program, making sure each message is printed for the appropriate color alien.
// let alien_color : string = "red"
// if (alien_color == "green") {
//    console.log("5 points")
// } else if (alien_color == "yellow") {
//    console.log("10 points")
// } else {
//    console.log("15 points")
// }
// // // Task 28 
// // Stages of life. Write an if-else chain that determines a person's stage of life.
// // Set a value for the variable age, and then:
// // if the person is less than 2 years old, print a message that the person is a baby.
// let age : number = 1
// if (age < 2) {
//   console.log("you are a baby") 
// }  else if (age < 4) {
//    console.log("you are a toddler")
// } else if (age < 13) {
//    console.log("you are a kid")
// } else if (age < 20) {
//    console.log("you are a teenager")
// }  else if (age < 65) {
//    console.log("you are a adult")
// }  else {
//    console.log("you are a older")
// }
// // if the person is at least 2 years old but less than 4, print a message that the person is a toddlier.
// let age : number = 2
// if (age < 2) {
//    console.log("you are a baby") 
// }  else if (age < 4) {
//    console.log("you are a toddler")
// } else if (age < 13) {
//    console.log("you are a kid")
// } else if (age < 20) {
//    console.log("you are a teenager")
// }  else if (age < 65) {
//    console.log("you are a adult")
// }  else {
//    console.log("you are a older")
// }
// // if the person is at least 4 years old but less than 13, print a message that the person is a kid.
// let age : number = 4
// if (age < 2) {
//   console.log("you are a baby") 
// }  else if (age < 4) {
//    console.log("you are a toddler")
// } else if (age < 13) {
//    console.log("you are a kid")
// } else if (age < 20) {
//    console.log("you are a teenager")
// }  else if (age < 65) {
//    console.log("you are a adult")
// }  else {
//    console.log("you are a older")
// }
// // if the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// let age : number = 13
// if (age < 2) {
//   console.log("you are a baby") 
// }  else if (age < 4) {
//    console.log("you are a toddler")
// } else if (age < 13) {
//    console.log("you are a kid")
// } else if (age < 20) {
//    console.log("you are a teenager")
// }  else if (age < 65) {
//    console.log("you are a adult")
// }  else {
//    console.log("you are a older")
// }
// // if the person is at least 20 years old but less than 65, print a message that the person is an adult.
// let age : number = 20
// if (age < 2) {
//   console.log("you are a baby") 
// }  else if (age < 4) {
//    console.log("you are a toddler")
// } else if (age < 13) {
//   console.log("you are a kid")
// } else if (age < 20) {
//    console.log("you are a teenager")
// }  else if (age < 65) {
//    console.log("you are a adult")
// } else {
//    console.log("you are older")
// }
// // if the person is age 65 or older, print a message that the person is an older.
// let age : number = 65
// if (age < 2) {
//   console.log("you are a baby") 
// }  else if (age < 4) {
//    console.log("you are a toddler")
// } else if (age < 13) {
//    console.log("you are a kid")
// } else if (age < 20) {
//    console.log("you are a teenager")
// }  else if (age < 65) {
//    console.log("you are a adult")
// }  else {
//    console.log("you are a older")
// }
// // // Task 29
// // Favorite fruit : Make a array of your favorite friuts, and then write a senes of independent 
// // if statements that check for certain fruits in your array.
// // make a array of your three favorite fruits and call it favourite_friuts.
// // write five if statements. Each should check wheather a certain kind of fruit is in your array.
// // if the fruit is in your array, the if block should print a ststements, such as you really like bananas!
// let favourite_friuts : string [] = ["kivi", "orange", "apple", "berry", "peach"]
// if (favourite_friuts.includes("kivi")) {
//    console.log("kivi")
// }
// if (favourite_friuts.includes("apple")) {
//    console.log("apple")
// }
// if (favourite_friuts.includes("orange")) {
//   console.log("orange")
// }
// if (favourite_friuts.includes("berry")) {
//    console.log("You really like bananas")
// }
// if (favourite_friuts.includes("peach")) {
//    console.log("you really like bananas")
// }
// // // Task 30
// let users : string [] = ["Admin", "Eric", "Haseeb", "Ali", "Fatima"]
// for (let  user of users) {
//     if (user === "Admin") {
//         console.log("Hello Admin, would you like to use a status report")
//     } else {
//         console.log (` Hello ${user}, thank you for logging in again`)
//     }
// }
// // // Task 31
// let users : string [] = ["Admin", "Eric", "Haseeb", "Ali", "Fatima"]
// if (users.length === 0) {
//     console.log("we need to find some users!")
// } else {
//     for (let user of users) {
//         if ( user === "Admin") {
//             console.log("Hello Admin, would you like to use a status report")
//         } else {
//             console.log (`Hello ${user}, thank you for logging in again`)
//         }
//     }
// }
// users = []
// if (users.length === 0) {
//     console.log("we need to find some users")
// }
// // // Task 32
// let current_users : string [] = ["admin", "Eric", "Haseeb", "Ali", "fatima"]
// let new_users : string [] = ["admin", "fatima", "Sana", "Saba", "Noor"]
// let current_users_lower : string [] =current_users.map(user => user.toLowerCase())
// for (let new_user of new_users) {
//     if (current_users_lower.includes (new_user.toLowerCase())) {
//         console.log(`Sorry ${new_user}, that names is taken`)
//     } else {
//         console.log(`Yes ${new_user}, is still in avaliable list`)
//     }
// }
// // // Task 33 
// let numbers : number [] = [1,2,3,4,5,6,7,8,9]
// for (let number of numbers) {
// if (number === 1) {
//     console.log (`${number}st`) //1st
// } else if (number === 2) {
//     console.log (`${number}nd`) //2nd
// } else if (number === 3) {
//     console.log (`${number}rd`) //3rd
// } else {
//     console.log (`${number}th`) //4th, 5th, 6th, 7th, 8th, 9th.
// }
// }
// // // Task 34
// let favourite_pizza : string [] = ["Fajita","Chicken","Vegetables"]
// for (let pizza of favourite_pizza) {
//     console.log(pizza)
// }
// console.log("\n")
// for (let pizza of favourite_pizza) {
//     console.log(` I really like ${pizza} pizza!`)
// }
// console.log(`\nI really love pizza!`)
// // // Task 35
// let animals : string [] = ["Cat", "Cow" ,"Dog"]
// for (let animal of animals) {
//     console.log(animal)
// }
//  console.log("\n")
// for (let animal of animals) {
//     console.log( ` A ${animal} has a tail`)
// }
// console.log ("\n All of these are great pets! but i love cats more")
// // // Task 36
// // T-shirt: write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
// // The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// function makeShirt(size : string, text : string): void {
//     console.log(`/ you order a ${size} shirt that says ${text}`)
// }
// makeShirt('large','"i love typescript"')
// makeShirt('medium','"i need a big shirt"')
// // // Task 37
// function makeShirt(size : string = 'large', text : string =  'I love typescript'): void {
//     console.log(`you have order a ${size}, shirt that says ${text}`)
// }
// makeShirt();
// makeShirt('medium')
// Different message
// makeShirt('small', 'I need a big shirt to wear')
// // // Task 38
// function describe_city(city : string, country : string = 'Pakistan') : void {
//     console.log(`${city} is in ${country}`)
// }
// describe_city('Karachi')    //Default sentence
// describe_city('France', 'Europe')
// describe_city('Lahore', 'Punjab')
// // // Task 39
// function cityCountry(city : string, country: string) : string {
//     return `${city},${country}`
// }
// let c1 = cityCountry('Lahore' , 'Pakistan')
// let c2 = cityCountry('Tokyo' , 'Japan')
// let c3 = cityCountry('Paris' , 'France')
// console.log(c1)
// console.log(c2)
// console.log(c3)
// // // Task 40
// // function makeAlbum (artist: string, title: string): { artist: string; title: string} {
// //     const dictionaries = {
// //         artist: artist.charAt(0).toUpperCase() + artist.slice(1),
// //         title : title.charAt(0).toUpperCase() + title.slice(1)
// //     };
// //     return dictionaries;
// // }
// // let album = makeAlbum("Sana" , "Light")
// // console.log(album)
// // album = makeAlbum("Rida" , "Minds")
// // console.log(album)
// // album = makeAlbum("Aima" , "Power")
// // console.log(album)
// // // Task 41
// Magicians: Make a array of magician's names. Pass the array to a function 
// called show_magicians(), which prints the name of each magician in the array 
// function show_magicians(magicians : string[]): void {
//     for (const magician of magicians) {
//         console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
//     }
// }
// const magician : string[] = ["Ali","Hamza","Bilal"];
// show_magicians(magician)
// // // Task 42
// // Great magicians: start with a copy of your progam from Exercise 39. Write a function called make_great() that modifies
// // the array of magicians by adding the Great to each magician's name. call show_magicians() to see that the list
// // has actually been modified.
// function make_great(magicians: string[]): void {
//     for (let i = 0; i < magicians.length; i++) {       //i stand for index string
//         magicians[i] = magicians[i] + ' the great'
// }
// }
// const magicians2: string[] = ["Ali","Hamza","bilal"];
// make_great(magicians2)
// show_magicians(magicians2)
// // // Task 43
// function make_great2(magicians: string[]): string[] {
//     const greatMagicians : string[] = [];
//     for (let i = 0; i < magicians.length; i++) {       
//         greatMagicians.push(magicians[i] + ' the great')
//     }
//     return greatMagicians;
// }
// const magicians3: string[] = ["Ali","Hamza","bilal"];
// const greatMagicians2 : string[] = make_great2(magicians3);
// show_magicians(magicians3);
// show_magicians(greatMagicians2);
// // // Task 44
// // Sandwiches : write a function that accepts a array of items a person wants on a sandwich. The function 
// // should have one perameter that collects as many items as the function call provides, and it should print
// // a summary of the sandwich that is being ordered. Call the function three times, using a different number
// // of arguments each time.
// function sandwich(...items : string[]) : void {
//     console.log("Sandwich order:")
//     for (let i = 0; i < items.length; i++) {
//         console.log(`- ${items[i]}`)
//     }
// }
// console.log("Enjoy your sandwich Sana javed")
// sandwich('Capsicum','Tomato','Chicken')
// sandwich('beef','cheese')
// sandwich('Garlic Chicken','Mayo Sauce')
// // // Task 45
// // Cars: Write a function that stores information about a car in a Object. The function should always
// // receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
// // Call the function with the required information and two other name-value pairs,such as a color or an
// // optional feature. Print the object that's returned to make sure all the information was srored correctly.
// type car = {
//     manufacture : string
//     model : string
//     [key : string] : any;
// }
// function createCar(manufacture : string,model: string, optional: Record<string, any>): car {
//     return{
//         manufacture,
//         model,
//         ...optional
//     }
// }
// const mycar : car = createCar("Toyota", "Corolla", { color : "Black" , Year : "2024"})
// console.log(mycar)
// // // THE END // // // 
