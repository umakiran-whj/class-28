
class Rope{
	constructor(body,anchor)
	{
		
		var options={ 
            bodyA:body,			 
			pointB:anchor, 
			stiffness:0.008, 
			length:10
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	attach(body){
		this.rope.bodyA=body;
	}

	fly()
	{
		this.rope.bodyA=null;
	}

	display()
	{
		if(this.rope.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}