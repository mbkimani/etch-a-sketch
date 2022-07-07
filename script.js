const container = document.querySelector(".container");
const button = document.querySelector(".input");
const square = document.createElement("div");
const row = document.createElement("div");
square.classList.add(".square");
square.setAttribute(
  "style",
  "width: 100%; height: auto; border: 2px solid black; display: flex; flex: 1"
);
row.setAttribute(
  "style",
  "width: 100%; height: auto; display: flex; flex-direction: column; flex: 1"
);

function createFours(child, row, parent) {
  for (let i = 0; i < globalInput; i++) {
    row.appendChild(child.cloneNode(true));
  }
  for (let i = 0; i < globalInput; i++) {
    parent.appendChild(row.cloneNode(true));
  }
}
const grid = container.querySelectorAll(".square");

grid.forEach((box) =>
  box.addEventListener("click", () => console.log("hovered"))
);

container.addEventListener("mouseover", (e) => {
  if (e.target.classList.value != ".square") return;
  e.target.classList.add("black");
});

button.addEventListener("click", () => {
  container.textContent = "";
  row.textContent = "";

  let input = prompt("How many squares in your board?");
  if (input <= 100) {
    globalInput = input;
    createFours(square, row, container);
  } else {
    alert("Can't be greater than 100");
  }
});
