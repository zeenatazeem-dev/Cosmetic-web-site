function validForm(){
    //alert("alert")


    var name = document.custom_form.name;
    var email = document.custom_form.email;
    var phone = document.custom_form.phone;
    var message = document.custom_form.message;
    var conditions = document.custom_form.conditions;
    var select = document.custom_form.selectOption;
    var checkbox = document.querySelector('input[name="conditions"]');


    if (name.value == ""){
        name.nextElementSibling.style.display = "block";
        name.style.border = "1px solid #f00";
        return false
    } else{
        name.nextElementSibling.style.display = "none";
        name.style.border = "1px solid transparent";
    }
    if (!email.value.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) || email.value == ""){
        email.nextElementSibling.style.display = "block";
        email.style.border = "1px solid #f00";
        return false
    } else{
        email.nextElementSibling.style.display = "none";
        email.style.border = "1px solid transparent";
    }
    if (!phone.value.match(/^\d{11}$/) || phone.value == ""){
        phone.nextElementSibling.style.display = "block";
        phone.style.border = "1px solid #f00";
        return false
    } else{
        phone.nextElementSibling.style.display = "none";
        phone.style.border = "1px solid transparent";
    }
    if (select.value == ""){
        select.nextElementSibling.style.display = "block";
        select.style.border = "1px solid #f00";
        return false
    } else{
        select.nextElementSibling.style.display = "none";
        select.style.border = "1px solid transparent";
    }
    if (message.value == ""){
        message.nextElementSibling.style.display = "block";
        message.style.border = "1px solid #f00";
        return false
    } else{
        message.nextElementSibling.style.display = "none";
        message.style.border = "1px solid transparent";
    }
    if (!checkbox.checked){
        conditions.nextElementSibling.style.display = "block";
        conditions.style.border = "1px solid #f00";
        return false
    } else{
        conditions.nextElementSibling.style.display = "none";
        conditions.style.border = "1px solid transparent";
    }
}