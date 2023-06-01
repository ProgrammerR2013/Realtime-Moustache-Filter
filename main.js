nose_x = 0;
nose_y = 0;

function preload() {
    moustache = loadImage("https://i.postimg.cc/L66bNFkj/th-removebg-preview.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);

}

function draw() {
    image(video, 0, 0, 300, 300);
    poseNet.on('pose', gotPoses);

    image(moustache, nose_x - 23, nose_y + 5, 50, 30)

}

function take_snapshot() {
    save("myMoustacheImage.png");
}

function modelLoaded() {
    console.log("Pose.net is initialized");
}

function gotPoses(results) {
    if (results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
    }
}