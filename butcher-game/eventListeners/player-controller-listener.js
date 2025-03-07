import {players,getPlayerByUUID} from "../cache/PersistentDataContainer.js";


export function playerKeyboardController(){

    const player = getPlayerByUUID(localStorage.getItem("jwt"));

    document.addEventListener("keydown", (event) => {

        if (["ArrowUp", "ArrowDown"].includes(event.key)) {
            event.preventDefault(); // Zapobiega przewijaniu strony
        }

        if (event.key === "ArrowUp") {
            player.moveUp();
        } else if (event.key === "ArrowDown") {
            player.moveDown();
        } else if (event.key === "ArrowLeft") {
            player.moveLeft();
        } else if (event.key === "ArrowRight") {
            player.moveRight();
        }
    });
}