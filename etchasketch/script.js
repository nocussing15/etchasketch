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

//create 16x16 grid
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


//function and event listener for drawing 
let isDrawing = false;

const draw = (e) => {
    const target=e.target;
    if(target.classList.contains('column')) {
        target.classList.add('drawing');
    }
}


container.addEventListener('mouseover',(e)=>{
    draw(e); 
})


//function and event listener to clear the board
const clearButton = document.getElementById("clear"); 
clearButton.addEventListener("click",function(){
    let drawing = document.querySelectorAll('.drawing');
    for (let i=0; i < drawing.length; i++) {
        drawing[i].classList.remove("drawing");
    }
})
