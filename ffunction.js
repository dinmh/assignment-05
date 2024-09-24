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

function getDonateValueById(id){
    const donateValue = document.getElementById(id).innerText;
    const recentValue = parseFloat(donateValue);
    return recentValue;
}

function secondPage(){
    window.location.href = './blog.html'
   
}

function secondPage2(){
    window.location.href = './index.html'
}