 // JavaScript to show/hide menu on hover
 document.getElementById("navbar").addEventListener("mouseover", function() {
    document.getElementById("menu").style.display = "block";
  });

  document.getElementById("navbar").addEventListener("mouseout", function() {
    document.getElementById("menu").style.display = "none";
  });

  // anim 

  // Smooth scroll animation with fade effect
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      const offsetTop = target.offsetTop;

      window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
      });
  });
});

// Add fade-in effect to elements when they come into view
function fadeInElements() {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= windowHeight) {
          element.classList.add("active");
      }
  });
}

// Show menu when user scrolls down
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const menu = document.getElementById("menu");

  if (window.scrollY > 100) {
      navbar.classList.add("scroll");
      menu.style.display = "block";
      fadeInElements(); // Trigger fade-in effect for the menu
  } else {
      navbar.classList.remove("scroll");
      menu.style.display = "none";
  }
});

// Fade in images in the gallery section
function fadeInGallery() {
  const galleryItems = document.querySelectorAll(".gallery-item img");
  galleryItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= windowHeight) {
          item.classList.add("active");
      }
  });
}

// Call fadeInElements and fadeInGallery when the page loads and on scroll
window.addEventListener("load", () => {
  fadeInElements();
  fadeInGallery();
});

window.addEventListener("scroll", () => {
  fadeInElements();
  fadeInGallery();
});



// Add fade-in effect to elements when they come into view
function fadeInElements() {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= windowHeight) {
          element.classList.add("active");
      }
  });
}

// Fade in images in the gallery section
function fadeInGallery() {
  const galleryItems = document.querySelectorAll(".gallery-item");
  galleryItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= windowHeight) {
          item.classList.add("active");
      }
  });
}

// Call fadeInElements and fadeInGallery when the page loads and on scroll
window.addEventListener("load", () => {
  fadeInElements();
  fadeInGallery();
});

window.addEventListener("scroll", () => {
  fadeInElements();
  fadeInGallery();
});


// Call fadeInElements and fadeInGallery when the page loads and on scroll
window.addEventListener("load", () => {
    fadeInElements();
    fadeInGallery();
});

window.addEventListener("scroll", () => {
    fadeInElements();
    fadeInGallery();
});
