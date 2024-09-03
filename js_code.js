// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let userName = prompt("Enter your name: ");
let age = prompt("Enter your age: ");
alert("Hello, " + userName + "!");

if (age < 18) {
    alert("You are a minor.");
} else if (age >= 18 && age <= 65) {
    alert("You are an adult.");
} else {
    alert("You are a senior.");
}

for (let i = 0; i < 5; i++) {
    console.log("Number: " + i);
}

let i = 0;
while (i < 5) {
    console.log("Iteration number: " + i);
    i++;
}

let i = 0;
do {
    console.log("Iteration number: " + i);
    i++;
} while (i < 5);

const person = {fname: "John", lname: "Doe", age: 25};

for (let key in person) {
    console.log(key + ": " + person[key]);
}

const numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
    console.log(num);
}

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validation Example</title>
    <script>
        function validateForm() {
            let name = document.forms["myForm"]["name"].value;
            if (name == "") {
                alert("Name must be filled out");
                return false; // Prevents the form from being submitted
            }
        }
    </script>
</head>
<body>
    <h2>Simple Form with Validation</h2>
    <form name="myForm" onsubmit="return validateForm()">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name"><br><br>

        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email"><br><br>

        <input type="submit" value="Submit">
    </form>
</body>
</html>


<button id="myButton">Click Me!</button>
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button was clicked!");
});


<div id="outerDiv" style="padding: 50px; background-color: lightcoral;">
    Outer Div
    <div id="innerDiv" style="padding: 50px; background-color: lightseagreen;">
        Inner Div
    </div>
</div>

document.getElementById("outerDiv").addEventListener("click", function() {
    alert("Outer div clicked!");
}, false);

document.getElementById("innerDiv").addEventListener("click", function() {
    alert("Inner div clicked!");
}, false);


class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    // Method to display car details
    displayDetails() {
        console.log(`Car Make: ${this.make}, Model: ${this.model}`);
    }
}

// Creating an instance of the Car class
const myCar = new Car("Toyota", "Corolla");

// Using the displayDetails method
myCar.displayDetails();  // Output: Car Make: Toyota, Model: Corolla

