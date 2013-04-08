//declarnig variables

greeting = "Hello";

var mystery;
mystery = "yada";

var code = "Spang";

//data types
var simple = "Green Eggs and Ham";
var escaped = "\"Green Eggs \& Ham \"";
var verylong = "Cracked, fried, overripe ovoids and \
porcine strips cooked medium well and allowed to cool";

var answer = 42;
var actuallyAString = "42"; // not treated as a number

var canYouReadThis = true;

var data = 99;
//...
if (typeof data == "number") {
    // data is numeric
}

//string operator
x = 10 + 10; // x is set to the number 20;
y = "10" + 10; // y is set to the string "1010";
z = "Ten" + 10; // x is set to the string "Ten10";

//0, "" (the empty string), undefined, and null all evaluate to false in Boolean operations. Always use
//=== when comparing to any of these values.
var zero = 0;
var emptyString = "";
var falseVar = false;
var result = zero == falseVar; // returns true;
var result = zero === falseVar; // returns false;
var result = emptyString == False; // returns true;
var result = emptyString === False; // returns false;

//functions
function CalculateBill(numberOfNightsStay, nightlyRate, extras) {
    return (numberOfNightsStay * nightlyRate) + extras;
}
//…
// elsewhere in the script
var TotalAmountOwed = CalculateBill(10, 100, 50);

//conditions
if (TotalAmountOwed > AdvancePaid) {
    GenerateNewInvoice(); // runs if condition is true
}

if (TotalAmountOwed > AdvancePaid) {
    GenerateNewInvoice(); // runs if condition is true
} else {
    WishGuestAPleasantJourney(); // runs if condition is false
}

var RoomRate;
switch (typeOfRoom) {
    case "Suite":
        RoomRate = 500;
        break; // Use break to prevent code in next case statement being run.
    case "King":
        RoomRate = 400;
        break;
    default: // code to be executed if typeOfRoom does not match above cases.
        RoomRate = 300;
}

//loops
while (GuestIsStillCheckedIn()) {
    numberOfNightsStay += 1;
}

do {
    eatARoundOfToast();
} while (StillHungry())

for (var i = 0; i < 10; i++) {
    plumpUpAPillow();
}

//object types
var eventWelcome = new String('Welcome to your conference');
var len = eventWelcome.length;

var today = new Date(1346454000); // Number of milliseconds since 01/01/1970
var today = new Date("September 1, 2012");
var today = new Date(2012, 8, 1); // Note January is 0, .., December is 11.

var emptyThreeItemArray = new Array(3);
var seasonsArray = new Array("Spring", "Summer", "Autumn", "Winter");
var thirdSeason = seasonsArray[3]; // Winter

var re = new RegExp("[dh]og");
if (re.test("dog")) {
    //...
}

//json
var singleAttendee = {
    "name": "Eric Gruber",
    "currentTrack": "1",
};

var listOfAttendees = [
{
    "name": "Eric Gruber",
    "currentTrack": "1"
},
{
    "name": "Martin Weber",
    "currentTrack": "2"
}
];


