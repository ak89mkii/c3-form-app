// Cached Element References:

const oldFileName = document.getElementById("oldName")
const newFileName = document.getElementById("newName")
const oldFileNameButton = document.getElementById("oldButton")
const convertFileName = document.getElementById("newButton")
const oldFileCount = document.getElementById("characterCountOld")
const newFileCount = document.getElementById("characterCountNew")
const buttonIcon = document.getElementById("icon")
const messageBoxMsg = document.getElementById("messageBox")
const messageBoxMsg2 = document.getElementById("messageBox2")

// // TESTING!
// const testInput = document.getElementById("goku");
// const testOutput = document.getElementById("vegeta");


// Event Listeners:

// EL-01: Counts number of characters in first input field.
oldFileName.addEventListener('input',  function(e) {
    countCharacters(e);
    newName(e);   
}) 

// EL-02: Copy button click.
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
    // For "displayMessage" function.
    let saveAdd = 0
    console.log(oldCountArr)
    for (let i = 0; i < oldCountArr.length; i++) {
        if (oldCountArr[i] === " ") {
            blankAdd += 3
            saveAdd += 2
        } else {
            oldCount += 1
        }
        oldFinalCount = blankAdd + oldCount
    }
    // oldFileCount.textContent = oldFinalCount + " CHAR";
    console.log(saveAdd)
    displayMessage()
    displayMessage2()
}

// Function-02: Convert Blanks to Underscores and Count
function newName(e) {
    let oldString =  e.target.value;
    let newString =  "";
    let newCountArr = oldString.split("");
    let newCount = 0
    console.log(newCountArr)
    for (let i = 0; i < newCountArr.length; i++) {
        if (newCountArr[i] === " ") {
            newCountArr.splice(i,1,"_")
        }
        newCount += 1
    }
    console.log(newCountArr)
    newString = newCountArr.toString();
    // Removes the ",".
    newFinalString = newString.split(",").join('')
    newFileName.textContent = newFinalString
    newFileCount.textContent = newCount + " CHAR";
}

// Function-03: Copy to Clipboard
function copyFunction() {
    console.log("New File Name: " + newFileName.textContent)
    let copyConvert = newFileName.textContent
    navigator.clipboard.writeText(copyConvert);
    buttonIcon.classList.remove("bi-clipboard-fill");
    buttonIcon.classList.add("bi-clipboard-check-fill");
}

function displayMessage() {
    messageBoxMsg.textContent = ' When finished, press the "Copy to Clipboard" button underneath the modified script!';
}

function displayMessage2() {
    messageBoxMsg2.textContent = " POWERSHELL SCRIPT BELOW...DON'T FORGET TO COPY IT!"
}

// // TESTING!
// function testCount(e) {
//     testOutput.textContent =  e.target.value;
//     // oldFileCount.textContent = e.target.value;
// }

