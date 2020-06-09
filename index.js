for (let i = 0; i < document.querySelectorAll("button.drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", handleClick)
}

function handleClick(){
    let buttonInnerHtml = this.innerHTML;
    play(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
}

document.addEventListener("keydown", function(e){
    play(e.key);
    buttonAnimation(e.key);
});

    function play(key) {
        switch (key) {
            case "w":
                let tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                let tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                let tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                let tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                let snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                let crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "l":
                let kickBass = new Audio("sounds/kick-bass.mp3");
                kickBass.play();
                break;            
            default:
                console.log(key)
                break;
        }
    }

    function buttonAnimation(key) {
        clickedButton = document.querySelector("." + key);
        clickedButton.classList.add("pressed");
        setTimeout(() => {
           clickedButton.classList.remove("pressed") 
        }, 100);
    }