//extending objects
//encapsulation

var Person = function(name, age) {
    // Private properties.
    var _name, _age;
    // Public methods defined in the constructor have access to private properties.
    this.getName = function() {
        return _name;
    };
    this.setName = function(name) {
        _name = name;
    };
    this.getAge = function() {
        return _age;
    };
    this.setAge = function(age) {
        if (age > 0 && age < 100)
            _age = age;
    };
    // Constructor logic.
    _name = name;
    this.setAge(age);
};
// Public methods defined in the prototype do not have access to private properties.
Person.prototype =
{
    toString: function() {
        return this.getName() + " is " + this.getAge();
    }
};
// External code.
var person1 = new Person("Joe", 21);
alert(person1.toString()); // Displays "Joe is 21"
alert(person1._name); // Displays "undefined"

//inheritance
// Base constructor.
var Person = function(name, age) {
    this.name = name;
    this.age = age;
};
// Base prototype.
Person.prototype = {
    haveBirthday: function () {
        this.age++;
    }
};
// Derived constructor.
var Student = function(name, age, subject) {
    this.name = name;
    this.age = age;
    this.subject = subject;
};
// Set the derived prototype to be the same object as the base prototype,
// and reset that derived prototype so that it uses the correct constructor.
Student.prototype = new Person();
Student.prototype.constructor = Student;
// Create a derived object and invoke any methods defined in the object or one of its
// parents. JavaScript uses prototype chaining to locate methods up the inheritance tree.
var aStudent = new Student("Jim", 20, "Physics");
aStudent.subject = "BioChemistry";
aStudent.haveBirthday();
alert(aStudent.age);


//Adding Functionality to an existing Object
var Point = function(x, y) {
    this.x = x;
    this.y = y;
};
Point.prototype.moveBy = function(deltaX, deltaY) {
    this.x += deltaX;
    this.y += deltaY;
};
Point.prototype.moveTo = function(otherPoint) {
    this.x = otherPoint.x;
    this.y = otherPoint.y;
};
var p1= new Point(100, 200);
p1.moveBy(10, 20);
var p2= new Point(25, 50);
p2.moveTo(p1);
alert("p2.x: " + p2.x + " p2.y: " + p2.y);

//apply function
function SetColor(color) {
    this.color = color;
}

var p1= new Point(100, 200);
//...
SetColor.apply(p1, ["red"]);
alert(p1.color); // Displays "red"

