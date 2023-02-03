const ratingForm = document.querySelector(".rating__form");
const submitButton = ratingForm.querySelector(".rating__button");
let score = 1;

ratingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstState = document.querySelector(".rating__state.rating__state--active");
  const secondState = document.querySelector(".rating__state:not(.rating__state--active)");
  const scoreWrapper = secondState.querySelector(".rating__result-value");

  firstState.classList.remove("rating__state--active");
  secondState.classList.add("rating__state--active");
  scoreWrapper.innerText = score;
});

ratingForm.addEventListener("click", (event) => {  
  if (!event.target.classList.contains("rating__bullet")) {
    return;
  }
  const bullet = event.target;
  const items = document.querySelectorAll(".rating__bullet");

  items.forEach((item) => item.classList.remove("rating__bullet--selected"));
  bullet.classList.add("rating__bullet--selected");
  score = bullet.dataset.value;
  submitButton.removeAttribute("disabled")
});