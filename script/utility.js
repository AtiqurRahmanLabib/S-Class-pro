function continueGame() {
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}
function handleKeyupPress(event) {
    const playerPressed = event.key;
    const randomAlphabet = document.getElementById('current-alphabet')
    const alphabet = randomAlphabet.innerText;
    const toLowerCase = alphabet.toLocaleLowerCase();
    console.log(toLowerCase, playerPressed)
    if (playerPressed === toLowerCase) {
        const currentScoreElement = document.getElementById('score');
        const scoreValue = currentScoreElement.innerText
        const currentScore = parseInt(scoreValue)
        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;
        const totalScore = document.getElementById('last-score')
        const totalScoreValue = totalScore.innerText
        const currentLastScore = parseInt(totalScoreValue)
        const newLastScore = currentLastScore + 1
        totalScore.innerText = newLastScore
        continueGame()
        removeBackgroundColorById(toLowerCase)
    }
    else {
        const currentLifeElement = document.getElementById('life')
        const lifeValue = currentLifeElement.innerText;
        const currentLife = parseInt(lifeValue)
        const newLife = currentLife - 1;
        currentLifeElement.innerText = newLife;
        if (newLife === 0) {
            const PlayGraund = document.getElementById('play-ground')
            PlayGraund.classList.add('hidden')
            const finalScore = document.getElementById('final-score')
            finalScore.classList.remove('hidden')
        }
    }
}
function getElementById(elementId){
    const element  = document.getElementById(elementId)
    const text = element.innerText
    return text;
}
document.addEventListener('keyup', handleKeyupPress)
function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}
