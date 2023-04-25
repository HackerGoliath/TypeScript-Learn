function func1() {
    // for (let i = 0; i < 5; i++) {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    // throws error for let i
    console.log("Value of i outside for loop: " + i);
}
func1();
