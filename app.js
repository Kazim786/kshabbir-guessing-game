const msgEl = document.getElementById('msg')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();
//start recognition and game
recognition.start();


//Write what user speaks:
const onSpeak = (e) => {
    const msg = e.results[0] [0].transcript;

    writeMessage(msg)
    checkNumber(msg)
}

function writeMessage(msg){
    msgEl.innerHTML = 
    `<div>You said </div>
    <span class= 'box'>${msg}</span>
    `
}

function checkNumber(msg){
    const num = +msg //adding a plus sign will convert it from a string to a number

    //check if its a valid number:
    if(Number.isNaN(num)){
        msgEl.innerHTML += '<div>That is not a valid Number <div>'
        return;
    } 

    //check in range

    if(num > 100 || num < 1){
        msgEl.innerHTML += '<div>Number must be between 1 and 100 </div>';
        return
    }

    //check number
    if(num === randomNum){
        document.body.innerHTML = `<h2>Congrats! You got it right <br><br>
        It was ${num}</h2>
        <button class = 'play-again' id= 'play-again'>Play Again</button>
        `
    }else if(num > randomNum){
        msgEl.innerHTML += '<div>GO LOWER</div>'
    }else{
        msgEl.innerHTML += '<div>Go HIGHER</div>'
    }
}


//Capture user speech

// const onSpeak = (e) => {
//     const msg = e.results[0] [0].transcript;

//     // writeMessage(msg)
//     // checkNumber(msg)
// }

//Generate random number
const getRandomNumber = () => {
    return Math.floor(Math.random() * 100) +1 
}

const randomNum = getRandomNumber()

//Speak Result

recognition.addEventListener('result', onSpeak)

//End SR Service

recognition.addEventListener('end', () => recognition.start())

document.body.addEventListener('click', () => {
    if(e.target.id === 'play-again'){
        window.location.reload()
    }
})

