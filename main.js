const nameError=document.querySelector(".name-error")
const phoneError=document.querySelector(".phone-error")
const emailError=document.querySelector(".email-error")
const textarea=document.getElementById("feedback")


function nameValidate(){
    const name=document.getElementById("input-name").value
    if(name.length==0){
        nameError.innerHTML="Empty"
        return false
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]$/)){
        nameError.innerHTML="Enter the correct name"
        return false
    }
    nameError.innerHTML="correct"
    return true
}

function phoneValidate(){
    const phone=document.getElementById("input-phone").value
    if(phone.length==0){
        phoneError.innerHTML="Empty"
        return false
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML="Enter 10 digit number"
        return false
    }
    phoneError.innerHTML="correct"
    return true
}
function emailValidate(){
    const email=document.getElementById("input-email").value
    if(email.length==0){
        emailError.innerHTML="Empty"
        return false
    }
    if(!email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)){
        emailError.innerHTML="Enter valid email address"
        return false
    }
    emailError.innerHTML="Email is verified"
    return true
}

textarea.addEventListener("keydown",feedback)

function feedback(e){
    const feedError=document.querySelector(".feedError")
    let required=10
    let txtvalue=textarea.value
    let left=required-txtvalue.length
    if(left>0){
        feedError.innerHTML=left+"more characters needed"
        return false
    }
    feedError.innerHTML="completed"
    return true
}