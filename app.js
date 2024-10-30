const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 3; 

function checkGuess() {
    const userGuess = parseInt(document.getElementById("userGuess").value);
    const result = document.getElementById("result");

    if (attempts > 0) {
        if (userGuess === randomNumber) {
            result.textContent = "Congratulations! You guessed the correct number.";
            attempts = 0; 
        } else {
            attempts--; 

            if (attempts > 0) {
                const hint = userGuess < randomNumber ? "too low" : "too high";
                result.textContent = `Wrong guess. Your guess is ${hint}. You have ${attempts} attempt(s) left.`;
            } else {
                result.textContent = `Game over! The correct number was ${randomNumber}.`;
            }
        }
    } else {
        result.textContent = "You've used all your attempts. Please refresh to play again.";
    }
}
