document.getElementById('noakhali')
.addEventListener('click', function(event){
    event.preventDefault();
    const inputNoakhali = getInputValueById('input-noakhali');
    

    const addMoney = getTextValueById('add-money');
    const newMoney = addMoney + inputNoakhali;

    document.getElementById('add-money').innerText = newMoney;
    
})