// cohesive

class Employee {
    // Fields(in classes outside called variables)
    fname: string;
    lname: string;
    age: number;

    // Constructor(age is optional parameter here)
    // constructor(fName: string, lName: string, age?: number) {
    constructor(fName: string, lName: string, age: number) {
        this.fname = fName;
        this.lname = lName;
        this.age = age;
    }

    // Methods in classes outside called function
    showDetails() {
        console.log(`First Name is ${this.fname}, Last Name is ${this.lname}, Age is ${this.age}`);
    }
}

// Creating Object or instance
// let myObj = new Employee();
// We can use contructor to get rid of below 3 lines
// myObj.fname = "Deepak"
// myObj.lname = "Bhai"
// myObj.age = 27

let myObj = new Employee("Rahul", "Banarasi", 34);
// let myObj = new Employee("Rahul", "Banarasi");
myObj.showDetails()