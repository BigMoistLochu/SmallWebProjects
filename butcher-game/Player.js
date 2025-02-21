export class Player {

    constructor(uuid, name) {
        this.uuid = uuid;
        this.name = name;
        this.x = 2;
        this.y = 2;
    }

    moveRight() {
        if (!this.canMove()) return;
        this.x += 1;
    }

    moveLeft() {
        if (!this.canMove()) return;
        this.x -= 1;
    }

    moveUp() {
        if (!this.canMove()) return;
        this.y += 1;
    }

    moveDown() {
        if (!this.canMove()) return;
        this.y -= 1;
    }

    canMove(){
        return this.x > 1 && this.y > 1;
    }




}