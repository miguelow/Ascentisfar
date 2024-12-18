const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  setTimeout(() => {
    mobileMenu.classList.remove("-translate-x-full");
  }, 10);
});

menuClose.addEventListener("click", () => {
  mobileMenu.classList.add("-translate-x-full");
  setTimeout(() => {
    mobileMenu.classList.add("hidden");
  }, 1000);
});

function toggleAccordion(id) {

  // Convert NodeList to array
  const allContents = Array.from(document.querySelectorAll('[id^="content-"]'));
  const allIcons = Array.from(document.querySelectorAll('[id^="icon-content-"]'));

  allContents.forEach((content) => {
    const icon = document.getElementById("icon-" + content.id);
    
    if (content.id === id) {
      // Toggle the clicked accordion
      
      content.classList.toggle("hidden");
      if (icon) icon.classList.toggle("rotate-180");
    } else {
      // Close all other accordions
      
      content.classList.add("hidden");
      if (icon) icon.classList.remove("rotate-180");
    }
  });
}


// script to make the flag active
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".language-btn");

  buttons.forEach(button => {
    button.addEventListener("click", (e) => {
      // e.preventDefault(); // Prevent navigation for demo purposes

      // Reset all buttons to inactive
      buttons.forEach(btn => {
        btn.classList.remove("border-[#3d529f]"); // Remove active style
        btn.classList.add("border-[#f5f5f5]"); // Reset border style
        btn.setAttribute("data-active", "false");
      });

      // Set the clicked button to active
      button.classList.remove("border-[#f5f5f5]");
      button.classList.add("border-[#3d529f]");
      button.setAttribute("data-active", "true");
    });
  });
});
