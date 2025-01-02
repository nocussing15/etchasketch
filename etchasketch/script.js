//container for the 16x16 grid 
const container = document.getElementById("grid-container"); 

//loop to create the 256 squares 
/*
for (let i = 0 ; i<256; i++){
    let newSquare = document.createElement('div');
    newSquare.id ='square' + i;
    newSquare.className = 'squares';
    newSquare.textContent= 'test';
    container.appendChild(newSquare); 
}
*/
for (let i = 0; i <16; i++) {
    let newRow = document.createElement("div"); 
    newRow.id='row' + i;
    newRow.className = 'row';
    container.appendChild(newRow);


    for(let j = 0; j < 16; j++){
        let newColumn = document.createElement("div");
        newColumn.id = 'column' + j + 'of' + newRow.id; 
        newColumn.className='column'; 
        newColumn.textContent='test'; 
        newRow.appendChild(newColumn);
    }
   
}
