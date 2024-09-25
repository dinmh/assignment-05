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

function handleAmountById(inputId,addMoneyId){
    const inputNoakhali = getInputValueById(inputId); 
    const addMoney = getTextValueById(addMoneyId);
    const newMoney = addMoney + inputNoakhali;
    document.getElementById(addMoneyId).innerText = newMoney;
    const donateAmount = getDonateValueById('funded-amount');
    const recentTotalMoney = donateAmount - inputNoakhali;
    document.getElementById('funded-amount').innerText = recentTotalMoney;
    
    if (isNaN(inputNoakhali) || inputNoakhali <=0 ){
        alert('Enter valid Amount');
        return;
    }

    else{
        alert('Successfully added money');
        return;
    }
    
}

function secondPage(){
    window.location.href = './blog.html'
   
}

function secondPage2(){
    window.location.href = './index.html'
}

function showFormById(id){
    document.getElementById('donationAdded').classList.add('hidden');
    document.getElementById('historyAdded').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');

}