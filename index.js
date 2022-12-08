const checkButton = document.querySelector('.btn')

const result = document.querySelector('.result')


checkButton.addEventListener('click', () => {
    palindromeCheck()
})

function palindromeCheck() {
    const word = document.querySelector('.input-text').value
    const reversedWord = word.split('').reverse().join('')
    if (word.toUpperCase() === reversedWord.toUpperCase()) {
        result.innerHTML = `${word} is palindrome`
        result.classList.add('green')
        result.classList.remove('red')
    } else {
        result.innerHTML = `${word} isn't palindrome`
        result.classList.add('red')
        result.classList.remove('green')
    }
}