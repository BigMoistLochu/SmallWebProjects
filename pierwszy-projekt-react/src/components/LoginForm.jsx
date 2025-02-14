import { useState } from "react";
import "../styles/loginForm.css";
import Dashboard from "./Dashboard.jsx";
import { loginUser, setJWT , getJWT } from "../services/authService";

function LoginForm() {


    const [errorMessage, seterrorMessage] = useState("");

    const handleLogin = async () => {

        let loginValue = document.getElementById("user_email").value;
        let passwordValue = document.getElementById("user_password").value;

        try {
            const response = await loginUser(loginValue, passwordValue);
            if(response === "JWTt") {
                setJWT(response);
            }else {
                seterrorMessage("Blad z logowaniem!");
            }
        } catch (error) {
            console.error("Błąd logowania:", error);
        }
    };


    if (getJWT() === "JWTt") {
        return <Dashboard />;
    }

    return (
        <>
            <div id="formularz">
                <h1>Login Client</h1>
                <div id="messages"></div>
                <p>{errorMessage}</p>
                <div id="inputSection">
                    <input type="email" id="user_email" placeholder="Type a login..." />
                    <input type="password" id="user_password" placeholder="Type a password..." />
                    <button onClick={handleLogin}>Send</button>
                </div>
            </div>
        </>
    )
}

export default LoginForm;