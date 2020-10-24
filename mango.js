class Mango
{
    constructor(x,y,radius)
    {
    var options={
        isStatic: true,
        //restitution: 0.3,
        friction: 0.5,
        density: 1.2
     }
        this.x=x;
		this.y=y;
		this.radius=radius;
        this.body=Bodies.circle(this.x, this.y, this.radius/2, options);
        this.image=loadImage("mango.png");
		World.add(world, this.body);
    }
    
    display(){
        var pos=this.body.position;		

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER)
        //strokeWeight(3);
        //fill("white");
        image(this.image,0,0,this.radius,30);
        pop();
    }
    
}