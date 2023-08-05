
var buttons=document.querySelectorAll(".drum");
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function (){
        var buttonInnerHtml=this.innerHTML;
        playSound(buttonInnerHtml);
        buttonPressed(buttonInnerHtml);
       
    });
}
document.addEventListener("keydown",function (event){
    var buttonClicked=event.key;
    playSound(buttonClicked);
    buttonPressed(buttonClicked);
});

function playSound(key){
    switch(key){
        case "w":
                var sound=new Audio("./sounds/tom-1.mp3")
                sound.play();
            break;
        case "a":
                var sound=new Audio("./sounds/tom-2.mp3")
                sound.play();
            break;
        case "s":
                var sound=new Audio("./sounds/tom-3.mp3")
                sound.play();
            break;
        case "d":
                var sound=new Audio("./sounds/tom-4.mp3")
                sound.play();
            break;
        case "j":
                var sound=new Audio("./sounds/snare.mp3")
                sound.play();
            break;
        case "k":
                var sound=new Audio("./sounds/kick-bass.mp3")
                sound.play();
            break;
        case "l":
                var sound=new Audio("./sounds/crash.mp3")
                sound.play();
            break;
        default:
            console.log(key);

    }
}
function buttonPressed(key){
    if(key==="a" ||key==="w" ||key==="s" ||key==="d" ||key==="j" ||key==="k" ||key==="l"){
        var activeButton=document.querySelector("."+key);
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed")
        },100)
    }
}
