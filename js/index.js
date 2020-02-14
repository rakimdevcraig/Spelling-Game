//Problem: I was calling the function to generate a random word and a random definition
//so I got a different word from defintion so instead I called the function to generate
//a random object and stored that as a variable then I called the word value of that object 
//and i called the definition value of that object



//is there a way to update the score without using innerhtml
var synth = window.speechSynthesis;
let score = 0
document.getElementById('score').innerHTML = score
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

let keem = singleWord()

function generateWord() {
    console.log('new word generated')
    console.log(`score is ${score}`)
    console.log(`1 ${keem.word}`)
    console.log(`2 ${keem.definition}`)

    //will call a diff word and definition
    // console.log(`word is ${singleWord().word}`)
    // console.log(`definition is ${singleWord().definition}`)
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
    } else {
        score--
        console.log(`score is ${score}`)
        console.log('you spelled the word wrong')
    }
}



