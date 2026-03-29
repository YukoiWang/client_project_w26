(() => {
  const yearTarget = document.getElementById("current-year");
  if (yearTarget) {
    yearTarget.textContent = String(new Date().getFullYear());
  }

  const backToTopBtn = document.querySelector('[data-back-to-top="true"]');
  if (backToTopBtn) {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const setVisibility = () => {
      const show = window.scrollY > 400;
      backToTopBtn.classList.toggle("is-visible", show);
    };

    window.addEventListener("scroll", setVisibility, { passive: true });
    setVisibility();

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion.matches ? "auto" : "smooth",
      });
    });
  }

  initResourceSearch();
  initFaqAccordion();
})();

/**
 * Filter .js-search-item elements inside a root by keyword (case-insensitive).
 */
function initResourceSearch() {
  const inputs = document.querySelectorAll("input.js-resource-search");

  inputs.forEach((input) => {
    const rootSelector = input.getAttribute("data-search-root");
    const countSelector = input.getAttribute("data-search-count");
    if (!rootSelector) return;

    const root = document.querySelector(rootSelector);
    const countEl = countSelector ? document.querySelector(countSelector) : null;
    if (!root) return;

    const runFilter = () => {
      const q = input.value.trim().toLowerCase();
      const items = root.querySelectorAll(".js-search-item");

      let visible = 0;
      items.forEach((el) => {
        const text = el.textContent.toLowerCase();
        const match = !q || text.includes(q);
        el.hidden = !match;
        if (match) visible += 1;
      });

      root.querySelectorAll("[data-search-column]").forEach((col) => {
        const any = Array.from(col.querySelectorAll(".js-search-item")).some(
          (el) => !el.hidden
        );
        col.hidden = !any;
      });

      if (countEl) {
        if (!q) {
          countEl.textContent = "";
        } else if (visible === 0) {
          countEl.textContent = "No matches. Try a different keyword.";
        } else {
          countEl.textContent =
            visible === 1 ? "1 match found." : `${visible} matches found.`;
        }
      }
    };

    input.addEventListener("input", runFilter);
    input.addEventListener("search", runFilter);
  });
}

/**
 * Accessible FAQ accordion: button toggles panel with aria-expanded.
 */
function initFaqAccordion() {
  const accordions = document.querySelectorAll(".faq-accordion");

  accordions.forEach((accordion) => {
    accordion.querySelectorAll(".faq-item button").forEach((btn) => {
      const panelId = btn.getAttribute("aria-controls");
      const panel = panelId ? document.getElementById(panelId) : null;
      if (!panel) return;

      btn.addEventListener("click", () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!expanded));
        panel.hidden = expanded;
      });
    });
  });
}
