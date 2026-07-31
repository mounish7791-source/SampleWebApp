const countElement = document.getElementById("count");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0;

incrementBtn.addEventListener("click", () => {
    count++;
    countElement.textContent = count;
});

resetBtn.addEventListener("click", () => {
    count = 0;
    countElement.textContent = count;
});