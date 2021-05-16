var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,190,30);
    block2.shapeColor = "green";

    block3 = createSprite(506,580,190,30);
    block3.shapeColor = "yellow";

    block4 = createSprite(710,580,190,30);
    block4.shapeColor = "red";
    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityY = 100;
    ball.velocityX = 100;
    //write code to add velocityX and velocityY

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        
    }



    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "green";
          
           }
        if(block3.isTouching(ball) && ball.bounceOff(block3)){
            ball.shapeColor = "yellow";
            
        }
            if(block4.isTouching(ball) && ball.bounceOff(block4)){
                ball.shapeColor = "red";
                
            }
        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    

    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4

    drawSprites();
}