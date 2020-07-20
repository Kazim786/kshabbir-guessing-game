const msgEl = document.getElementById('msg')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();
//start recognition and game
recognition.start();

//Capture user speech

const onSpeak = (e) => {
    const msg = e.results[0] [0].transcript;

    // writeMessage(msg)
    // checkNumber(msg)
}

//Generate random number
const getRandomNumber = () => {
    return Math.floor(Math.random() * 100) +1 
}

const randomNum = getRandomNumber()

//Speak Result

recognition.addEventListener('result', onSpeak)

