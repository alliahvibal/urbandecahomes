let initialized = false;

export function initAnimations() {
  if (initialized) return;
  initialized = true;

  const revealPoint = 150;

  const selectors = [
    ".reveal",
    ".typing-effect",
    ".slide-in-from-left",
    ".slide-in-from-right",
    ".fade-effect",
    ".count-number",
    ".append-up",
    ".dropdown-effect",
    ".project-cards.flip-in",
  ];

  const formatter = new Intl.NumberFormat();

  const triggerCounterIfNeeded = (el) => {
    if (!el.classList.contains("count-number")) return;
    if (el.dataset.animated === "true") return;
    const to = parseInt(el.getAttribute("data-to") || "0", 10);
    const duration = parseInt(el.getAttribute("data-speed") || "800", 10);
    const start = 0;
    const startTime = performance.now();
    el.dataset.animated = "true";
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.floor(start + (to - start) * progress);
      el.textContent = formatter.format(current);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  // Start a paced one-by-one reveal on a dropdown UL
  const ensurePacedReveal = (ul) => {
    if (!ul || ul._revealTimer) return;
    ul._revealTimer = setInterval(() => {
      const items = Array.from(ul.querySelectorAll("li"));
      if (!items.length) return;
      // Only run while list is on screen
      const rect = ul.getBoundingClientRect();
      const visible = rect.top < window.innerHeight && rect.bottom > 0;
      if (!visible) {
        clearInterval(ul._revealTimer);
        ul._revealTimer = null;
        return;
      }
      const inactives = items.filter((li) => !li.classList.contains("active"));
      if (!inactives.length) {
        clearInterval(ul._revealTimer);
        ul._revealTimer = null;
        return;
      }
      // Activate next item in order
      let lastActiveIndex = -1;
      for (let i = items.length - 1; i >= 0; i--) {
        if (items[i].classList.contains("active")) {
          lastActiveIndex = i;
          break;
        }
      }
      const nextIndex = Math.min(lastActiveIndex + 1, items.length - 1);
      const candidate = items[nextIndex];
      if (candidate && !candidate.classList.contains("active")) {
        candidate.classList.add("active");
      }
    }, 140);
  };
  const stopPacedReveal = (ul) => {
    if (ul && ul._revealTimer) {
      clearInterval(ul._revealTimer);
      ul._revealTimer = null;
    }
  };

  const reveal = (selector) => {
    const elements = document.querySelectorAll(selector);
    for (let i = 0; i < elements.length; i++) {
      const el = elements[i];
      const rect = el.getBoundingClientRect();
      const isCounter = el.matches(".count-number");
      const inViewGeneral = rect.top < window.innerHeight - revealPoint;
      const inViewCounter = rect.top < window.innerHeight && rect.bottom > 0;
      const inView = isCounter ? inViewCounter : inViewGeneral;
      if (inView) {
        // Ensure append-up text animates when it first becomes visible
        if (el.matches(".append-up") && el.dataset.appendInit !== "true") {
          const prev = el.style.animation;
          el.style.animation = "none";
          void el.offsetWidth;
          el.style.animation = prev || "";
          el.dataset.appendInit = "true";
        }
        // Start counters immediately when they enter the viewport
        if (isCounter && inViewCounter) {
          triggerCounterIfNeeded(el);
        }
        if (!el.classList.contains("active")) {
          el.classList.add("active");
          // Backstop in case counter wasn't already started above
          triggerCounterIfNeeded(el);
          if (el.matches(".project-cards.flip-in")) {
            const projects = el.closest(".projects");
            if (projects && !projects.classList.contains("projects-loaded")) {
              projects.classList.add("projects-loaded");
            }
          }
          // Dropdown: mark initialized and start paced reveal when visible
          if (
            el.matches(".dropdown-effect") &&
            el.dataset.dropdownInit !== "true"
          ) {
            el.dataset.dropdownInit = "true";
            const visibleNow = rect.top < window.innerHeight && rect.bottom > 0;
            if (visibleNow) ensurePacedReveal(el);
          }
        }
      }
    }
  };

  const runGeneralReveals = () => selectors.forEach((sel) => reveal(sel));

  // Initial run
  runGeneralReveals();

  // Scroll with direction detection and edge-based behavior
  let lastY = window.scrollY;
  const processDropdownEdge = (direction) => {
    const EDGE = 75; // px from bottom edge
    const lists = document.querySelectorAll(".dropdown-effect");
    lists.forEach((ul) => {
      if (ul.dataset && ul.dataset.dropdownInit !== "true") return;
      const allItems = Array.from(ul.querySelectorAll("li"));
      if (!allItems.length) return;

      const nearBottom = (el) => {
        const r = el.getBoundingClientRect();
        return window.innerHeight - r.bottom < EDGE && r.bottom > 0;
      };

      const rect = ul.getBoundingClientRect();
      const visible = rect.top < window.innerHeight && rect.bottom > 0;

      if (direction === "up") {
        // Remove one active item nearest the bottom edge
        const actives = allItems.filter((li) =>
          li.classList.contains("active")
        );
        for (let i = actives.length - 1; i >= 0; i--) {
          const li = actives[i];
          if (nearBottom(li)) {
            li.classList.remove("active");
            break;
          }
        }
        stopPacedReveal(ul);
      } else {
        // Downward: begin paced reveal when list is visible
        if (visible) ensurePacedReveal(ul);

        const inactives = allItems.filter(
          (li) => !li.classList.contains("active")
        );
        if (!inactives.length) {
          stopPacedReveal(ul);
          return;
        }
        // If timer is running, let it handle the pacing
        if (ul._revealTimer) return;

        // Otherwise, add one near the bottom edge for smooth append
        for (let i = 0; i < inactives.length; i++) {
          const li = inactives[i];
          if (nearBottom(li)) {
            li.classList.add("active");
            return;
          }
        }
        // Fallback: activate next item in order while visible
        if (visible) {
          let lastActiveIndex = -1;
          for (let i = allItems.length - 1; i >= 0; i--) {
            if (allItems[i].classList.contains("active")) {
              lastActiveIndex = i;
              break;
            }
          }
          const nextIndex = Math.min(lastActiveIndex + 1, allItems.length - 1);
          const candidate = allItems[nextIndex];
          if (candidate && !candidate.classList.contains("active")) {
            candidate.classList.add("active");
          }
        }
      }
    });
  };

  const onScroll = () => {
    const currY = window.scrollY;
    const direction = currY < lastY ? "up" : "down";
    lastY = currY;
    runGeneralReveals();
    processDropdownEdge(direction);
  };
  window.addEventListener("scroll", onScroll, { passive: true });

  const mo = new MutationObserver(() => {
    runGeneralReveals();
  });
  mo.observe(document.body, { childList: true, subtree: true });
}
