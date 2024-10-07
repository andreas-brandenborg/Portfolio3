// When clicking the Check! button check if what the user wrote in the input matches the number they have to guess
// Random Number

//Random Number
const randomNumber = Math.floor(Math.random() * 20);
console.log(randomNumber)

//Global scope variables
const userGuess = document.querySelector("input.guess")
const checkButton = document.querySelector("button.check")
const highscore = document.querySelector("span.highscore")
const questionMarkNumber = document.querySelector("div.number")
let score = 0

//Checks if checkButton is clicked and runs if statements
checkButton.addEventListener("click", () => {
    //Shows alert if userGuess is not between 0-20
    const userGuessValue = parseInt(userGuess.value)
    if (userGuessValue > 20 || userGuessValue < 0) {
        alert("Number needs to be between 0-20")
        score--
        userGuess.value = ""
    }
   else if (userGuessValue !== Number) {
        alert("Needs to be a number")
    }
    //if userGuess is correct clears input and shows randomNumber in div.number
    else if (userGuessValue === randomNumber) {
        userGuess.value = "";
        questionMarkNumber.textContent = `${randomNumber}`;

        //if score is smaller than highscore sets highscore to current score
        if (parseInt(highscore.textContent) < score) {
            highscore.textContent = `${score}`
        }
    //If userGuess is not equal to randomNumber increase score and clears input

    } else {
        score++
        const currentScore = document.querySelector("span.score")
        currentScore.textContent = `${score}`
        userGuess.value = "";

    }
})

//If again is clicked refresh page
const againBtn = document.querySelector("button.again")
againBtn.addEventListener("click", () => {
    location.reload();
    }
)



// If the user writes a number that is not between 1 - 20, then an error message should be shown to the user. Or if the user writes something that is not a number

// Create a way to show what numbers have been guessed so far. This is like a history of guesses

// Optional - Add confetti when the correct number is guessed

// Optional - Play diferent sounds when the correct or wrong number is guessed

// Add a feature you think could be fun!