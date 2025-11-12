document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const button = form.querySelector("button");
      button.innerHTML = "Gönderiliyor...";
      button.disabled = true;

      setTimeout(() => {
        alert("Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.");
        form.reset();
        button.innerHTML = "Gönder";
        button.disabled = false;
      }, 1000);
    });
  }
});