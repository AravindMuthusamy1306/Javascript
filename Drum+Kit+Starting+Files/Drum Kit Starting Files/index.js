let buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handleClick);
}
function handleClick() {
    playSound(this.innerHTML);  
}

document.addEventListener("keydown", keyPress);
function keyPress(event){
    let button = playSound(event.key);
    if(button){
        button.classList.add("pressed");

        setTimeout(()=>{
            button.classList.remove("pressed");
        }, 100);
    }
}

function playSound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            return document.querySelector(".w");

        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            return document.querySelector(".a");
            
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            return document.querySelector(".s");

        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            return document.querySelector(".d");

        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            return document.querySelector(".j");

        case "k":
            let kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            return document.querySelector(".k");

        case "l":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            return document.querySelector(".l");
            
        default:
            break;
    }
}