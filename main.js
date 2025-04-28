function getShortInfo() {
  const name = "Jessi";
  const age = 23;
  const isWorking = true;
  const greeting = `Hello, my name is ${name}. I am ${age} years old.`;
  const workStatus = isWorking ? "I am currently working." : "I'm not working right now.";
  const message = `${greeting} ${workStatus}`;
  alert(message);
}
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById('contactFormWrapper');

  function checkVisibility() {
    const rect = contactForm.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 100) {
      contactForm.classList.add('visible');
      window.removeEventListener('scroll', checkVisibility);
    }
  }
  window.addEventListener('scroll', checkVisibility);
  checkVisibility();
});
