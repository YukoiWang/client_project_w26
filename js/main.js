(() => {
  const yearTarget = document.getElementById("current-year");
  if (yearTarget) {
    yearTarget.textContent = String(new Date().getFullYear());
  }

  const backToTopBtn = document.querySelector('[data-back-to-top="true"]');
  if (!backToTopBtn) return;

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
})();
