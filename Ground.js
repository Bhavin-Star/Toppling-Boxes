class ground{
    constructor(x,y,width,height){
        
        var stat= {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,stat);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        
    }
    display(){
        var pos= this.body.position;
        rectMode(CENTER);
        fill('Red');
        rect(pos.x, pos.y, this.width, this.height);
    }
}
