// Simple DOM Manipulation Examples

// 1. Getting elements by ID
const title = document.getElementById("title");
const input = document.getElementById("taskInput");

// 2. Changing element styles using DOM
title.style.color = "green";
title.style.fontSize = "30px";

// 3. Getting elements by tag name
const buttons = document.getElementsByTagName("button");
console.log("Number of buttons:", buttons.length);

// 4. Getting elements by class name
const workoutItems = document.getElementsByClassName("workout-item");
console.log("Number of workout items:", workoutItems.length);

// 5. Using querySelector (gets first match)
const firstButton = document.querySelector("button");
firstButton.style.fontWeight = "bold";

// 6. Using querySelectorAll (gets all matches)
const allButtons = document.querySelectorAll("button");
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].style.borderRadius = "10px";
}