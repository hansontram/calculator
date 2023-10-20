window.onload = init

let firstNumber, secondNumber

function init (){
    
//     let addButton = document.getElementById("addButton");
//    addButton.onclick = onAddBtnClicked;
    // let subtractButton = document.getElementById("subtractButton");
    // subtractButton.onclick = onSubtractBtnClicked;
//     let divideButton = document.getElementById("divideButton");
//    divideButton.onclick = onDivideBtnClicked;
    let multiplyButton = document.getElementById("multiplyButton");
   multiplyButton.onclick = onMultiplyBtnClicked;

   let answer = document.getElementById("answer")

// Initialize variables to call on later
   firstNumber = document.getElementById("firstNumberField")
   secondNumber = document.getElementById("secondNumberField")
}

let onAddBtnClicked = () => {

    let total = Number(firstNumber.value) + Number(secondNumber.value)
    answer.innerText = total
}
let onSubtractBtnClicked = () => {
    // let firstNumber = document.getElementById("firstNumberField").value
    // let secondNumber = document.getElementById("secondNumberField").value
    let total = Number(firstNumber.value) - Number(secondNumber.value)
    answer.innerText = total
}
let onMultiplyBtnClicked = () => {
    // let firstNumber = document.getElementById("firstNumberField").value
    // let secondNumber = document.getElementById("secondNumberField").value
    let total = Number(firstNumber.value) * Number(secondNumber.value)
    answer.innerText = total
}
let onDivideBtnClicked = () => {
    // let firstNumber = document.getElementById("firstNumberField").value
    // let secondNumber = document.getElementById("secondNumberField").value
    let total = Number(firstNumber.value) / Number(secondNumber.value)
    answer.innerText = total
}