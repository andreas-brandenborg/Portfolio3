// When clicking the Check! button check if what the user wrote in the input matches the number they have to guess
// Random Number

const randomNumber = Math.floor(Math.random() * 20);
console.log(randomNumber)

// 2. få fat i Input
const userGuess = document.querySelector("input.guess")

// 3. Få fat i check-knappen
const checkButton = document.querySelector("button.check")

score = 1

// 4. lyt efter knappen
checkButton.addEventListener("click", () => {
        console.log(userGuess.value)
    if (parseInt(userGuess.value) === randomNumber) {
        console.log(score)
    } else {
        score++
        userGuess.value = "";
    }
})


// If it is correct and smaller than Highscore set the new score as the highscore and clear the input. Also show the correct number in the ?

// If the Again button is clicked clear the score and the highscore and start from scratch

// If the user writes a number that is not between 1 - 20, then an error message should be shown to the user. Or if the user writes something that is not a number

// Create a way to show what numbers have been guessed so far. This is like a history of guesses

// Optional - Add confetti when the correct number is guessed

// Optional - Play diferent sounds when the correct or wrong number is guessed

// Add a feature you think could be fun!