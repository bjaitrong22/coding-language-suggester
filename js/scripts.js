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

//handlRadio(event) function prevent the default behavior of the 'submit' event which is
//to try to send the input to a server and refresh the page. In our case there is no server 
//to the send the information to. The function also calls the getAndEvaluateInputs() function.

function handleRadio(event) {
  event.preventDefault();
  getAndEvaluateInputs();
}

//Event Listener use to guarantee that the HTML is loaded before befor running JavaScript

window.addEventListener("load", function() {
  document.getElementById("radio-form").addEventListener("submit", handleRadio);
  let form = document.querySelector("form");
  let resetBtn = document.getElementById("reset");
  let codingLanguage = document.getElementById("codingLanguage");
  
  //Remove class attribute to show coding language suggestion

  codingLanguage.removeAttribute("class");
 
  //Remove class attribute to show the reset button

  form.addEventListener("submit", function() {
    resetBtn.removeAttribute("class");
  });

  //Setting class attribute to "hidden" to hide code language suggestion and
  //setting input values to null to clear previous answers.

  resetBtn.addEventListener("click", function() {
    codingLanguage.setAttribute("class","hidden");
    document.querySelector("input[name='companySize']:checked").value = null;
    document.querySelector("input[name='color']:checked").value = null;
    document.querySelector("input[name='superHero']:checked").value = null;
    document.querySelector("input[name='data']:checked").value = null;
    document.querySelector("input[name='starWarsFan']:checked").value = null; 
  });

});