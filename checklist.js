/* Today in Leonida: the free GTA 6 100% checklist. Ticks are saved in the
   visitor's browser (localStorage) under one versioned key; nothing is sent
   anywhere and there is no account. Only confirmed items are listed — groups
   whose real lists are not known yet carry a placeholder or a note instead. */
(function () {
  var KEY = "vicehub-checklist-v1";
  var section = document.getElementById("checklist");
  if (!section) return;

  var done = {};
  try { done = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) {}
  function persist() { try { localStorage.setItem(KEY, JSON.stringify(done)); } catch (e) {} }

  var boxes = [].slice.call(section.querySelectorAll("input[type=checkbox][data-cl-key]"));
  var bar = document.getElementById("cl-progress");
  var fill = bar ? bar.querySelector("span") : null;
  var summary = document.getElementById("cl-summary");

  function update() {
    var ticked = 0;
    boxes.forEach(function (b) { if (b.checked) ticked++; });
    var pct = boxes.length ? Math.round(ticked / boxes.length * 100) : 0;
    if (fill) fill.style.setProperty("--w", pct + "%");
    if (bar) bar.setAttribute("aria-valuenow", String(pct));
    if (summary) summary.textContent = ticked + " of " + boxes.length + " done (" + pct + "%)";
    [].slice.call(section.querySelectorAll("[data-cl-group]")).forEach(function (list) {
      var items = [].slice.call(list.querySelectorAll("input[type=checkbox][data-cl-key]"));
      var n = 0;
      items.forEach(function (b) { if (b.checked) n++; });
      var el = section.querySelector('[data-cl-count="' + list.getAttribute("data-cl-group") + '"]');
      if (el) el.textContent = n + "/" + items.length;
    });
  }

  boxes.forEach(function (b) {
    var k = b.getAttribute("data-cl-key");
    if (done[k]) b.checked = true;
    b.addEventListener("change", function () {
      if (b.checked) done[k] = 1; else delete done[k];
      persist();
      update();
    });
  });

  var reset = document.getElementById("cl-reset");
  if (reset) reset.addEventListener("click", function () {
    if (!window.confirm("Clear every tick on this checklist?")) return;
    done = {};
    persist();
    boxes.forEach(function (b) { b.checked = false; });
    update();
  });

  update();
})();
