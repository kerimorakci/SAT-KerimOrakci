document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız!");
      form.reset();
    });
  }
});