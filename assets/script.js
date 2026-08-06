/* Panii — Week 1 HTML Fundamentals — app.js */
(function () {
  "use strict";

  var STORAGE_KEY = "panii-fn-theme";

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    highlightActiveNav();
    wireSidebarToggle();
    wireReadProgress();
    wireReveal();
    wireProgressSegments();
    wireFormFeedback();
  });

  /* Theme: respects saved choice, falls back to OS preference */
  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = saved || (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);

    var btn = document.querySelector(".theme-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        var current = document.documentElement.getAttribute("data-theme");
        var next = current === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
      });
    }
  }

  function highlightActiveNav() {
    var here = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-item a").forEach(function (a) {
      var file = a.getAttribute("href").split("/").pop();
      if (file === here) a.classList.add("is-active");
    });
  }

  function wireSidebarToggle() {
    var btn = document.querySelector(".menu-btn");
    var sidebar = document.querySelector(".sidebar");
    var scrim = document.querySelector(".scrim");
    if (!btn || !sidebar) return;
    function close() {
      sidebar.classList.remove("is-open");
      if (scrim) scrim.classList.remove("is-visible");
      btn.setAttribute("aria-expanded", "false");
    }
    function open() {
      sidebar.classList.add("is-open");
      if (scrim) scrim.classList.add("is-visible");
      btn.setAttribute("aria-expanded", "true");
    }
    btn.addEventListener("click", function () {
      sidebar.classList.contains("is-open") ? close() : open();
    });
    if (scrim) scrim.addEventListener("click", close);
    document.querySelectorAll(".nav-item a").forEach(function (a) {
      a.addEventListener("click", close);
    });
  }

  /* Thin scroll-progress hairline at the top of the viewport */
  function wireReadProgress() {
    var fill = document.querySelector(".read-bar-fill");
    if (!fill) return;
    function update() {
      var h = document.documentElement;
      var scrollTop = h.scrollTop || document.body.scrollTop;
      var height = (h.scrollHeight || document.body.scrollHeight) - h.clientHeight;
      var pct = height > 0 ? (scrollTop / height) * 100 : 0;
      fill.style.width = pct + "%";
    }
    document.addEventListener("scroll", update, { passive: true });
    update();
  }

  function wireReveal() {
    var targets = document.querySelectorAll(".reveal, .task-row");
    if (!targets.length) return;
    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (t) { t.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(function (t, i) {
      t.style.transitionDelay = Math.min(i * 50, 300) + "ms";
      io.observe(t);
    });
  }

  /* Animate hero + sidebar progress bars from 0 to their data-target */
  function wireProgressSegments() {
    document.querySelectorAll(".progress-fill[data-target]").forEach(function (fill) {
      var target = fill.getAttribute("data-target") || "0";
      requestAnimationFrame(function () {
        setTimeout(function () { fill.style.width = target + "%"; }, 150);
      });
    });
    var segs = document.querySelectorAll(".sp-seg");
    segs.forEach(function (seg, i) {
      setTimeout(function () { seg.classList.add("is-on"); }, 120 + i * 60);
    });
  }

  function wireFormFeedback() {
    var fields = document.querySelectorAll(
      'form input[type="text"], form input[type="email"], form input[type="tel"], form input[type="date"]'
    );
    fields.forEach(function (field) {
      field.addEventListener("input", function () {
        if (!field.value) {
          field.classList.remove("is-valid", "is-invalid");
          return;
        }
        var ok = field.checkValidity();
        field.classList.toggle("is-valid", ok);
        field.classList.toggle("is-invalid", !ok);
      });
    });

    document.querySelectorAll("form").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var note = form.querySelector(".submit-note");
        if (!note) {
          note = document.createElement("p");
          note.className = "submit-note";
          note.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span></span>';
          form.insertBefore(note, form.firstChild);
        }
        note.querySelector("span").textContent = "Looks good — this is a demo form, so nothing is actually sent, but every field passed HTML5 validation.";
      });
    });
  }
})();
