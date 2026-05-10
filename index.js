let  collection = [] ;

document.querySelector(".add-button").addEventListener('click' , add_note) ;

// document.querySelector(".title").addEventlistener("click" , (e)=>{
//     let  temp = {} ;
    
// })
function add_note(){
// get  title  value 
let  inp = document.querySelector(".title-input").value ;


// get  content  value 
let  c = document.querySelector(".main-text-input").value ; 

// create  object  
let  temp = {
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

collection.push(temp) ;

console.log(collection) ;
//console.log(collection )

// remove   the   value  from  the input  box  
 document.querySelector(".title-input").value = "" ;
  document.querySelector(".main-text-input").value = "" ;
}