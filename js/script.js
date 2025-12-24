document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("serviceModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const optionSelect = document.getElementById("optionSelect");
  const modalPrice = document.getElementById("modalPrice");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".service-card.clickable").forEach(card => {
    card.addEventListener("click", () => {

      const prices = JSON.parse(card.dataset.prices);

      modalTitle.textContent = card.dataset.title;
      modalDesc.textContent = card.dataset.desc;

      optionSelect.innerHTML = "";
      Object.keys(prices).forEach(key => {
        const opt = document.createElement("option");
        opt.value = key;
        opt.textContent = key;
        optionSelect.appendChild(opt);
      });

      modalPrice.textContent = prices[optionSelect.value];
      optionSelect.onchange = () => {
        modalPrice.textContent = prices[optionSelect.value];
      };

      modal.classList.add("active");
    });
  });

  closeBtn.onclick = () => modal.classList.remove("active");
  window.onclick = e => { if (e.target === modal) modal.classList.remove("active"); };

});
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
