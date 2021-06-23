class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1 = loadImage("sprites/sling1.png"); 
        this.sling2 = loadImage("sprites/sling2.png"); 
        this.sling3 = loadImage("sprites/sling3.png"); 
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1, 200, 20); 
        image(this.sling2, 175, 20); 
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x<220){
            strokeWeight(3)
            }
            else{
                strokeWeight(7)
            }

            stroke(48, 23, 8)
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            line(pointA.x, pointA.y, pointB.x+50, pointB.y);
            image(this.sling3, pointA.x, pointA.y-10, 15, 30); 
        }
    }
    
}