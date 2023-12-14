var harry="";
var peter="";
leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;
ponesque=0;
statush="";
statusp="";

function preload(){
    harry =loadSound("harry.mp3");
    peter =loadSound("peter.mp3");
}

function setup(){
    canvas=createCanvas(550,500);
    canvas.center();

    video =createCapture(VIDEO);
    video.hide();

    
    poseNet=ml5.poseNet(video,modelLoaded);

    poseNet.on('pose',gotposes);
}

function modelLoaded(){
    console.log("poseNet foi inicializado");
}

    function draw(){
        image(video,0,0,550,500);

        fill("#FF0000");
        stroke("#B22222");

        statush=harry.isPlaying();
        statusp=peter.isPlaying();

        if(ponesque>0.2){
            circle(leftwristX,leftwristY,50);
            harry.stop();

        if(statusp==false){
            peter.play();
            document.getElementById("nomemusica").innerHTML="tocando musica de peter pan";
        }
       
        }
    }

    function gotposes(results){
        if(results.length>0){
            console.log(results);
        
            leftwristX=results[0].pose.leftWrist.x;
    
            leftwristY=results[0].pose.leftWrist.y;
            
            rightwristX=results[0].pose.rightWrist.x;
    
            rightwristy=results[0].pose.rightWrist.y;
        
            ponesque=results[0].pose.keypoints[9].score;
        }
    
    }
