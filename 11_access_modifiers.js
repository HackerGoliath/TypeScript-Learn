var Employee = /** @class */ (function () {
    // Acess Modifiers- By default public
    // protected fname: string;
    // lname: string;
    // private age: number;
    // constructor(fName: string, lName: string, age: number) {
    //     this.fname = fName;
    //     this.lname = lName;
    //     this.age = age;
    // }
    // Short Method to above lines but you must write access modifiers for each 
    function Employee(fName, lName, age) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }
    // showDetails() {
    //     console.log(`First Name is ${this.fname}, Last Name is ${this.lname}, Age is ${this.age}`);
    // }
    Employee.prototype.showDetails = function () {
        console.log("First Name is ".concat(this.fName, ", Last Name is ").concat(this.lName, ", Age is ").concat(this.age));
    };
    return Employee;
}());
var myObj = new Employee("Rahul", "Banarasi", 34);
// public can be accesssed outside of class
// myObj.lname = "Bhai";
// protected can not be accesssed outside of class
// myObj.fname = "Deepak";
// private can not be accesssed outside of class
// myObj.age = 55;
// myObj.showDetails();
// Protected and Private Access Modifiers changed inside class but not outside of class
// myObj.changeFName();
// myObj.showDetails();
// myObj.changeAge()
myObj.fName = "Rohan";
myObj.showDetails();
