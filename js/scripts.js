//User Interface Logic

function getAndEvaluateInputs {
  const companySize = document.querySelector("input[name='companySize']:checked").value;
  const color = document.querySelector("input[name='color']:checked").value;
  const superHero = document.querySelector("input[name='superHero']:checked").value;
  const data = document.querySelector("input[name='data']:checked").value;
  const starWarsFan = document.querySelector("input[name='starWarsFan']:checked").vlaue; 

  if(companySize === "largeCorporations") {

  } else if (color === "red") {

  } else if (superHero === "flash") {

  } else if (data === "yes") {

  } else if (starWarsFan == "yes") {

  } else {

  }
}


function handleRadio(event) {
  event.preventDefault();
  getAndEvaluateInputs();
}

window.addEventListener("load", function() {
  document.getElementById("radio-form").addEventListener("submit", handleRadio);
  let resetBtn = document.querySelector("button#reset");
  let codeLanguage = document.querySelector("div#codeLanguage")
});