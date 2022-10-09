let videoArr = ["./assets/Campfire.mp4", "./assets/music.mp4"];

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const video = document.querySelector("video");
const forward = document.querySelector(".forward");
const backward = document.querySelector(".backward");

prev.addEventListener('click', () => changeVideo("prev"));
next.addEventListener('click', () => changeVideo("next"));

video.src = videoArr[0];
let videoNum = 0;

forward.addEventListener('click', () => {
    video.currentTime += 5;
})

backward.addEventListener('click', () => {
    video.currentTime -= 5;
})

function changeVideo(value) {
    console.log(value, videoNum)
    if(videoNum === 0 && value === "prev"){
        video.src = videoArr[videoNum];
    }
    else if(videoNum === videoArr.length - 1 && value === "next") {
        video.src = videoArr[videoNum];
    }
    else if(value === "next") {
        videoNum++;
        video.src = videoArr[videoNum]
    }
    else {
        videoNum--;
        video.src = videoArr[videoNum]
    }
}