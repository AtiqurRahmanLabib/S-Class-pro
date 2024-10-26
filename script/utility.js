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
        continueGame()
        removeBackgroundColorById(toLowerCase)
    }
    else {
        const currentLifeElement = document.getElementById('life')
        const lifeValue = currentLifeElement.innerText;
        const currentLife = parseInt(lifeValue)
        const newLife = currentLife - 1;
        currentLifeElement.innerText = newLife;
    }
}
document.addEventListener('keyup', handleKeyupPress)
function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}
