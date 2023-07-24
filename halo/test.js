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
oldFileName.addEventListener('input',  function(e) {
    countCharacters(e);
    newName(e);   
}) 

// oldFileNameButton.addEventListener('click', function() {
//     convertFileName();
// })

// newFileName.addEventListener('input', function() {
//     newName();
// })

// newFileNameButton.addEventListener('click', function() {
//     convertFileName();
// })

// // TESTING!
// testInput.addEventListener('input', testCount) 


// Functions:

// Function-01:
function countCharacters(e) {
    let oldString =  e.target.value;
    let oldCountArr = oldString.split("");
    let blankAdd = 0
    let oldCount = 0
    let oldFinalCount = 0
    console.log(oldCountArr)
    for (let i = 0; i < oldCountArr.length; i++) {
        if (oldCountArr[i] === " ") {
            blankAdd += 3
        } else {
            oldCount += 1
        }
        oldFinalCount = blankAdd + oldCount
    }

    oldFileCount.textContent = "COUNT:" + oldFinalCount;
}

// Function-02:
function newName(e) {
    newFileName.textContent = e.target.value;
}

// // TESTING!
// function testCount(e) {
//     testOutput.textContent =  e.target.value;
//     // oldFileCount.textContent = e.target.value;
// }

