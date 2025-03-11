const temporaryCache = [
    {login: "login123", password: "haslo123", UUID: "hash2"},
    {login: "login12345", password: "haslo12345", UUID: "hash1"}
]

function login(){
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;

    if(!isPlayerValid(login,password)) {
        alert("Bledne logowanie");
        return;
    }

    localStorage.setItem("jwt",getPlayerByLogin(login).UUID);
    window.document.location.href = "game.html";
}

function logout(){
    localStorage.removeItem("jwt");
    window.document.location.href = "index.html";
}

function isAuthenticated() {
    if(localStorage.getItem("jwt")) return true;
    return false;
}


function getPlayerByLogin(login){
    return temporaryCache.find((player)=> player.login === login);
}

function isPlayerValid(login, password) {
    return temporaryCache.some(player => player.login === login && player.password === password);
}