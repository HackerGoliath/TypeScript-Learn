class Employee {
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
    constructor(public fName: string, protected lName: string, private age: number) {
    }

    // showDetails() {
    //     console.log(`First Name is ${this.fname}, Last Name is ${this.lname}, Age is ${this.age}`);
    // }

    showDetails() {
        console.log(`First Name is ${this.fName}, Last Name is ${this.lName}, Age is ${this.age}`);
    }
    // changeFName() {
    //     this.fname = "John";
    // }
    // changeAge() {
    //     this.age = 43;
    // }
}


let myObj = new Employee("Rahul", "Banarasi", 34);
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