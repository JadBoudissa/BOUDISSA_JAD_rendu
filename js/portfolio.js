// Dark mode
const themeButton = document.getElementById("theme");
function onClick() {
  document.body.classList.toggle("dark");
}

themeButton.addEventListener("click", onClick);

// SWIPER
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-iim", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3000,
    },
  });
});

// Récupère l'élément du menu burger
const burgerMenu = document.querySelector(".burger-menu");

// Ajoute un écouteur d'événements pour le clic sur le menu burger
burgerMenu.addEventListener("click", () => {
  // Toggle la classe 'active' sur le menu burger
  burgerMenu.classList.toggle("active");
});

// Options plugin
// Ecarts entre les éléments

const options = {
  gutterPixels: 50,
  gridItemsSelector: ".filtr-items",
};

// Initialisation de Filterizr
const filterizr = new Filterizr(".portfolio-elements", options);

const filterItems = document.querySelectorAll(".filters ul li");

filterItems.forEach((item) => {
  item.addEventListener("click", () => {
    filterItems.forEach((filterItem) => filterItem.classList.remove("active"));
    item.classList.add("active");
  });
});
