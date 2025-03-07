
const temporaryCache = [
    {login: "login123", password: "haslo123", UUID: "hash2"},
    {login: "login12345", password: "haslo12345", UUID: "hash1"}
]



function loginPlayer(){
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;

    console.log(login);
    console.log(password);
    if(isPlayerValid(login,password)){
        if(localStorage.getItem("jwt")){
            localStorage.removeItem("jwt")
            console.log("jwt zostalo usuniete to juz bylo w przegladarce")
        }else {
            localStorage.setItem("jwt",getPlayerByLogin(login).UUID)
        }

        window.document.location.href = "game.html";
    }else{
        alert("Bledne logowanie");
    }
}

function getPlayerByLogin(login){
    return temporaryCache.find((player)=> player.login === login);
}

function isPlayerValid(login, password) {
    return temporaryCache.some(player => player.login === login && player.password === password);
}