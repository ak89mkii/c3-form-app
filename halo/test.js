// Cached Element References:

const oldFileName = document.getElementById("oldName")
const newFileName = document.getElementById("newName")
const oldFileNameButton = document.getElementById("oldButton")
const newFileNameButton = document.getElementById("newButton")
const oldFileCount = document.getElementById("characterCountOld")

// // TESTING!
// const testInput = document.getElementById("goku");
// const testOutput = document.getElementById("vegeta");


// Event Listeners:

// EL-01: Counts number of characters in first input field.
oldFileName.addEventListener('input', countCharacters);

// oldFileNameButton.addEventListener('click', function() {
//     convertFileName();
// })

// newFileName.addEventListener('input', function() {
//     countCharacters();
// })

// newFileNameButton.addEventListener('click', function() {
//     convertFileName();
// })

// // TESTING!
// testInput.addEventListener('input', testCount) 


// Functions:

// Function-01:
function countCharacters(e) {
    oldFileCount.textContent = "COUNT:" + e.target.value.length;
}

// // TESTING!
// function testCount(e) {
//     testOutput.textContent =  e.target.value;
//     // oldFileCount.textContent = e.target.value;
// }

