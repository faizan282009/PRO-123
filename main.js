nosex=0
nosey=0
leftwristx=0
rightwristx=0
difference=0
function draw()
{
background("maroon")
fill("white")
stroke("white")
textSize(difference)
text("FAIZAN",nosex,nosey);
}
function setup()
{
    canvas=createCanvas(750, 650)
    canvas.position(525,150)
    video=createCapture(VIDEO)
    video.size(500,500)
    posenet=ml5.poseNet(video,modelloaded)
    posenet.on("pose", gotposes)
}
function modelloaded() 
{
    console.log("model is loaded")
}
function gotposes(result)
{
    if(result.length>0)
    {
        console.log(result)
        nosex=result[0].pose.nose.x
        nosey=result[0].pose.nose.y
    leftwristx=result[0].pose.leftWrist.x
    leftwristy=result[0].pose.leftWrist.y    
    difference=floor(leftwristx-rightwristx)
    document.getElementById("side").innerHTML=difference+"px"
}

}
