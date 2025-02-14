export function loginUser(login,password){

    let user = {
        email: login,
        password: password
    };

    return fetch("http://localhost:8080/user/auth/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => response.text())
        .catch(error => console.log(error));
}


export function getJWT(){
    return localStorage.getItem('myData');
}

export function setJWT(token){
    localStorage.setItem('myData', token);
}