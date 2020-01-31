document.querySelector(".overlay-video").addEventListener("click", display);

function display() {
  let overlay = document.querySelector(".overlay");
  overlay.classList.remove("d-none");
}

document.querySelector(".close").addEventListener("click", hide);

function hide() {
  let overlay = document.querySelector(".video_overlay");
  overlay.classList.add("d-none");
}