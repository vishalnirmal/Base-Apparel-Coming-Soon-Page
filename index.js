document.querySelector(".arrow-btn").addEventListener("click", ()=>{
    var email = document.querySelector(".email");
    var pattern = /\w+@\w+\.\w+/g;
    var reg = new RegExp(pattern);
    if (reg.test(email.value)){
        email.parentElement.classList.remove("invalid-email");
    }
    else
    {
        email.parentElement.classList.add("invalid-email");
    }
});