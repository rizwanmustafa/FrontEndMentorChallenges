import solvedChallenges from "./solved-challenges.js";

const rootElement = document.querySelector("div");

const getImageElement = (imagePath) => {
  const imageElement = document.createElement("img");
  imageElement.src = imagePath;
  imageElement.width = 500;
  imageElement.height = 250;
  imageElement.style.objectFit = "cover";
  imageElement.classList.add("challengeImg");
  return imageElement;
};

const getTitleElement = (title) => {
  const titleElement = document.createElement("h2");
  titleElement.classList.add("challengeTitle");
  titleElement.innerText = title;

  return titleElement;
}

const getChallengeElement = (challenge) => {
  const element = document.createElement("a");
  element.href = challenge.route + "/";
  element.target = "_blank";
  element.classList.add("challenge");
  const imagePath = challenge.screenshotName;
  element.appendChild(getImageElement(imagePath));
  console.log(challenge.title);
  element.appendChild(getTitleElement(challenge.title));


  return element;
}

const challengesElements = solvedChallenges.map(challenge => {
  return getChallengeElement(challenge);
});

challengesElements.forEach(element => rootElement.appendChild(element))

if (rootElement === null || rootElement === undefined) {
  console.error("No root element found!");
}