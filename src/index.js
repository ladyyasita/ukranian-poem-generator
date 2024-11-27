function generatePoem(event) {
  event.preventDefault();
  let poemElement = document.querySelector("#poem");
  new Typewriter("#poem", {
    strings: "Мені тринадцятий минало",
    autoStart: true,
    delay: 15,
    cursor: "",
  });
}
let poemFormElement = document.querySelector("#poem-gen");
poemFormElement.addEventListener("submit", generatePoem);
