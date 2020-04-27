const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')
// Fill Listeners
fill.addEventListener('dragstart',dragStart);
fill.addEventListener('dragend',dragEnd);
// Drag Functions
function dragStart(){
    this.className += ' hold';
    setTimeout(()=>{
        this.className  = 'invisible'
    },)

}
function dragEnd(){
    this.className  = 'fill'
}
// Looop hrough Empties and call drag events

for(const empty of empties){
    empty.addEventListener('drop',dragDrop); 
    empty.addEventListener('dragover',dragOver); 
    empty.addEventListener('dragenter',dragEnter); 
    empty.addEventListener('dragleave',dragLeave); 
    
}
function dragOver(e){  
    e.preventDefault()
}
function dragEnter(e){   
   e.preventDefault();
   this.className += ' hovered'
}
function dragLeave(){
    this.className = 'empty'
}
function dragDrop(){
    this.className = 'empty'
    this.append(fill);
}