//User Interface Logic

//getAndEvaluateInputs() function reads answers entered by user and use branching logic to determine 
//the languge the user should learn first. It does not consider all possible combination.

function getAndEvaluateInputs() {
  const companySize = document.querySelector("input[name='companySize']:checked").value;
  const color = document.querySelector("input[name='color']:checked").value;
  const superHero = document.querySelector("input[name='superHero']:checked").value;
  const data = document.querySelector("input[name='data']:checked").value;
  const starWarsFan = document.querySelector("input[name='starWarsFan']:checked").value; 

  if(companySize === "largeCorporations") {
    document.querySelector("span#language").innerText = "C#";
  } else if (color === "red") {
    document.querySelector("span#language").innerText = "Ruby";
  } else if (superHero === "flash") {
    document.querySelector("span#language").innerText = "Swift";
  } else if (data === "yes") {
    document.querySelector("span#language").innerText = "Python";
  } else if (starWarsFan == "yes") {
    document.querySelector("span#language").innerText = "Java";
  } else {
    document.querySelector("span#language").innerText = "JavaScript";
  }

}

//handlRadio(event) function prevents the default behavior of the 'submit' event which is
//sending the input to a server and refreshing the page. In our case there is no server 
//to the send the information to. The function also calls the getAndEvaluateInputs() function.

function handleRadio(event) {
  getAndEvaluateInputs();

  //Remove class attribute to show coding language suggestion
  codingLanguage.removeAttribute("class");
  event.preventDefault();
}

//Event Listener use to guarantee that the HTML is loaded before befor running JavaScript

window.addEventListener("load", function() {
  document.getElementById("radio-form").addEventListener("submit", handleRadio);
  let form = document.querySelector("form");
  let submitBtn = document.getElementById("submitBtn");
  let resetBtn = document.getElementById("resetBtn");
  let codingLanguage = document.getElementById("codingLanguage");

  submitBtn.removeAttribute("hidden");
  
  //Remove class attribute to show the reset button

  form.addEventListener("submit", function() {
    submitBtn.setAttribute("hidden","hidden");
    resetBtn.removeAttribute("class");
  });

  //Setting class attribute to "hidden" to hide code language suggestion and
  //setting input values to null to clear previous answers.

  resetBtn.addEventListener("click", function() {
    submitBtn.removeAttribute("hidden");
    codingLanguage.setAttribute("class","hidden");
    resetBtn.setAttribute("class","hidden")
  });

});