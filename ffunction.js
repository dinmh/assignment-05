function getInputValueById(id){
    
    const inputValue = document.getElementById(id).value;
    
    const inputDonate = parseFloat(inputValue);
   
    return inputDonate;
}

function getTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textDonate = parseFloat(textValue);
    return textDonate;
}