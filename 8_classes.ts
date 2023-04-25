// cohesive

class Employee {
    // Fields(in classes outside called variables)
    fname: string;
    lname: string;
    age: number;

    // Methods in classes outside called function
    showDetails() {
        console.log(`First Name is ${this.fname}, Last Name is ${this.lname}, Age is ${this.age}`);
    }
}

// Creating Object or instance
let myObj = new Employee();
myObj.fname = "Deepak"
myObj.lname = "Bhai"
myObj.age = 27
myObj.showDetails()