/*
Type Assertion:
Type Assertion has two forms.
One is the angle bracket syntax.
The other is the as-syntax.
Does not change data type at run time or in js file
*/
// Type of myName is String
// let myName = "Deepak"
// You can get intellicence of string type
// myName.indexOf("e")
// Type of myName is any. in all instances
// let myName;
// myName = "Deepak"
//Now You can not get intellicence of string type because data type is any
// console.log(myName.indexOf("e"));
// These type of problem can be solved by assertion type
// which tells the compiler which type of variable is used
// Assertion type:
var myName;
myName = "Deepak";
// Now you can get intellicence of string type
// 1st method: angular bracket
// console.log((<string>myName).length);
// 2nd method as-syntax
console.log(myName.length);
