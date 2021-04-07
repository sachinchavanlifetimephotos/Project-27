class Ball{ 
    constructor(x,y,radius){ 
        var options = { 
            restitution:1, 
            isStatic: false, 
            friction:0, 
            density:1.2, 
        } 
        this.body = Bodies.circle(x,y,radius); 
        this.r=radius; 
        World.add(world, this.body); 

    }
   display(){ 
       var pos=this.body.position; 
       var angles=this.body.angle; 
       push ();
       translate (pos.x,pos.y); 
       ellipseMode(CENTER); 
      fill ("pink") 
       ellipse(0,this.r,this.r); 
       pop ();    
       
   }
} 
