// Dark mode
const themeButton = document.getElementById("theme");
function onClick() {
  document.body.classList.toggle("dark");
}

themeButton.addEventListener("click", onClick);

// SWIPER

//Vérification que le DOM est bien chargé

document.addEventListener("DOMContentLoaded", function () {
  // Nouveau slider avec la classe que je vise
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
