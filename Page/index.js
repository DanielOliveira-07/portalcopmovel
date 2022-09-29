function Logar(){

    var username = document.getElementById('username').value;
    var senha = document.getElementById('password').value;

    if(username == "admin" && senha == "admin"){
        location.href = "index.html";
    }else{
        alert('Usuario ou senha incorretos');
    }

}
