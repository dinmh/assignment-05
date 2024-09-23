document.getElementById('add-fund-noyakhali')
.addEventlistener('click', function (event){
    event.preventDefault();
    const addNoyakhali = getInputFieldValueById('fund-noyakhali');
    console.log(addNoyakhali);
});
