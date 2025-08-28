// 🚀 JavaScript Fundamentals Assignment

// ----------------- Part 1: Basics -----------------
// Variable declarations, conditionals, user input handling
function checkAge() {
  let age = document.getElementById("ageInput").value;

  if (age >= 18) {
    document.getElementById("ageResult").innerText = "✅ You are an adult.";
  } else if (age > 0) {
    document.getElementById("ageResult").innerText = "👶 You are a minor.";
  } else {
    document.getElementById("ageResult").innerText = "⚠️ Please enter a valid age.";
  }
}

// ----------------- Part 2: Functions -----------------
// Function 1: Greeting
function showGreeting(name) {
  let message = "Hello, " + name + "! Welcome to JavaScript.";
  document.getElementById("greetingResult").innerText = message;
}

// Function 2: Calculate Total
function calculateTotal(price, quantity) {
  let total = price * quantity;
  document.getElementById("totalResult").innerText = "Total is: $" + total;
}

// ----------------- Part 3: Loops -----------------
// Loop Example 1: Show numbers 1 to 5
function showNumbers() {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear old content
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.innerText = i;
    list.appendChild(li);
  }
}

// Loop Example 2: Countdown
function countdown(start) {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear old content
  let i = start;
  while (i >= 0) {
    let li = document.createElement("li");
    li.innerText = i;
    list.appendChild(li);
    i--;
  }
}

// ----------------- Part 4: DOM Manipulation -----------------
// 1. Toggle text visibility
document.getElementById("toggleBtn").addEventListener("click", function() {
  let text = document.getElementById("toggleText");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
});

// 2. Add new list item dynamically
document.getElementById("addItemBtn").addEventListener("click", function() {
  let list = document.getElementById("dynamicList");
  let li = document.createElement("li");
  li.innerText = "New Item " + (list.children.length + 1);
  list.appendChild(li);
});

// 3. Change background color
document.getElementById("colorBtn").addEventListener("click", function() {
  document.body.style.backgroundColor = 
    "#" + Math.floor(Math.random() * 16777215).toString(16); // random color
});
