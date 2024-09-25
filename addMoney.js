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
    
    // if (isNaN(inputNoakhali) &&  inputNoakhali<= 0 &&  inputNoakhali>recentTotalMoney && !document.getElementById('inputNoakhali').value){
    //     aleart ('Please input valid number');
    //     return;
    // }
        
    const newMoney = addMoney + inputNoakhali;
    document.getElementById('add-money-soliderity').innerText = newMoney;

    const donateAmount = getDonateValueById('funded-amount');
    const recentTotalMoney = donateAmount - inputNoakhali;
    document.getElementById('funded-amount').innerText = recentTotalMoney;

})

// show form
document.getElementById('donation-show')
.addEventListener('click', function(event){
    event.preventDefault();
    showFormById('donationAdded');
    document.getElementById('donation-show').classList.add('bg-[#B4F461]');
    document.getElementById('history-show').classList.remove('bg-[#B4F461]');

})

document.getElementById('history-show')
.addEventListener('click', function(event){
    event.preventDefault();
    showFormById('historyAdded');
    document.getElementById('history-show').classList.add('bg-[#B4F461]');
    document.getElementById('donation-show').classList.remove('bg-[#B4F461]');
    
})



