const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});





const selectedYouWant = document.querySelector(".selected-you-want");
const optionsContainerYouWant = document.querySelector(".options-container-you-want");

const optionsListYouWant = document.querySelectorAll(".option-you-want");

selectedYouWant.addEventListener("click", () => {
  optionsContainerYouWant.classList.toggle("active");
});

optionsListYouWant.forEach(o => {
  o.addEventListener("click", () => {
    selectedYouWant.innerHTML = o.querySelector("label").innerHTML;
    optionsContainerYouWant.classList.remove("active");
  });
});