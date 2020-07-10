// when creating a function, it is added to the window scope (Root Scope)
// e.g.

function aa() {
    console.log("hi");
}
window.aa(); // same as: aa();

function bb() {
    var a = "hi again";
}
a(); // Uncaught ReferenceError: a is not defined
// a only exists inside the function

// functions have access to any variable in the root scope
// the root scope doesn't have access to the variables assigned within funtions unless the function has been ran

// Root Scope
var fun = 5;

function funFunction() {
    // Child Scope
    var fun = "Hello";
    console.log(1, fun);
}

function funnerFunction() {
    // Child Scope
    var fun = "Bye";
    console.log(2, fun);
}

function funnestFunction() {
    // Child Scope
    fun = "AHH";
    console.log(3, fun);
}

console.log("window", fun); // window 5

// If we run the functions:
funFunction();
funnerFunction();
funnestFunction();

// window 5
// 1 "Hello"
// 2 "Bye"
// 3 "AHH"

// if we now do 
console.log(fun); // AHH - fun is overwritten each time
// Naming conflict