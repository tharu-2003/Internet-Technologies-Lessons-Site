console.log("ContentModifications is loaded ...");

// 1. textContent - Get or set the texual content of an elemnt
const heading = document.getElementById("heading");
console.log(heading);
console.log(heading.textContent);
heading.textContent = "Hello World !";

// 2. innerHTML - Get or sets the HTML inside of an element
// const card = document.querySelector(".card");
// console.log(card.innerHTML);
// card.innerHTML = "<h2>My Card</h2><p>This is a card</p>";

// 3. innerText - Get or sets the text content of an element
// console.log(card.innerText);
// card.innerText = "Just the Text";

const input = document.getElementById("input");
console.log(input);
input.value = "Tharusha";
