const inputLable = document.querySelector('.input-lable');
const emailBox = document.getElementById('email-box');
const emailBoxContainer = document.querySelector('.email-box-container');

const myfunc = ()=>{
    inputLable.classList.add("event-class")
    emailBoxContainer.classList.add('outline-add')
    
}


emailBox.addEventListener('focus',myfunc)

emailBox.addEventListener('focusout',(e)=>{
    if(!emailBox.value){
        inputLable.classList.remove('event-class');  
        emailBoxContainer.classList.remove('outline-add')
    }
})


const hoveredElement = document.querySelector('.lang-list')
hoveredElement.addEventListener('mouseover',(e)=>{
    if (e.target.tagName.toLowerCase() === 'span' && e.target.classList.contains('language-option') && e.target === hoveredElement.firstElementChild){
        e.target.classList.add('hover-effect-1')
    }
    else{
        e.target.classList.add('hover-effect-2')
    }
  
})


hoveredElement.addEventListener('mouseout',(e)=>{
    if (e.target.tagName.toLowerCase() === 'span' && e.target.classList.contains('language-option') && e.target === hoveredElement.firstElementChild){
        e.target.classList.remove('hover-effect-1')
    }
    else{
        e.target.classList.remove('hover-effect-2')
    }
  
})


const languageButton = document.querySelector('.btn-language');
languageButton.addEventListener('click',()=>{
    hoveredElement.classList.toggle('show')
})

document.addEventListener('click',(e)=>{
    if(!languageButton.contains(e.target) && !hoveredElement.contains(e.target)){
        hoveredElement.classList.remove('show');
    }

})