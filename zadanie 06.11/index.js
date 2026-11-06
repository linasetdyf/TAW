
const heading = document.querySelectoruery("#in-progress h2");
heading.textContent = "W trakcie (1)";

const firstCard = document.querySelector(".priority-high");

if (firstCard) {firstCard.style.border = "2px solid red";}

const highPriorityCards = document.querySelectorAll(".priority-high");

highPriorityCards.forEach(card => {
console.log(card.getAttribute(data-id));
});

const urgentCount = document.querySelector("#urgent-count").textContent = urgentCount;

const todoColumn = document.querySelector("#todo");

const todoCards = todoColumn.querySelectorAll(".card");
console.log("Liczba w TODO", todoCards.length);