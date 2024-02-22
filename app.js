// 2) Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
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

var unableToAttend = dinnerInvite[2];
var newInvite = "Ahmad";
console.log("".concat(unableToAttend, " can't make it to the dinner."));
dinnerInvite[dinnerInvite.indexOf(unableToAttend)] = newInvite;
console.log("\nSecond set of invitation messages:");
for (var i = 0, dinnerInvite_1 = dinnerInvite; i < dinnerInvite_1.length; i++) {
    var guest = dinnerInvite_1[i];
    console.log("".concat(guest, ", you are invited to our dinner."));
}
