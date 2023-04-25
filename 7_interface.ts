// Interface is a custom type
// let myName = (fname, lname) => {
// To solve type any problem we use inline annotation
// let myName = (fname: string, lname: string) => {
//     console.log(fname, lname);
// }
// myName("Deepak", "Bhai");
// because fname and lname is of type any number is passed
// myName(55, "Bhai");

// but when inline annotation is used we can pass only string type
// myName("Deepak", "Babu")


// Better way to write above code but problem of data type exists
// for multiple parameters we can write above function as
// let myName = (nameprop) => {
//     console.log(nameprop.fname, nameprop.lname, nameprop.age, nameprop.grade);
// }

// Above code can be more simplified as but problem of data type exists
// let myName = ({ fname, lname, age, grade }) => {
//     console.log(`First Name: ${fname},Last Name: ${lname},Age: ${age},Grade: ${grade}`);
// }

// myName({
// fname: "Deepak",
//     fname: 55,
//     lname: "Bhau",
//     age: 26,
//     grade: 1,
// })

// To solve type problem but again code look messy
// let myName = (nameprop: { fname: string, lname: string, age: number, grade: number }) => {
//     console.log(`First Name: ${nameprop.fname},Last Name: ${nameprop.lname},Age: ${nameprop.age},Grade: ${nameprop.grade}`);
// }

// myName({
//     fname: "Deepak",
//     lname: "Bhau",
//     age: 26,
//     grade: 1,
// })


// To solve messy code problem and maintain type we use interface(First letter must be capital)
interface NameProp {
    fname: string,
    lname: string,
    age: number,
    grade: number,
}

let myName = (nameprop: NameProp) => {
    console.log(`First Name: ${nameprop.fname},Last Name: ${nameprop.lname},Age: ${nameprop.age},Grade: ${nameprop.grade}`);
}
myName({
    fname: "Deepak",
    lname: "Bhau",
    age: 26,
    grade: 1,
})