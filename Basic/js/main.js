document.querySelector(".overlay-video").addEventListener("click", display);

function display() {
  let overlay = document.querySelector(".video_overlay");
  overlay.classList.remove("video_display");
}

document.querySelector(".close").addEventListener("click", hide);
function hide() {
  let overlay = document.querySelector(".video_overlay");
  overlay.classList.add("video_display");
}
