class Box{
    constructor(x,y,color){
        this.body = Bodies.rectangle(x, y, 50, 50, color);
        this.width = 50;
        this.height = 50;
        this.color = color;
        World.add(world, this.body);

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.color);
        rect(0, 0, this.width, this.height);
        pop();

    }
}