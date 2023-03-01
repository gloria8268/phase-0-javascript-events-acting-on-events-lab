// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  dodger.style.left = '0px'
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

function moveDodgerRight() {
  dodger.style.left = "360px";
  // dodger.style.right = "0px";

}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});