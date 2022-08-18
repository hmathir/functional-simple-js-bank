function getValueById(elementID){
    const inputFieldElement = document.getElementById(elementID);
    let inputFieldString = inputFieldElement.value;
    const inputFieldAmount = parseFloat(inputFieldString);
    inputFieldElement.value = '';
    return inputFieldAmount;
}

function getPreviousDetails(elementID){
    const previousElement = document.getElementById(elementID);
    const previousString = previousElement.innerText;
    const previousAmount = parseFloat(previousString);
    return previousAmount;
}

function setValue(value,elementID){
    const setValueElement = document.getElementById(elementID);
    setValueElement.innerText = value;
}