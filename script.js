const inputLable = document.querySelector('.input-lable');
const emailBox = document.getElementById('email-box');

emailBox.addEventListener('focus',(e)=>{
    inputLable.style.top = '-50%'
    inputLable.style.transform = 'translateY(50%)'

})

emailBox.removeEventListener('focus',)