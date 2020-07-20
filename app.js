const msgEl = document.getElementById('msg')



const getRandomNumber = () => {
    return Math.floor(Math.random() * 100) +1 
}

const randomNum = getRandomNumber()

console.log('Random Number:', randomNum)