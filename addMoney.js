document.getElementById('fund-noyakhali')
.addEventlistener('click', function (event){
    event.preventDefault();
    const addNoyakhali = getInputFieldValueById('add-fund-noyakhali');
    console.log(addNoyakhali);
});
