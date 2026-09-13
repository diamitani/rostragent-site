// Rostr site — vanilla JS only: scroll reveal, mobile nav,
// active section highlighting, code copy.

(function () {
  "use strict";

  // ---- Scroll reveal ----
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  // ---- Mobile nav ----
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  var cta = document.querySelector(".nav-cta");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      if (cta) cta.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        if (cta) cta.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---- Active nav link on scroll ----
  var sectionIds = ["how", "package", "architecture", "code", "platform", "tiers"];
  var navAnchors = {};
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href && href.charAt(0) === "#") navAnchors[href.slice(1)] = a;
  });

  function setActive() {
    var current = null;
    sectionIds.forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 120) current = id;
    });
    Object.keys(navAnchors).forEach(function (id) {
      navAnchors[id].classList.toggle("active", id === current);
    });
  }
  window.addEventListener("scroll", setActive, { passive: true });
  setActive();

  // ---- Copy code sample ----
  var copyBtn = document.getElementById("copyBtn");
  var codeSample = document.getElementById("codeSample");
  if (copyBtn && codeSample) {
    copyBtn.addEventListener("click", function () {
      var text = codeSample.textContent;
      function done() {
        copyBtn.textContent = "Copied";
        setTimeout(function () { copyBtn.textContent = "Copy"; }, 1800);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, done);
      } else {
        var ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); } catch (e) {}
        document.body.removeChild(ta);
        done();
      }
    });
  }
})();
