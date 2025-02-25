import {players} from "../cache/PersistentDataContainer.js";
export function playerKeyboardController(){
    document.addEventListener("keydown", (event) => {

        if (["ArrowUp", "ArrowDown"].includes(event.key)) {
            event.preventDefault(); // Zapobiega przewijaniu strony
        }

        if (event.key === "ArrowUp") {
            console.log("Strzałka w górę!");
            players[0].moveUp();
        } else if (event.key === "ArrowDown") {
            console.log("Strzałka w dół!");
            players[0].moveDown();
        } else if (event.key === "ArrowLeft") {
            console.log("Strzałka w lewo!");
            players[0].moveLeft();
        } else if (event.key === "ArrowRight") {
            console.log("Strzałka w prawo!");
            players[0].moveRight();
        }
    });
}