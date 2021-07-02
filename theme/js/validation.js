function validation(){
    var Name = document.getElementById("Name").value;
    var Email = document.getElementById("Email").value;
    var Password = document.getElementById("Password").value;
    var Email1 = document.getElementById("Email1").value;
    var Password1 = document.getElementById("Password1").value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px";

    if(Name.length < 3){
        text="Please enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }
    
    if(Email.indexOf("@") == -2 || Email.length < 3){
        text="Please enter Valid email";
        error_message.innerHTML = text;
        return false;
    }

    if(Password.length < 3 || Password.length > 10){
        text="Please enter Password between 3-10";
        error_message.innerHTML = text;
        return false;
    }
    
    
    alert("Form submitted Successfully")
    return true;
}