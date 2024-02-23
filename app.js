// 2) Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var nameOfPerson = "Eric";
// This code prints a simple message using variable
console.log("Hello " + nameOfPerson + ", would you like to learn some Python today?");
// 3) Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var person = "Wali";
// Makes string name to upper and lower case
console.log("Uppercase: " + person.toUpperCase());
console.log("Uppercase: " + person.toLowerCase());
// 4) Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks: Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log("Nelson Mandela once said, \"The greatest glory in living lies not in never falling, but in rising every time we fall.\" ");
// 5) Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Nelson Mandela";
var message = "\"The greatest glory in living lies not in never falling, but in rising every time we fall.\"";
console.log(famous_person + " once said, " + message);
// 6) Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var whiteSpace = "\t\n   John Doe\t\n";
console.log("Name with whitespace:");
console.log("[" + whiteSpace + "]");
var strippedName = whiteSpace.trim();
console.log("\nName after stripping whitespace:");
console.log("[" + strippedName + "]");
// 7) Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// &
// 8) You should create four lines that look like this: console.log(5 + 3) Your output should simply be four lines with the number 8 appearing once on each line.
// Basic mathematical operations
console.log("5 + 3 = ", 5 + 3);
console.log("10 - 2 = ", 10 - 2);
console.log("4 x 2 = ", 4 * 2);
console.log("88 / 11 = ", 88 / 11);
// 9) Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var favoriteNumber = 31;
var message = "My favourate number is " + favoriteNumber;
console.log(message);
// 10) Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// done
// 11) Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var friendNames = ["Zain", "Taha", "Abdul Rehman", "Saim", "Aneeq"];
for (var i = 0; i < friendNames.length; i++) {
    console.log(friendNames[i]);
}
// 12) Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
for (var i = 0; i < friendNames.length; i++) {
    console.log("Greetings: " + friendNames[i]);
}
// 13) Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var favoriteTransportation = ["Tesla Model S", "BMW M5", "Honda CBR1000RR", "Yamaha YZF-R1"];
for (var i = 0; i < favoriteTransportation.length; i++) {
    console.log("I would like to own a ".concat(favoriteTransportation[i], "."));
}
// 14) Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var dinnerInvite = ["Zain", "Taha", "Abdul Rehman", "Saim", "Aneeq"];
for (var x = 0; x < dinnerInvite.length; x++) {
    console.log(dinnerInvite[x] + ", you are invited to our dinner");
}
// 15) Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var unabvaroAttend = dinnerInvite[2];
var newInvite = "Ahmad";
console.log("".concat(unabvaroAttend, " can't make it to the dinner."));
dinnerInvite[dinnerInvite.indexOf(unabvaroAttend)] = newInvite;
console.log("\nSecond set of invitation messages:");
for (var _i = 0, dinnerInvite_1 = dinnerInvite; _i < dinnerInvite_1.length; _i++) {
    var guest = dinnerInvite_1[_i];
    console.log("".concat(guest, ", you are invited to our dinner."));
}
// 16) More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
for (var _a = 0, dinnerInvite_2 = dinnerInvite; _a < dinnerInvite_2.length; _a++) {
    var guest = dinnerInvite_2[_a];
    console.log("".concat(guest, ", we just want to inform you that we just got a bigger dinner table."));
}
dinnerInvite.unshift("Ali");
dinnerInvite.splice(3, 0, "Momin");
dinnerInvite.push("Haseeb");
for (var _b = 0, dinnerInvite_3 = dinnerInvite; _b < dinnerInvite_3.length; _b++) {
    var guest = dinnerInvite_3[_b];
    console.log("".concat(guest, ", you are invited to our dinner."));
}
// 17) Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person varting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, varting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log("Sorry, we can only accomodate only two guest at our dinner table.");
var flag = false;
while (flag === false) {
    if (dinnerInvite.length != 2) {
        var notInDinner = dinnerInvite.pop();
        console.log("Sorry " + notInDinner + ", we can't accomodate you");
    }
    else {
        flag = true;
        for (var _c = 0, dinnerInvite_4 = dinnerInvite; _c < dinnerInvite_4.length; _c++) {
            var remaining = dinnerInvite_4[_c];
            console.log(remaining + " you are still invited to dinner.");
        }
    }
}
dinnerInvite.pop();
dinnerInvite.pop();
console.log(dinnerInvite);
// 18) Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var visit = ["Germany", "Newzeland", "London", "Holland", "America"];
var sortedArr = __spreadArray([], visit, true).sort();
var reverseArr = __spreadArray([], visit, true).sort().reverse();
console.log(visit);
console.log(sortedArr);
console.log(reverseArr);
visit.reverse();
visit.reverse();
console.log(visit);
visit.sort();
visit.sort();
console.log(visit);
// 19) Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log("Only " + dinnerInvite.length + " guests are invited to the dinner");
// 20) Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var cities = ["Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Gujranwala", "Peshawar", "Multan", "Saidu Sharif", "Hyderabad City", "Islamabad", "Quetta", "Cantonment", "Wahga"];
// 21) Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var Car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
// 22) Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// done 
// 23) Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// var car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var car = 'subaru';
// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// Test 2
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota');
// Test 3
console.log("Is car != 'honda'? I predict True.");
console.log(car != 'honda');
// Test 4
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');
// Test 5
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');
// Test 6
console.log("Is car.length > 5? I predict False.");
console.log(car.length > 5);
// Test 7
console.log("Is car.startsWith('su')? I predict True.");
console.log(car.startsWith('su'));
// Test 8
console.log("Is car.includes('bar')? I predict True.");
console.log(car.includes('bar'));
// Test 9
console.log("Is car.endsWith('ru')? I predict True.");
console.log(car.endsWith('ru'));
// Test 10
console.log("Is car.toUpperCase() === 'SUBARU'? I predict True.");
console.log(car.toUpperCase() === 'SUBARU');
// 24) More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
var city = 'Paris';
console.log("Is city equal to 'Paris'? I predict True.");
console.log(city == 'Paris');
console.log("Is city not equal to 'London'? I predict True.");
console.log(city != 'London');
console.log("Is city equal to 'paris'? I predict False.");
console.log(city == 'paris');
var country = 'FRANCE';
console.log("Is country lowercase equal to 'france'? I predict True.");
console.log(country.toLowerCase() == 'france');
var x = 10;
var y = 20;
console.log("Is x less than y? I predict True.");
console.log(x < y);
console.log("Is x greater than or equal to y? I predict False.");
console.log(x >= y);
var age = 25;
var hasLicense = true;
console.log("Is age greater than 18 and hasLicense true? I predict True.");
console.log(age > 18 && hasLicense);
var fruits = ['apple', 'banana', 'orange'];
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes("banana"));
console.log("Is 'grape' not in the fruits array? I predict False.");
console.log(fruits.includes("grape"));
// 25) Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
var alien_color = "green";
if (alien_color === "green") {
    console.log("You just earned 5 points");
}
var alien_color = "red";
if (alien_color === "green") {
    console.log("");
}
