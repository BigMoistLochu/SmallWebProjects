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


export const obietnica = new Promise((resolve, reject) => {
    console.log("Zaczalem operacje juz teraz bo obiekt zostal utworzony");
    setTimeout(() => {
        console.log("to pojawi sie po 10 sekundach zeby ustawic resolve w obiekcie promise");
        let sukces = true; // Możemy zmienić na false, aby zobaczyć, co się stanie
        if (sukces) {
            return resolve("Operacja zakończona sukcesem! 🎉");
        } else {
            return reject("Coś poszło nie tak! ❌");
        }
    }, 10000);
});