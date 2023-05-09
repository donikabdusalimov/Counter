const counter = document.getElementById("counter");
const plusBtn = document.getElementById("plus-btn");
const minusBtn = document.getElementById("minus-btn");
const clearBtn = document.getElementById("clear-btn");
const randomBtn = document.getElementById("random-btn");

function increment() {
    let count = parseInt(counter.innerText);
    count++;
    counter.innerText = count;
}

function decrement() {
    let count = parseInt(counter.innerText);
    count--;
    counter.innerText = count;
}

function clear() {
    counter.innerText = 0;
}

function randomNum() {
    let num = Math.floor(Math.random() * 200) - 100; // Рандомное число от -100 до 100
    counter.innerText = num;
}

plusBtn.addEventListener("click", increment);
minusBtn.addEventListener("click", decrement);
clearBtn.addEventListener("click", clear);
randomBtn.addEventListener("click", randomNum);