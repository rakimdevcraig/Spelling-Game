let keem; // this variable is global so other functions can see it instead of just generateWord
var synth = window.speechSynthesis;
let score = 0

let arrayOfWords = [{ word: 'limousine', definition: 'big car' },
{ word: 'number', definition: 'numerical' },
{ word: 'january', definition: 'first month' },
{ word: 'february', definition: 'second month' },
{ word: 'nicky', definition: 'name' },
{ word: 'newspaper', definition: 'fourth month' },
{ word: 'array', definition: 'list of things' },
{ word: 'alias', definition: 'Ay-lee-iss' }
]

let singleWord = function getWord() {
    return arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)]
}


function generateWord() {
    keem = singleWord()
    var utterThis = new SpeechSynthesisUtterance(keem.word);
    synth.speak(utterThis);
    console.log('new word generated')
    console.log(`score is ${score}`)
    console.log(`Word is ${keem.word}`)
    console.log(`Definition is ${keem.definition}`)

    //will call a diff word and definition
    // console.log(`word is ${singleWord().word}`)
    // console.log(`definition is ${singleWord().definition}`)
    let buttonToHide = document.getElementById("submit")
    buttonToHide.style.display = "inline"
    let paragraphToUpdate = document.getElementById("properSpelling")
    paragraphToUpdate.textContent = ""
}

function hearWord() {
    var utterThis = new SpeechSynthesisUtterance(keem.word);
    synth.speak(utterThis);
}

function hearDef() {
    var utterThis = new SpeechSynthesisUtterance(keem.definition);
    synth.speak(utterThis);
}

function properSpelling() {
    //should I create a p element and then add text content and then add that p to the empty p?
    //or stay the way that I have it
    //make it hidden to start off and if guess is wrong then make it appear and make the button to 
    //submit answer disappear so users cannot cheat
    let paragraphToInsert = document.getElementById("properSpelling")
    paragraphToInsert.textContent = `the correct spelling is "${keem.word}" please click the "generate a word" button for your next word`
    let buttonToHide = document.getElementById("submit")
    buttonToHide.style.display = "none"
}

function check() {
    let input = document.getElementById('input').value
    if (input === keem.word) {
        score++
        document.getElementById('score').innerHTML = score
        updateScore()
        guessIsCorrect()
        clearInput()
    } else {
        if (score > 0) {
            score--
        }
        updateScore()
        clearInput()
        guessIsWrong()
    }
}

function checkOnEnterKeyPress(event) {
    if (event.keyCode === 13) {
        check()
    }
    //detect if the enter key is pressed
    //run the check function if enter key is pressed
}

function clearInput() {
    document.getElementById('input').value = ""
}

function guessIsWrong() {
    //should I create a p element and then add text content and then add that p to the empty p?
    //or stay the way that I have it
    let paragraphToInsert = document.getElementById("properSpelling")
    paragraphToInsert.textContent = `Incorrect spelling try again`
    let buttonToUnhide = document.getElementById("buttonThree")
    buttonToUnhide.style.display = "inline"
}

function guessIsCorrect() {
    let paragraphToInsert = document.getElementById("properSpelling")
    paragraphToInsert.textContent = `Correct! Please generate a new word.`
    let buttonToHide = document.getElementById("submit")
    buttonToHide.style.display = "none"
    let inputToHide = document.getElementById("input")
    inputToHide.style.display = "none"
}

function updateScore() {
    document.getElementById('score').innerHTML = `Score: ${score}`
    //is there a way to update the score without using innerhtml
    // let scoreText = document.createTextNode(score)
    // document.getElementById('score').appendChild(scoreText)
}

