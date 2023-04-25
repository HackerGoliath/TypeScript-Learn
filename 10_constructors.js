// cohesive
var Employee = /** @class */ (function () {
    // Constructor(age is optional parameter here)
    // constructor(fName: string, lName: string, age?: number) {
    function Employee(fName, lName, age) {
        this.fname = fName;
        this.lname = lName;
        this.age = age;
    }
    // Methods in classes outside called function
    Employee.prototype.showDetails = function () {
        console.log("First Name is ".concat(this.fname, ", Last Name is ").concat(this.lname, ", Age is ").concat(this.age));
    };
    return Employee;
}());
// Creating Object or instance
// let myObj = new Employee();
// We can use contructor to get rid of below 3 lines
// myObj.fname = "Deepak"
// myObj.lname = "Bhai"
// myObj.age = 27
var myObj = new Employee("Rahul", "Banarasi", 34);
// let myObj = new Employee("Rahul", "Banarasi");
myObj.showDetails();
