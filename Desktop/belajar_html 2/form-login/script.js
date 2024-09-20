const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginPopup = document.querySelector('.Login-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});

