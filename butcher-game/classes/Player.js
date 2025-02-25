export class Player {

    constructor(uuid, name) {
        this.uuid = uuid;
        this.name = name;
        this.x = 1;
        this.y = 1;
    }

    moveRight() {
        if (!this.#canMove()) return;
        this.x += 1;
    }

    moveLeft() {
        if (!this.#canMove()) return;
        this.x -= 1;
    }

    moveUp() {
        if (!this.#canMove()) return;
        this.y -= 1;
    }

    moveDown() {
        if (!this.#canMove()) return;
        this.y += 1;
    }

    #canMove(){
        if(this.x >= 0 && this.y >= 0) return true;
        return false;
    }




}