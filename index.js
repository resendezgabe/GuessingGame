// Generate a random integer between 1 and 100 (inclusive)
let randomNumber = Math.floor(Math.random() * 100) + 1;
// Set the initial number of attempts to 5
let numAttempts = 5;

// Add an event listener to the "submit" button that will execute the function when clicked
document.querySelector("#submit").addEventListener("click", function() {
  // Get the user's guess from the input field and convert it to an integer
  let guess = parseInt(document.querySelector("#guess").value);
  // If the user did not enter a number, show an alert message
  if (isNaN(guess)) {
    alert("Please enter a number.");
    // If the user's guess is outside the range of 1 to 100, show an alert message
  } else if (guess < 1 || guess > 100) {
    alert("Please enter a number between 1 and 100.");
    // If the user's guess is correct, show a congratulations message
  } else if (guess === randomNumber) {
    alert("Congratulations, you guessed the number!");
    // If the user's guess is incorrect, decrement the number of attempts remaining and provide a hint
  } else {
    numAttempts--;
    // If the user has no attempts remaining, show the correct number and end the game
    if (numAttempts === 0) {
      alert("Sorry, you have run out of attempts. The number was " + randomNumber + ".");
      // executed if the user has not run out of attempts and provides hints to the user to help them guess the number
    } else {
      let hint = guess < randomNumber ? "higher" : "lower";
      if (Math.abs(randomNumber - guess) <= 5) {
        hint = "very close, try guessing " + hint + ".";
      } else if (Math.abs(randomNumber - guess) <= 10){
        hint = "close. try guessing" + hint + ".";
        } else {
        hint = "try guessing " + hint + ".";
      }
      // updates the hint text content with the newly created hint
      document.querySelector("#hint-text").textContent = hint + ".";
      // updates the number of attempts remaining text content
      document.querySelector("#attempts").textContent = "You have " + numAttempts + " attempts remaining.";
    }
  }
});

// adds an event listener to the reset button which triggers the anonymous function when clicked
document.querySelector("#reset").addEventListener("click", function() {
  // generates a new random number and resets the number of attempts to 5
  randomNumber = Math.floor(Math.random() * 100) + 1;
  numAttempts = 5;
  // clears the hint text and number of attempts text content
  document.querySelector("#hint-text").textContent = "";
  document.querySelector("#attempts").textContent = "";
  // clears the input element with id "guess"
  document.querySelector("#guess").value = "";
});

// adds an event listener to the hint button which triggers the anonymous function when clicked
document.querySelector("#hint").addEventListener("click", function() {
  // creates an array with the "randomNumber" and 2 other random numbers between 1 and 100
  let numbers = [randomNumber];
  while (numbers.length < 3) {
    let newNumber = Math.floor(Math.random() * 100)
    if (!numbers.includes(newNumber)) {
        numbers.push(newNumber);
    }
  }
  numbers.sort(function(a, b){return 0.5 - Math.random()});
  let hint = "The number is one of:  " + numbers.join(", " );
  document.querySelector("#hint-text").textContent = hint + ".";
});