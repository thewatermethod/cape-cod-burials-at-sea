document.addEventListener("DOMContentLoaded", function () {
  const menuToggleButton = document.querySelector("#menu-toggle-button");
  const siteNavigation = document.querySelector("#site-navigation");

  menuToggleButton.addEventListener("click", function () {
    siteNavigation.classList.toggle("opened");
  });
});
