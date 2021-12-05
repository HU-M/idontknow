song = "";
rightWristX = "";
scoreLeftWrist = "";
rightWristY = "";
scoreRightWrist = "";
song_status = "";
 
function preload() {
    song = loadSound("music.mp3");
}

function draw() {
    image(video, 0, 0, 600, 500);
    song_status = song.isPlaying();

    fill("#FF0000");
    stroke("#FF0000");

    if(scoreLeftWrist > 0.2);
    {
     circle(rightWristX,rightWristY,20);
         song.stop();
         if(song_status == false) {
             song.play();
             document.getElementById("song").innerHTML = "Playing an alarm"}

 
         
     }

    }
}