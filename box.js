/* Section panels grow up to full size as they reach the middle of the screen
   and shrink back as they move away (scale 0.93 to 1.0, opacity 0.85 to 1).
   Never scale past 1.0: oversizing a tall panel pushes its top edge up into
   the sticky top bar (reported 2026-11-18). */
(function () {
  if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var boxes = [].slice.call(document.querySelectorAll(".box, .panel")), queued = false;
  function update() {
    queued = false;
    var mid = innerHeight / 2;
    boxes.forEach(function (b) {
      var r = b.getBoundingClientRect();
      var d = r.top <= mid && r.bottom >= mid ? 0 : Math.min(Math.abs(r.top - mid), Math.abs(r.bottom - mid));
      var t = Math.min(1, d / (innerHeight * 0.55));
      b.style.transform = "scale(" + (1 - 0.07 * t).toFixed(3) + ")";
      b.style.opacity = (1 - 0.15 * t).toFixed(3);
      b.classList.toggle("near", t < 0.15);
    });
  }
  function queue() { if (!queued) { queued = true; requestAnimationFrame(update); } }
  addEventListener("scroll", queue, { passive: true });
  addEventListener("resize", queue);
  update();
})();
