let currentResult = 0;

let parag = document.getElementById("currentResult");
let buttons = Array.from(document.getElementsByClassName("button"));
buttons.map ( button => {
    button.addEventListener('click', (e) => {
        console.log('clicked');
        console.log(e);
        console.log(e.target);
    })
})

console.log(buttons)