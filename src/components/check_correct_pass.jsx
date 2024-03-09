export default function checkValid(){
    const newPass = document.getElementById('pw1');
    const confirmPass = document.getElementById('pw2');
    const message = document.getElementById('message');
    if ((newPass.value === confirmPass.value) && (newPass.value !== "") && (confirmPass.value !== "")){
        message.innerHTML = "correct!";
        message.style.color = "green";
    }
    else if (confirmPass.value === ""){
        alert("please enter password!");
    }
    else{
        message.innerHTML = "wrong password!";
        message.style.color = "red";
    }
}