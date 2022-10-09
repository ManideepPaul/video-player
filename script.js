// This will hold all video name
let videoArr = ["./assets/Campfire.mp4", "./assets/music.mp4"];

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const video = document.querySelector("video");
const forward = document.querySelector(".forward");
const backward = document.querySelector(".backward");

prev.addEventListener('click', () => changeVideo("prev"));
next.addEventListener('click', () => changeVideo("next"));

// This will set the first item of the array as video source on first loading of the page
video.src = videoArr[0];

// This will keet track of the video
let videoNum = 0;

// This will skip the video forward by 5 second
forward.addEventListener('click', () => {
    video.currentTime += 5;
})

// This will skip the video backward by 5 second
backward.addEventListener('click', () => {
    video.currentTime -= 5;
})

function changeVideo(value) {
    // videoNum value will not go below 0
    if(videoNum === 0 && value === "prev"){
        video.src = videoArr[videoNum];
    }

    // videoNum value will never be equal to the length of the array
    else if(videoNum === videoArr.length - 1 && value === "next") {
        video.src = videoArr[videoNum];
    }

    // If next clicked the play the next video
    else if(value === "next") {
        videoNum++;
        video.src = videoArr[videoNum]
    }

    // If previous clicked the play the previous video
    else {
        videoNum--;
        video.src = videoArr[videoNum]
    }
}