let transition = document.querySelector("#transition");
let string = transition.textContent;

transition.textContent = "";

const transitionText = () =>{
    for(let i=0; i<string.length; i++){
        setTimeout(() => {
            transition.textContent += string[i];
        }, i*250);
    };
};
transitionText();
let boxes = document.querySelectorAll("button");
let display = document.querySelector(".display");

console.log(boxes);
let array = Array.from(boxes);
array.forEach((btn) => {
    btn.addEventListener("click", ()=>{
        console.log(btn);
    });
});