// Interface is a custom type
// let myName = (fname, lname) => {
// To solve type any problem we use inline annotation
// let myName = (fname: string, lname: string) => {
//     console.log(fname, lname);
// }
// myName("Deepak", "Bhai");
// because fname and lname is of type any number is passed
// myName(55, "Bhai");
var myName = function (nameprop) {
    console.log("First Name: ".concat(nameprop.fname, ",Last Name: ").concat(nameprop.lname, ",Age: ").concat(nameprop.age, ",Grade: ").concat(nameprop.grade));
};
myName({
    fname: "Deepak",
    lname: "Bhau",
    age: 26,
    grade: 1,
});
