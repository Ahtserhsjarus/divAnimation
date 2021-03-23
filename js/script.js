const textDiv = document.getElementById("text");
let moveLeft = 0;

setInterval(Anim, 100);

function Anim() {
  moveLeft += 5;
  textDiv.style.visibility = "hidden";

  let target = document.getElementById("animation");
  if (moveLeft > 600) {
    clearInterval();
    textDiv.style.visibility = "visible";
    setTimeout(function () {
      window.location.reload(1);
    }, 5000);
  } else {
    target.style.marginLeft = moveLeft + "px";
  }
}
