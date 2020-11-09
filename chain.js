const Constraint= Matter.Constraint;
class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.bodyA=bodyA
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        var pointA = this.bodyA.position;
        var pointB = this.pointB;
        
        push();
        stroke(48,22,8)
        if(this.chain.bodyA){
        
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    fly(){
        this.chain.bodyA=null;
      }   
}