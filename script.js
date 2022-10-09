let videoArr = ["./assets/Campfire.mp4", "./assets/music.mp4"];

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const video = document.querySelector("video");
const forward = document.querySelector(".forward");
const backward = document.querySelector(".backward");

prev.addEventListener('click', changeVideo);
next.addEventListener('click', changeVideo);

forward.addEventListener('click', () => {
    video.currentTime += 5;
})

backward.addEventListener('click', () => {
    video.currentTime -= 5;
})

function changeVideo() {
    video.src = video.src.includes("Campfire") ? videoArr[1] : videoArr[0];
}