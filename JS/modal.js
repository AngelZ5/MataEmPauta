const modal = document.getElementById("intro-modal");
const closeModalBtn = document.getElementById("close-modal");

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
