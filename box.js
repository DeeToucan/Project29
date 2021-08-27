class BOX {
    constructor(x,y,width,height){

        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x,y,30,50,options);
        World.add(world, this.body);
    }

    display(r,g,b){
        rectMode(CENTER);
        fill(r,g,b);
        strokeWeight(2);
        stroke(255);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}