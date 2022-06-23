const loginBtm=document.querySelector('.loginBtm');
const signupBtn=document.querySelector('.signupBtn');

const email=document.querySelector('#email');
const password=document.querySelector('#password');

loginBtm.addEventListener('click', (e)=>{
    e.preventDefault();
    const loginDetails={
        email:email.value,
        password:password.value
    }
    console.log(loginDetails)
})




