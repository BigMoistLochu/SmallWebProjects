export function playerKeyboardController(){
    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowUp") {
            //Aktualizacja playera
            console.log("Strzałka w górę!");
        } else if (event.key === "ArrowDown") {
            console.log("Strzałka w dół!");
        } else if (event.key === "ArrowLeft") {
            console.log("Strzałka w lewo!");
        } else if (event.key === "ArrowRight") {
            console.log("Strzałka w prawo!");
        }
    });
}