let user_name = document.getElementById("userName");
let password = document.getElementById("password");
let flag = 1;

function validateForm() {
    if (user_name.value == "") {
        document.getElementById("userError").innerHTML = "user name is empty"
        flag = 0;
    } else if (user_name.value.length < 3) {
        document.getElementById("userError").innerHTML = "user name required min 3 char"
        flag = 0;
    }else{
        document.getElementById("userError").innerHTML ="";
        flag = 1;
    }


    if (password.value == ""){
        document.getElementById("passError").innerHTML = "Please Enter Password";
        flag = 0;
    }else if(password.value.length < 8){
        document.getElementById("passError").innerHTML = "Required min 8 char";
        flag = 0

    }else{
        document.getElementById("passError").innerHTML = "";
        flag = 1;

    }
    if(flag){
        return true
    }else{
        return false
    }
}