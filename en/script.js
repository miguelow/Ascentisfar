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


document.querySelector("button").addEventListener("click", function () {
  window.location.href = "contact.html";
});

emailjs.init(config.EMAIL_PUBLIC_KEY);

const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;

    // Verificar los datos que se envían
    const formData = new FormData(this);
    console.log('Form data:', Object.fromEntries(formData));

    emailjs.sendForm(
        config.EMAIL_SERVICE_ID,
        config.EMAIL_TEMPLATE_ID,
        this
    )
    .then((response) => {
        alert('Mensaje enviado correctamente');
        form.reset();
    })
    .catch((error) => {
        alert('Ha habido un error al enviar el mensaje');
    })
    .finally(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    });
});
