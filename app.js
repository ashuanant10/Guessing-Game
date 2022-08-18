const section1 = document.getElementById("forms");
const output = document.querySelector(".output");
const attempt = document.querySelector(".attempt");
let attempts = 1;

//Variables of 1st form
const userInput1 = document.getElementById("userInput1");
const button1 = document.getElementById("button1");
const input1 = document.getElementById("input1");
const label1 = document.getElementById("label1");
//Variables of 2nd form
const userInput2 = document.getElementById("userInput2");
const button2 = document.getElementById("button2");
const input2 = document.getElementById("input2");
const label2 = document.getElementById("label2");
//Reset Button
const button3 = document.getElementById("button3");
//applying vanish class on userInput2
userInput2.classList.add("vanish");
//EvenetListeners
button1.addEventListener("click", fun1);
button2.addEventListener("click", fun2);
button3.addEventListener("click", reset);
let enter;
//functions
function fun1(e) {
    e.preventDefault();
    const a = input1.value;
    if (parseInt(a)) {
        p.innerHTML = `Guess a number between <span class="spanP">0-${a}</span>`;
        const randVal = genRandom(a);
        enter = randVal;
        userInput1.classList.add("vanish");
        userInput2.classList.remove("vanish");
    } else {
        label1.innerHTML = `<span class="spanlabel"> NUMBER</span>`;
    }
}

function fun2(e) {
    e.preventDefault();
    const b = input2.value;
    if (parseInt(b) || b == "Quit" || parseInt(b) == 0) {
        check(b);
        label2.innerHTML = `Enter your guess`;
    } else {
        label2.innerHTML = `Enter <span class="spanlabel"> NUMBERS</span>`;
        output.innerHTML = "";
    }
    input2.value = "";
}

function reset() {
    userInput2.classList.add("vanish");
    userInput1.classList.remove("vanish");
    enter = undefined;
    p.innerText = "";
    output.innerText = "";
    attempt.innerText = "";
    input2.value = "";
    input1.value = "";
    label1.innerText = "Enter Range";
    attempts = 1;
}
//Adding text after function  execution
const p = document.createElement("p");
section1.appendChild(p);
//To generate a random Number
const genRandom = (a) => {
    return Math.floor(Math.random() * a);
};
const check = (b) => {
    if (b == "Quit") {
        output.innerHTML = `The number was: <span class="spanoutput"> ${enter} </span>`;
        attempt.innerHTML = `It took #${attempts} attempts`;
        setTimeout(reset, 1500);
    } else if (parseInt(b) === parseInt(enter)) {
        output.innerHTML = "Good guess";
        attempt.innerHTML = `It took #${attempts} attempts`;
        setTimeout(reset, 1500);
    } else {
        attempts++;
        if (parseInt(b) > parseInt(enter)) {
            output.innerHTML = `Oops try again(<span class="hint">Hint</span>:Try guessing a smaller number)`;
        } else
            output.innerHTML = `Oops try again(<span class="hint">Hint</span>:Try guessing a larger number)`;
    }
};