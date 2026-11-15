const stage = document.getElementById("maskStage");
const mask = document.getElementById("maskWindow");
const crosshair = document.getElementById("crosshair");

function moveMask(clientX, clientY) {
  const rect = stage.getBoundingClientRect();
  const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
  const y = Math.max(0, Math.min(rect.height, clientY - rect.top));
  const px = `${(x / rect.width) * 100}%`;
  const py = `${(y / rect.height) * 100}%`;

  mask.style.setProperty("--x", px);
  mask.style.setProperty("--y", py);
  crosshair.style.left = `${x}px`;
  crosshair.style.top = `${y}px`;
}

stage.addEventListener("pointermove", event => {
  moveMask(event.clientX, event.clientY);
});

stage.addEventListener("pointerdown", event => {
  moveMask(event.clientX, event.clientY);
});

stage.addEventListener("pointerleave", () => {
  mask.style.setProperty("--x", "50%");
  mask.style.setProperty("--y", "50%");
  crosshair.style.left = "50%";
  crosshair.style.top = "50%";
});

// Start with the circular reveal in the middle of the canvas.
window.addEventListener("load", () => {
  const rect = stage.getBoundingClientRect();
  moveMask(rect.left + rect.width / 2, rect.top + rect.height / 2);
});
