//User Interface Logic

function handleRadio(event) {
  event.preventDefault();
  const companySize = document.querySelector("input[name='companySize']:checked").value;
  const color = document.querySelector("input[name='color']:checked").value;
  const superHero = document.querySelector("input[name='superHero':checked").value;
  const data = document.querySelector("input[name='data':checked").value;
  const starWarsFan = document.querySelector("input[name='starWarsFan':checked").vlaue; 
}

window.addEventListener("load", function() {
  this.document.getElementById("radio-form").addEventListener("submit", handleRadio);
  let resetBtn = document.querySelector("button#reset");
  let codeLanguage = document.querySelector("div#codeLanguage")
});