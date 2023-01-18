const elTitle = document.querySelector(".title");
const formControl = document.querySelector(".form__control");
const formInput = document.querySelector("#input");
const formBtn = document.querySelector(".form__btn");
const body = document.querySelector("body");
const result = document.querySelector(".result");
body.style.backgroundColor = "gray";

elTitle.style.color = "green";
elTitle.style.textAlign = "center";
elTitle.style.marginTop = "250px";
elTitle.style.fontSize = "100px";

formInput.style.textAlign = "center";
formInput.style.width = "500px";
formInput.style.height = "50px";
formInput.style.marginLeft = "500px";
formInput.style.borderRadius = "10px";
formInput.style.display = "block";
formInput.style.backgroundColor = "green";

formBtn.style.width = "500px";
formBtn.style.height = "50px";
formBtn.style.margin = "30px 0 0 500px";
formBtn.style.borderRadius = "10px";
formBtn.style.backgroundColor = "green";
formBtn.style.color = "white";
formBtn.style.borderRadius = "solid green";
formBtn.style.fontSize = "25px";

result.style.color = "green";
result.style.textAlign = "center";
result.style.marginTop = "50px";
result.style.fontSize = "50px";
result.style.fontStyle = "italic";
result.style.fontStyle = "bold";
formControl.addEventListener("submit", function (evt) {
  evt.preventDefault();
  result.textContent = "";

  const value = Number(formInput.value);

  if (value % 3 === 0 && value % 5 === 0) {
    result.textContent = "FizzBuzz";
  } else if (value % 5 === 0) {
    result.textContent = "Buzz";
  } else if (value % 3 === 0) {
    result.textContent = "Fizz";
  } else {
    result.textContent = value;
  }
});
