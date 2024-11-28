function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 5,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "c3a451d0adt46fobb2b9a77755f49315";
  let context =
    "You are a drama Poem expert and love to write short poems. You should generate a 6 line poem and separate each line with a <br />. Make sure to follow user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let prompt = `User instructions: Generate a Ukrainian poem about ${instructionsInput.value}`;

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a Ukrainian poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}
let poemFormElement = document.querySelector("#poem-gen-form");
poemFormElement.addEventListener("submit", generatePoem);
