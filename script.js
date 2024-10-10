
//Random Number
const randomNumber = Math.floor(Math.random() * 20);
console.log(randomNumber)

//Dom
const userGuess = document.querySelector("input.guess")
const checkButton = document.querySelector("button.check")
const highscore = document.querySelector("span.highscore")
const questionMarkNumber = document.querySelector("div.number")

//score
let score = 0

//Checks if checkButton is clicked and runs if statements
checkButton.addEventListener("click", () => {

    //Shows alert if userGuess is not between 0-20
    const userGuessValue = parseInt(userGuess.value)
    if (userGuess > 20 || userGuess < 0 || !Number.isInteger(userGuessValue)) {
        alert("Input needs to be a number between 0 and 20")
        score--
        userGuess.value = ""
        console.log(userGuessValue)
    }

    //if userGuess is correct clears input and shows randomNumber in div.number
    else if (userGuessValue === randomNumber) {
        userGuess.value = "";
        questionMarkNumber.textContent = `${randomNumber}`;
        confetti()

        //if score is smaller than highscore sets highscore to current score
        if (parseInt(highscore.textContent) < score) {
            highscore.textContent = `${score}`
        }

    //If userGuess is not equal to randomNumber increase score clears input and shows guessed number
    } else {
        score++
        const currentScore = document.querySelector("span.score")
        currentScore.textContent = `${score}`
        userGuess.value = "";
        document.querySelector("ul.guesses-list").insertAdjacentHTML("afterbegin", `<li class="current-guesses-list">${userGuessValue}</li>`)
        if (userGuessValue > randomNumber) {
            alert("Too High")
        }   else {
            alert("Too Low")
        }
    }
})


//If again is clicked refresh page and start over
const againBtn = document.querySelector("button.again")
againBtn.addEventListener("click", () => {
    location.reload();
    }
)

