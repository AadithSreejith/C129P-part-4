song1="";
song2="";
leftWristX=0;
rightWristX=0;
leftWristY=0;
rightWristY=0;
scoreleftwrist=0;
songStatus1="";
songStatus2="";
function preload(){
    song1 = loadSound("M1.mp3");
    song2 = loadSound("M2.mp3");
}


function setup(){
canvas = createCanvas(600, 500);
canvas.center();


video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}


function gotPoses(results){
if(results.length >0){
    console.log(results);
    scoreleftwrist=results[0].pose.keypoints[9].score;
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("leftWristX ="+ leftWristX);
    console.log("leftWristY ="+ leftWristY);
    console.log("rightWristX ="+ rightWristX);
    console.log("rightWrist Y="+ rightWristY);
}
}

function modelLoaded(){
console.log("PoseNet Is Intialized");

}

function draw(){
    image(video, 0, 0, 600, 500);
songStatus1=song1.isPlaying();
songStatus2=song2.isPlaying();
    fill("#FF0000");
    stroke("#FF0000");

    if(scoreleftwrist>0.001){
        circle(leftWristX, leftWristY, 20);
        song2.stop();
if(songStatus1==false){
    song1.play();
    document.getElementById("song").innerHTML="Playing harry potter themed song";
}
        
    }
}

