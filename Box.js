class box{
    constructor(x,y,width,height){
        
        var ret= {
            'restitution': 1.0,
            'friction': 0.3,
            'density': 1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,ret);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        
        
    }
    display(){
        var pos= this.body.position;
        
        var angle= this.body.angle;
        
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        
        rectMode(CENTER);
        fill('green');
        rect(0, 0, this.width, this.height);
        pop();
    }
}
