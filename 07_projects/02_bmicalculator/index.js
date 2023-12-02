const form = document.querySelector("form");
const guide = document.querySelector(".guide");
// this use case will give you empty value

// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === " " || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === " " || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result

    results.innerHTML = `<span>Your BMI is: ${bmi}</span>`;

    if (bmi < 18.8) {
      guide.innerHTML = `You are the under Weight`;
    } else if (bmi > 18.8 && bmi < 24.9) {
      guide.innerHTML = `You in the Normal Weight`;
    } else {
      guide.innerHTML = "You Have to Loss the Weight";
    }
  }
});
