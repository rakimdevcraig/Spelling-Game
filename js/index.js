
//Problem: I was calling the function to generate a random word and a random definition
//so I got a different word from defintion so instead I called the function to generate
//a random object and stored that as a variable then I called the word value of that object 
//and i called the definition value of that object



//is there a way to update the score without using innerhtml

var synth = window.speechSynthesis;
let score = 0
document.getElementById('score').innerHTML = `Score: ${score}`
// let scoreText = document.createTextNode(score)
// document.getElementById('score').appendChild(scoreText)

let arrayOfWords = [{ word: 'limousine', definition: 'big car' },
{ word: 'number', definition: 'numerical' },
{ word: 'january', definition: 'first month' },
{ word: 'february', definition: 'second month' },
{ word: 'nicky', definition: 'name' },
{ word: 'newspaper', definition: 'fourth month' },
{ word: 'array', definition: 'list of things' }]

let singleWord = function getWord() {
    return arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)]
}

let keem; // this variable is global so other functions can see it instead of just generateWord

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


function check() {
    let input = document.getElementById('input').value
    if (input === keem.word) {
        console.log('you spelled the word correctly')
        score++
        console.log(`score is ${score}`)
        document.getElementById('score').innerHTML = score
        guessIsCorrect()
        clearInput()
    } else {
        if (score > 0) {
            score--
        }
        console.log(`score is ${score}`)
        console.log('you spelled the word wrong')
        document.getElementById('score').innerHTML = score
        clearInput()
        guessIsWrong()
    }
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
    paragraphToInsert.textContent = `Correct!`
    let buttonToHide = document.getElementById("submit")
    buttonToHide.style.display = "none"
}

function properSpelling() {
    //should I create a p element and then add text content and then add that p to the empty p?
    //or stay the way that I have it
    //make it hidden to start off and if guess is wrong then make it appear and make the button to 
    //submit answer dissappear so users cannot cheat
    let paragraphToInsert = document.getElementById("properSpelling")
    paragraphToInsert.textContent = `the correct spelling is "${keem.word}" please click the "generate a word" button for your next word`
    let buttonToHide = document.getElementById("submit")
    buttonToHide.style.display = "none"
}


