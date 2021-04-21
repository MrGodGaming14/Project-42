class Drops {
    constructor(x, y, options){
        options ={
        friction: 0.001,
        restitution: 0.1,
        isStatic: false
        }
    this.drop = Bodies.circle(x, y, 5, options);
    World.add(world, this.drop);


    var maxDrops = 100;
    var droparray = ["hi"];

    for(var i = 0; i < maxDrops; i++){
       drop.push(new createDrop(random(0,400), random(0, 400)))
    }

    }
    updateY(){
        if(this.drop.position.y > 800){
            this.drop.position.y = -20
            this.drop.position.x = Math.round(random(1,400));
        }
    }
    showDrop(){
        ellipseMode(CENTER);
        fill("blue");
        ellipse(this.drop.position.x, this.drop.position.y, 10, 10);
        //console.log(this.drop.position.y);
    }
}