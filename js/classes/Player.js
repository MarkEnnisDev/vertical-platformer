class Player {
    constructor() {
        this.position = {x: 100, y: 100,}

        this.velocity = {x: 0, y: 0,}
        this.gravity = 1;
        this.width = 100;
        this.height = 100;
        this.sides = {
            bottom: this.position.y + this.height,
        }
    }
    draw() {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    
    isAirborne() {
        return this.sides.bottom + this.velocity.y < canvas.height;
    }

    move() {
        this.position.x += this.velocity.x;
    }
    applyGravity() {
        this.position.y += this.velocity.y;
        this.sides.bottom = this.position.y + this.height;

        // above bottom of canvas
        if (this.isAirborne()) {
            this.velocity.y += this.gravity;
        } else { this.velocity.y = 0; }
    }

    update() {
        this.draw();
        this.move();
        this.applyGravity();
    }
}