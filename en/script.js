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

// function toggleAccordion(id) {
//   console.log('==id', id);
//   // Get all accordion contents and icons
//   const allContents = document.querySelectorAll('[id^="content-"]');
//   const allIcons = document.querySelectorAll('[id^="icon-content-"]');

//   console.log('==all content', allContents)

//   // Loop through all accordion items
//   allContents.forEach((content) => {
//     const icon = document.getElementById("icon-" + content.id);
//     // console.log('===content', content)
//     if (content.id === id) {
//       // Toggle the clicked accordion
//       console.log('==id', content.id);
//       content.classList.toggle("hidden");
//       icon.classList.toggle("rotate-180");
//     } else {
//       // Close all other accordions
//       console.log('==id', content.id);
//       content.classList.add("hidden");
//       icon.classList.remove("rotate-180");
//     }
//   });
// }

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


document.querySelector("button").addEventListener("click", function () {
  window.location.href = "contact.html";
});
