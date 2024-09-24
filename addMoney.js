document.getElementById('noakhali')
.addEventListener('click', function(event){
    event.preventDefault();
    const inputNoakhali = getInputValueById('input-noakhali');
    
    const addMoney = getTextValueById('add-money');

    const newMoney = addMoney + inputNoakhali;
    document.getElementById('add-money').innerText = newMoney;
    
    
    const donateAmount = getDonateValueById('funded-amount');
    const recentTotalMoney = donateAmount - inputNoakhali;
    document.getElementById('funded-amount').innerText = recentTotalMoney;
    
})



// feni

document.getElementById('feni')
.addEventListener('click', function(event){
    event.preventDefault();
    const inputNoakhali = getInputValueById('input-feni');
    
    const addMoney = getTextValueById('add-money-feni');
    

    const newMoney = addMoney + inputNoakhali;

    document.getElementById('add-money-feni').innerText = newMoney;
    
    
    const donateAmount = getDonateValueById('funded-amount');
    const recentTotalMoney = donateAmount - inputNoakhali;
    document.getElementById('funded-amount').innerText = recentTotalMoney;
    
})



// quota
document.getElementById('quota')
.addEventListener('click', function(event){
    event.preventDefault();
    const inputNoakhali = getInputValueById('input-quota');
    
    const addMoney = getTextValueById('add-money-quota');
    

    const newMoney = addMoney + inputNoakhali;

    document.getElementById('add-money-quota').innerText = newMoney;
    
    
    const donateAmount = getDonateValueById('funded-amount');
    const recentTotalMoney = donateAmount - inputNoakhali;
    document.getElementById('funded-amount').innerText = recentTotalMoney;
    
})

// Yourth contributing

document.getElementById('contribute')
.addEventListener('click', function(event){
    event.preventDefault();
    const inputNoakhali = getInputValueById('input-contribute'); 
    const addMoney = getTextValueById('add-money-contribute');
    const newMoney = addMoney + inputNoakhali;
    document.getElementById('add-money-contribute').innerText = newMoney;
    const donateAmount = getDonateValueById('funded-amount');
    const recentTotalMoney = donateAmount - inputNoakhali;
    document.getElementById('funded-amount').innerText = recentTotalMoney;
    
})

// soliderity Section

document.getElementById('soliderity')
.addEventListener('click', function(event){
    event.preventDefault();
    const inputNoakhali = getInputValueById('input-soliderity'); 
    const addMoney = getTextValueById('add-money-soliderity');
   
    const newMoney = addMoney + inputNoakhali;
    document.getElementById('add-money-soliderity').innerText = newMoney;
    const donateAmount = getDonateValueById('funded-amount');
    const recentTotalMoney = donateAmount - inputNoakhali;
    document.getElementById('funded-amount').innerText = recentTotalMoney;
    
})




