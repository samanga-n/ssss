class Tree {
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }

        this.x=x;
        this.y=y;
        this.treeWidth=200;
		this.treeHeight=213;
		this.treeThickness=20;
        this.image=loadImage("tree.png");
        this.Bbody=Bodies.rectangle(this.x,this.y,this.treeWidth,this.treeThickness,options);
        this.Lbody=Bodies.rectangle(this.x-this.treeWidth/2, this.y-this.treeHeight/2,this.treeThickness,this.dustbinHeight,options);
        this.Rbody=Bodies.rectangle(this.x+this.treeWidth/2, this.y-this.treeHeight/2,this.treeHeight,options);
        World.add(world,this.Bbody);
        World.add(world,this.Lbody);
        World.add(world,this.Rbody);
    }

    display(){
        var posB=this.Bbody.position;
        var posL=this.Lbody.position;
        var posR=this.Lbody.position;

        push();
			translate(posL.x, posL.y);
			rectMode(CENTER);
			angleMode(RADIANS);
			fill(255);
			rotate(this.angle);
        pop();
        
        push();
			translate(posR.x, posR.y);
			rectMode(CENTER);
			angleMode(RADIANS);
			fill(255);
			rotate(-1*this.angle);
		pop();
       
        push();
			translate(posB.x, posB.y);
			rectMode(CENTER);
			angleMode(RADIANS);
			fill(255);
			imageMode(CENTER);
			image(this.image, 0,-this.treeHeight/2,this.treeWidth*2.1, this.treeHeight*3.2);
		pop();
        
       
    }
}