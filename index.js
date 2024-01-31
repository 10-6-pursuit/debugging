// Debugging JS

// Error Messages

// SYNTAX ERRORS

// 1.
// let x = 10;
// if (x > 5) {
//     console.log("Hello, World!");
// }

// SyntaxError: Unexpected token '{'

// 2.
const message = 'Hello, World!';
// SyntaxError: Invalid or unexpected token

// 3.
function myFunction() {
  console.log("Hello!");
}

// 4.
function name() {}

// SyntaxError: Function statements require a function name

// 5.
function whatsWrong() {}

// SyntaxError: Unexpected end of input - Missing a closing curly bracket.

// 6.

let a = 6;
a = 5;

// SyntaxError: Identifier 'a' has already been declared

// TYPE ERRORS - when attempting to modify a value that cannot be changed;

// 1.

const b = 9
// b = 5

// TypeError: Assignment to constant variable.

// 2.

const obj = { name: {
    first: "Raz",
    last: "Efron"
}}

obj.name.first // obj.naem returns undefined.

function popFirstAndReturn(arr) {
    return arr.pop()
}

// popFirstAndReturn(); // Am I passing a value/argument to my function?
// TypeError: Cannot read properties of undefined (reading 'pop')

// Cannot read properties of undefined (reading 'first')

// 3.

const arr = [1,2,3]
const object = {};
// arr();
// arr.mep()

// object.push("arr")

// TypeError: arr is not a function

// REFERENCE ERRORS

// 1.

// console.log(myVariable);

function findMax(arr) {
    let max = arr[0];
    for (let num of arr) {
        max = max > num ? max : num
    }

    return max
}

// ReferenceError: myVariable is not defined
// declaring variables in other scopes
// forgetting to pass parameters in the params list of a function
// forgetting to declare a variable altogether

findMax([1,3,2])


// 2.

// console.log(y);
// let y = 5;
// ReferenceError: Cannot access 'y' before initialization

// debugger in vscode

function sumOfAllOddElements(arr) {
    let sum = 0;

    for (let i = 1; i < arr.length -1; i++) {
        if (sum % 2 === 0) {
            sum += i;
        }
    }
    return sum
}

const array = [
  3904, 3929, 1833, 8516, 3399, 3659, 4167, 2177, 1356, 4467, 9948, 7224, 7604,
  5245, 4733, 7314, 8295, 5857, 1190, 5221, 8368, 8352, 8902, 3027, 1494, 7189,
  1468, 3756, 3663, 6750, 8679, 7729, 8647, 6103, 1018, 377, 8518, 5571, 7193,
  3089, 3324, 9112, 3292, 821, 1498, 2723, 2025, 1454, 8402, 4394, 7036, 8958,
  3756, 3215, 3541, 513, 915, 8453, 3883, 4125, 9405, 2157, 959, 268, 2089,
  3294, 1544, 9670, 1170, 7245, 8776, 5301, 1060, 7865, 4202, 9364, 4254, 3014,
  1306, 9212, 46, 6337, 9182, 3685, 3652, 7251, 4591, 1537, 4290, 3425, 7684,
  4875, 6923, 2163, 1376, 8955, 996, 6669, 3093, 9575,
];

console.log(sumOfAllOddElements(array)); // 248563

// debugger in the web
