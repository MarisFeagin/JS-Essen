let count = 0; // init count to 0

function increaseCount() {
  count++; //increment count by 1
  displayCount(); //display count
  checkCountValue(); // Check count value and display messages
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // display count in the html
}

function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congrats!");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}

function resetCount() {
    count = 0;
    displayCount(); //display count
    alert("Your Instagram Follower Count has been reset.");
}