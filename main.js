function setup(){
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.position(400, 250);

    canvas = createCanvas( 400, 400);
    canvas.position(1000, 250);

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on("pose", gotPose);
}

function modelloaded(){
    console.log("modelloaded");
}

function gotPose(results){
    if(results.length > 0){
        console.log(results);
    }
}

function draw(){
    background("grey")
}