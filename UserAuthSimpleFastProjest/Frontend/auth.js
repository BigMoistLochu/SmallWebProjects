function handleClick() {
    let loginValue = document.getElementById("user_email").value;
    let passwordValue = document.getElementById("user_password").value;
    console.log(loginValue);

    let user = {
        email: loginValue,
        password: passwordValue
    };

    console.log(user);
    console.log(JSON.stringify(user));

    fetch("http://localhost:8080/user/auth/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json()) // Konwersja odpowiedzi na obiekt JS
        .then(data => console.log("Odpowiedź serwera:", data))
        .catch(error => console.error("Błąd:", error));
}



document.getElementById("sendButton").addEventListener("click", handleClick);