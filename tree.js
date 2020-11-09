class Tree {
    constructor(x,y,width,height) {
      
      this.width = width;
      this.height = height;
      this.wallThickness=20;
      this.x = x;
      this.y=y;
      
      this.bottomBody=Bodies.rectangle(this.x, this.y, this.width, this.wallThickness, {isStatic:true})
      this.leftWallBody=Bodies.rectangle(0, this.y-this.height/2, this.wallThickness, this.height, {isStatic:false}) 
      this.rightWallBody=Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, this.wallThickness, this.height, {isStatic:false})
      
      
      this.image=loadImage("tree.png")
      World.add(world, this.bottomBody);
      World.add(world, this.leftWallBody);
      World.add(world, this.rightWallBody);

    }
    display(){
      
      var posBottom=this.bottomBody.position;
    var posLeft=this.leftWallBody.position;
    var posRight=this.rightWallBody.position; 
    push()
    translate(posLeft.x, posLeft.y);
    rectMode(CENTER) 
    
     angleMode(RADIANS) 
     fill(255) 
     rotate(this.angle)
     translate(posRight.x, posRight.y); 
     rectMode(CENTER) 
     
     angleMode(RADIANS) 
     fill(255) 
     rotate(-1*this.angle) 
     
     pop() 
     push() 
     translate(posBottom.x, posBottom.y+10); 
     
     
     angleMode(RADIANS) 
     fill(255) 
     imageMode(CENTER); 
     image(this.image, 0,-this.height/2,this.width, this.height)
     pop()
    

    }
  };