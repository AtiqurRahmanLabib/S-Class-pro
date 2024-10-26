function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
function setElementValueById(elementId, value) {
    const element = document.getElementById(elementId)
    element.innerText = value
}
function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}
function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}
function playAgain() {
    hideElementById('final-score');
    showElementById('play-ground');
    setElementValueById('life', 5)
    setElementValueById('score', 0)
    setElementValueById('last-score', 0)
    const alphabet = getElementById('current-alphabet')
    removeBackgroundColorById(alphabet)
    continueGame()
}
