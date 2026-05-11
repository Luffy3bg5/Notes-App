import { collection } from "./collection.js";

document.querySelector(".add-button").addEventListener('click' , add_note) ;

// document.querySelector(".title").addEventlistener("click" , (e)=>{
//     let  temp = {} ;
    
// })
let leftSide = document.querySelector(".left") ;
function add_note(){
// get  title  value 
let  inp = document.querySelector(".title-input").value ;


// get  content  value 
let  c = document.querySelector(".main-text-input").value ; 

// create  object  
let  temp = {
    id :"" ,
    title :"",
    content :""
} ;

// add  it  into  the  collection 
if(inp !== ""){
   temp.title = inp ;
}
else {
    throw new Error("Title cannot  be blank");
}

temp.content = c ;
temp.id = len(collection) + 1 ;
collection.push(temp) ;
render_notes(collection) ;
// console.log(collection) ;
//console.log(collection )

// remove   the   value  from  the input  box  
document.querySelector(".title-input").value = "" ;
document.querySelector(".main-text-input").value = "" ;

}

// rendering  the  collection on the left  side  of  the screen  
function render_notes(collection){
    let  html = ""
    let count = 0 ;
    collection.forEach(element => {
        count ++ ;
    const  note  = `<div>Note No :${count} : ${element.title} , ${element.content}</div><br>`; 
    html += note  ;
});
    console.log(html);
    leftSide.innerHTML = html ;
}
