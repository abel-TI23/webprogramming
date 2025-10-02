// More Simple DOM Examples

// 1. Creating new elements
const newParagraph = document.createElement("p");
const textNode = document.createTextNode("This text was added with JavaScript!");
newParagraph.appendChild(textNode);

// 2. Adding the new element to the page
document.body.appendChild(newParagraph);

// 3. Changing text content
const heading = document.querySelector("h1");
heading.textContent = "💪 My Simple Workout List";

// 4. Adding event listeners
const addButton = document.getElementById("addBtn");
addButton.addEventListener("mouseenter", function() {
    this.style.backgroundColor = "darkgreen";
});

addButton.addEventListener("mouseleave", function() {
    this.style.backgroundColor = "#4CAF50";
});

// 5. Working with classes
function addRedBorder() {
    const allItems = document.querySelectorAll(".workout-item");
    for (let i = 0; i < allItems.length; i++) {
        allItems[i].style.border = "2px solid red";
    }
}

// 6. Simple form validation
const inputField = document.getElementById("taskInput");
inputField.addEventListener("blur", function() {
    if (this.value.length < 3) {
        this.style.borderColor = "red";
    } else {
        this.style.borderColor = "#ddd";
    }
});