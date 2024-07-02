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
let againTransition = document.querySelector("h1");
// againTransition.addEventListener("click", transitionText());