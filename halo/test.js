// Cached Element References:

const oldFileName = document.getElementById("oldName")
const newFileName = document.getElementById("newName")
const oldFileNameButton = document.getElementById("oldButton")
const convertFileName = document.getElementById("newButton")
const oldFileCount = document.getElementById("characterCountOld")
const newFileCount = document.getElementById("characterCountNew")

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

convertFileName.addEventListener('click', function() {
    copyFunction();
})

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

    oldFileCount.textContent = oldFinalCount + " CHAR" ;
}

// Function-02: Convert Blanks to Underscores and Count
function newName(e) {
    let oldString =  e.target.value;
    let newString =  "";
    let newCountArr = oldString.split("");
    // let blankAdd = 0
    let newCount = 0
    // let oldFinalCount = 0
    console.log(newCountArr)
    for (let i = 0; i < newCountArr.length; i++) {
        if (newCountArr[i] === " ") {
            newCountArr.splice(i,1,"_")
        }
        newCount += 1
        // newString = newCountArr.toString();
    }
    console.log(newCountArr)

    newString = newCountArr.toString();
    newFinalString = newString.split(",").join('')
    newFileName.textContent = newFinalString
    newFileCount.textContent = newCount + " CHAR";
}

// Function-03: Copy to Clipboard
function copyFunction() {
    console.log(newFileName)
    let copyConvert = newFileName.textContent
    // copyConvert.writeText();
    navigator.clipboard.writeText(copyConvert);
}

// // TESTING!
// function testCount(e) {
//     testOutput.textContent =  e.target.value;
//     // oldFileCount.textContent = e.target.value;
// }

