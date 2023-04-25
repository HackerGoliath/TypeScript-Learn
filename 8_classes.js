// cohesive
var Employee = /** @class */ (function () {
    function Employee() {
    }
    // Methods in classes outside called function
    Employee.prototype.showDetails = function () {
        console.log("First Name is ".concat(this.fname, ", Last Name is ").concat(this.lname, ", Age is ").concat(this.age));
    };
    return Employee;
}());
// Creating Object or instance
var myObj = new Employee();
myObj.fname = "Deepak";
myObj.lname = "Bhai";
myObj.age = 27;
myObj.showDetails();
