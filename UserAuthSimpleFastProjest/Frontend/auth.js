function handleClick() {
    let loginValue = document.getElementById("user_email").value;
    let passwordValue = document.getElementById("user_password").value;

    let user = {
        username: loginValue,
        password: passwordValue
    };

    fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Origin': 'http://localhost:3000' // Dodanie nagłówka Origin
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json()) // Konwersja odpowiedzi na obiekt JS
        .then(data => console.log("Odpowiedź serwera:", data))
        .catch(error => console.error("Błąd:", error));
}



document.getElementById("sendButton").addEventListener("click", handleClick);