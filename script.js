const inputLable = document.querySelector('.input-lable');
const emailBox = document.getElementById('email-box');

const myfunc = ()=>{
    inputLable.classList.add("event-class")
    
}


emailBox.addEventListener('focus',myfunc)

emailBox.addEventListener('focusout',(e)=>{
    if(!emailBox.value){
        inputLable.classList.remove('event-class');  
    }
})