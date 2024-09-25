document.getElementById('noakhali')
.addEventListener('click', function(event){
    event.preventDefault();

handleAmountById('input-noakhali','add-money-noakhali');
    
const inputNoakhali = getInputValueById('input-noakhali'); 

const div = document.createElement('div');
div.innerHTML = `
    <h2 class="mx-auto font-bold text-lg px-4 text-justify">Donated ${inputNoakhali} tk Donate for Flood at Noakhali, Bangladesh</h2>
    <p class="mx-auto text-justify px-4 mb-4"> Given date is ${new Date().toString()} </p>`
document.getElementById('history-added-area').appendChild(div);

})



// // feni

document.getElementById('feni')
.addEventListener('click', function(event){
    event.preventDefault();

handleAmountById('input-feni','add-money-feni');
    
const inputNoakhali = getInputValueById('input-feni'); 

const div = document.createElement('div');
div.innerHTML = `
    <h2 class="mx-auto font-bold text-lg px-4 text-justify">Donated ${inputNoakhali} tk Donate for Flood Relief in Feni,Bangladesh</h2>
    <p class="mx-auto text-justify px-4 mb-4"> Given date is ${new Date().toString()} </p>`
document.getElementById('history-added-area').appendChild(div);

    
})



// // quota
document.getElementById('quota')
.addEventListener('click', function(event){
    event.preventDefault();
    
 handleAmountById('input-quota','add-money-quota');
    
    const inputNoakhali = getInputValueById('input-quota'); 
    
    const div = document.createElement('div');
    div.innerHTML = `
        <h2 class="mx-auto font-bold text-lg px-4 text-justify">Donated ${inputNoakhali} tk Donate for Aid for Injured in the Quota Movement</h2>
        <p class="mx-auto text-justify px-4 mb-4"> Given date is ${new Date().toString()} </p>`
    document.getElementById('history-added-area').appendChild(div);
    
})

// // Yourth contributing

document.getElementById('contribute')
.addEventListener('click', function(event){
    event.preventDefault();

    handleAmountById('input-contribute','add-money-contribute');
    
    const inputNoakhali = getInputValueById('input-contribute'); 
    
    const div = document.createElement('div');
    div.innerHTML = `
        <h2 class="mx-auto font-bold text-lg px-4 text-justify">Donated ${inputNoakhali} tk Donate for Youth contribution to Flood Relief in Unique Ways</h2>
        <p class="mx-auto text-justify px-4 mb-4"> Given date is ${new Date().toString()} </p>`
    document.getElementById('history-added-area').appendChild(div);
    
})

// soliderity Section

document.getElementById('soliderity')
.addEventListener('click', function(event){
    event.preventDefault();

    handleAmountById('input-soliderity','add-money-soliderity');
    
    const inputNoakhali = getInputValueById('input-soliderity'); 
    
    const div = document.createElement('div');
    
    div.innerHTML = `
        <h2 class="mx-auto font-bold text-lg px-4 text-justify">Donated ${inputNoakhali} tk Donate for Bangladesh’s unexpected show of solidarity</h2>
        <p class="mx-auto text-justify px-4 mb-4"> Given date is ${new Date().toString()} </p>`
    document.getElementById('history-added-area').appendChild(div);
 
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



