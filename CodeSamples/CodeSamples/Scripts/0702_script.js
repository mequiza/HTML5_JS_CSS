//immediately nvoked functions

(function () {
    // Variables defined inside the function disappear when the function finishes
    // - they will not conflict with variables defined by other scripts
    var localVar = 5 ;
    var localVar2 = 6;
    // The same logic applies to functions
    // - they are destroyed when the immediately invoked function finishes
    function localFunc() {
        localVar = 99;
        //...
    }
    //...
    localFunc() ; // Run localFunc
    //...
})();


//namespaces
var MyNamespace = {
    myFunction1: function(someParameters) {
        // Implementation code…
    },
    myFunction2: function(someParameters) {
        // Implementation code…
    },
    message: "Hello World",
    count: 42
};

MyNamespace.myFunction1(someParameterValues);
MyNamespace.message = "Goodbye all";

//strict mode
function someFunction() {
    var errorCode = 100; // Declares a local variable named errorCode.
    count = 0; // Implicitly declares a global variable named count;
    //...
}

function someFunction() {
    "use strict";
    // Other statements.
}

//singletons
var radius = 100 * Math.random();
var circumference = 2 * Math.PI * radius;
var area = Math.PI * Math.pow(radius, 2);

var anObject;
//...
var anObjectAsJsonString = JSON.stringify(anObject);
var anObjectAgain = JSON.parse(anObjectAsJsonString);

var ageEnteredByUser;
var heightEnteredByUser;
//…
var age = parseInt(ageEnteredByUser);
var height = parseFloat(heightEnteredByUser);
if (isNan(age) || isNan(height))
    alert("Invalid input");

//custom objects
var employee1 = new Object();

var employee2 = {};

var employee1 = {};
employee1.name = "John Smith";
employee1.age = 21;

employee1.salary = 10000;
employee1.payRise = function(amount) {
    // Inside a method, "this" means the current object.
    this.salary += amount;
    return this.salary;
};

var newSalary = employee1.payRise(1000);
document.write("New salary for employee1 is " + newSalary);

//object literal notation
var employee1 = {
    name: "John Smith",
    age: 21,
    salary: 10000
};

var employee2 = {
    name: "Mary Jones",
    age: 42,
    salary: 20000,
    payRise: function(amount) {
        this.salary += amount;
        return this.salary;
    },
    displayDetails: function () {
        alert(this.name + " is " + this.age + " and earns " + this.salary);
    }
};

//constructors
var Account = function (id, name) {
    this.id = id;
    this.name = name;
    this.balance = 0;
    this.numTransactions = 0;
};

var acc1 = new Account(1, "John");
var acc2 = new Account(2, "Mary");


//prototypes
Account.prototype = {
    deposit: function (amount) {
        this.balance += amount;
        this.numTransactions++;
    },
    withdraw: function (amount) {
        this.balance -= amount;
        this.numTransactions++;
    },
    displayDetails: function () {
        alert(this.id + ", " +
        this.name + " balance $" +
        this.balance + " (" +
        this.numTransactions + " transactions)");
    }
};

var acc1 = new Account(1, "John");
var acc2 = new Account(2, "Mary");
acc1.deposit(100);
acc1.displayDetails();
acc2.withdraw(50);
acc2.displayDetails();


//object.create
//Object.create(prototypeObject, propertiesObject)

var obj1 = Object.create(null, {
    prop1: { value: "hello", writable: true }, // read/write property
    prop2: { value: "world" } // read-only property
});

// Account constructor function, same as before.
var Account = function (id, name) 
{ 
    //... 
};
// Account prototype, same as before.
Account.prototype = { //... 
};
acc1 = new Account();
// Create an object by using the Account prototype.
var obj2 = Object.create(Object.getPrototypeOf(acc1));


