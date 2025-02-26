import {players} from "../cache/PersistentDataContainer.js";
export function playerKeyboardController(){
    document.addEventListener("keydown", (event) => {

        if (["ArrowUp", "ArrowDown"].includes(event.key)) {
            event.preventDefault(); // Zapobiega przewijaniu strony
        }

        if (event.key === "ArrowUp") {
            players[0].moveUp();
        } else if (event.key === "ArrowDown") {
            players[0].moveDown();
        } else if (event.key === "ArrowLeft") {
            players[0].moveLeft();
        } else if (event.key === "ArrowRight") {
            players[0].moveRight();
        }
    });
}