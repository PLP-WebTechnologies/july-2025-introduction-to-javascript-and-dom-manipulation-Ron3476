// ==========================
// Part 1: Variables & Conditionals
// ==========================
let userName = "Ronald";
let userAge = 20;

if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// ==========================
// Part 2: Custom Functions
// ==========================

// Function 1: Greet the user
function greetUser(name) {
  return "Hello, " + name + "! Welcome!";
}

// Function 2: Add two numbers
function addNumbers(a, b) {
  return a + b;
}

console.log(greetUser(userName));
console.log("5 + 10 =", addNumbers(5, 10));

// ==========================
// Part 3: Loops
// ==========================

// Example 1: For loop
for (let i = 1; i <= 5; i++) {
  console.log("For Loop Count:", i);
}

// Example 2: While loop
let count = 1;
while (count <= 3) {
  console.log("While Loop Count:", count);
  count++;
}

// ==========================
// Part 4: DOM Interactions
// ==========================

// 1. Change text when button is clicked
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("message").textContent = "The text has been changed!";
});

// 2. Add new list item
document.getElementById("addItemBtn").addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (document.getElementById("list").children.length + 1);
  document.getElementById("list").appendChild(newItem);
});

// 3. Change title color dynamically
document.getElementById("title").style.color = "darkblue";
