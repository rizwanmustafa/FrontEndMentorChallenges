const cardHeadings = document.querySelectorAll(".card .heading");
const moveableImg = document.querySelector("figure img");
var openedCard;

cardHeadings.forEach(cardHeading => {
  cardHeading.addEventListener("click", () => {
    if (openedCard && openedCard !== cardHeading) {
      openedCard.classList.remove("active")
      openedCard.nextElementSibling.style.maxHeight = "0";
    }

    cardHeading.classList.toggle("active");
    const cardBody = cardHeading.nextElementSibling;

    if (cardHeading.classList.contains("active")) {
      cardBody.style.maxHeight = cardBody.scrollHeight + "px";
      openedCard = cardHeading;
    }
    else {
      cardBody.style.maxHeight = "0";
      cardBody == null;
    }
  });

  cardHeading.addEventListener("mouseenter", () => moveableImg.classList.add("active"));
  cardHeading.addEventListener("mouseleave", () => moveableImg.classList.remove("active"));
});