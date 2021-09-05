class Paper{
    constructor(x, y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2,
        }
        this.image = loadImage("Paper.png");
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 40;
        this.body = Bodies.rectangle(this.x, this.y, 50, 40, options )
        World.add(world, this.body);
    }
    display(){
        var paperpos= this.body.position;
        var angle= this.body.angle;
        push()
        translate(paperpos.x, paperpos.y);
        imageMode(CENTER) 
        image(this.image, 0, 0, this.width, this.height);  
        //strokeWeight(4);
        //stroke("black");
        //fill("darkblue");        
        //ellipse(0,0,this.r,this.r);
        pop()
    }
}