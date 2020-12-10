class Polygon
{
    constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0.5,
			friction:0.5,
		};
		
		this.x=x;
		this.y=y;
		this.r=r;
        this.body=Bodies.circle(this.x, this.y, this.r/2, options);
        this.image = loadImage("polygon.png");
		World.add(world, this.body);

	}
	display()
	{
			
			var polygonPos=this.body.position;		

			push();
			translate(polygonPos.x, polygonPos.y);
			rectMode(CENTER);
			imageMode(CENTER); 
			image(this.image, 0, 0,this.r,this.r);
			pop();
			
	}

}