const input = document.querySelector('[type="text"]');
const btn = document.querySelector('[type="submit"]');
const msg = document.querySelector('.error');
// btn.disabled=true;



document.forms[0].addEventListener("submit", (e)=>{
        const regex = /^\w+@\w+\..+/gm;

    let validEmail;
    if(regex.test(input.value)){
        validEmail=true;
    }else{
        validEmail=false;
    }
    if(validEmail===false&&input.value===''){
        e.preventDefault()
        msg.textContent=`Oops! Please add your email`;
        msg.style.right="8.6rem"
        msg.style.top="1rem"

        input.style.borderColor="red";
    }else if(validEmail===false&&input.value.length>0){
        e.preventDefault()
        msg.textContent=`Oops! That doesn’t look like an email address`;
        msg.style.right="4.7rem"
        msg.style.top="1rem"

        input.style.borderColor="red";
    }else{
        msg.textContent='';
    }
})
