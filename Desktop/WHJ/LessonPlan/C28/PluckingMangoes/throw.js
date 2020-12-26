class Throw{
	constructor(body,point)
	{
		
		var options={ 
            bodyA:body,			 
			pointB:point, 
			stiffness:0.004, 
			length:1
			
		}
		
		this.bodyA=body;
		this.pointB=point;
		this.throw=Constraint.create(options)
		World.add(world,this.throw)
	}

	attach(body){
		this.throw.bodyA=body;
	}

	fly()
	{
		this.throw.bodyA=null;
	}

	display()
	{
		if(this.throw.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}