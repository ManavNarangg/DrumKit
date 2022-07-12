let numOfDrumBtns = document.querySelectorAll(".drum").length;
//DETECTING BUTTON PRESS
for(let i = 0; i < numOfDrumBtns; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick()
    {
        // alert("GoodBye My Nigger, Back To The Lobby");

        let ButtonLetter = this.innerHTML;
        
        makeSound(ButtonLetter);

        buttonAnimation(ButtonLetter);
    });
}
//DETECTING KEYBOARD PRESS
document.addEventListener("keydown", function(event){

    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key)
{
    switch(key)
        {  
            case "w":
               let crash = new Audio("SOUNDS/suiiii-By-Tuna (1).mp3");
               crash.play();
            break;

            case "a":
                let bass = new Audio("SOUNDS/bas-kar-By-Tuna.mp3");
                bass.play();
            break;

            case "s":
                let snare = new Audio("SOUNDS/hog-rider-n-word-By-Tuna.mp3");
                snare.play();
            break;

            case "d":
                let tom1 = new Audio("SOUNDS/ph-intro-original-(getmp3-By-Tuna.mp3");
                tom1.play();
            break;

            case "j":
                let tom2 = new Audio("SOUNDS/sike-By-Tuna.mp3");
                tom2.play();
            break;

            case "k":
                let tom3 = new Audio("SOUNDS/goodbye-my-n-back-to-the-lobby-By-Tuna.mp3");
                tom3.play();
            break;

            case "l":
                let tom4 = new Audio("SOUNDS/fart-By-Tuna.mp3");
                tom4.play();
            break;

            default: console.log(ButtonLetter);
                
        }
}

function buttonAnimation(key)
{
    let ActiveButton = document.querySelector("." + key);

    ActiveButton.classList.add("pressed");

    setTimeout(function(){
        ActiveButton.classList.remove("pressed");
    },100);
}


