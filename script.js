const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.querySelector(".sr-only").textContent = isExpanded ? "Open navigation" : "Close navigation";
    primaryNav.classList.toggle("is-open", !isExpanded);
  });

  primaryNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.querySelector(".sr-only").textContent = "Open navigation";
      primaryNav.classList.remove("is-open");
    }
  });
}

const filterButtons = document.querySelectorAll(".filter-button");
const serviceCards = document.querySelectorAll(".service-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });

    serviceCards.forEach((card) => {
      const isVisible = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !isVisible);
      if (!isVisible) {
        card.querySelector("details")?.removeAttribute("open");
      }
    });
  });
});

document.querySelector("#current-year").textContent = new Date().getFullYear();