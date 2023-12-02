const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const h = document.querySelector("h2");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    // or we have to write this in if conditions also

    // if (e.target.id === 'grey') {
    //     body.style.backgroundColor = e.target.id;
    //     h.innerHTML= "You Click The Grey Box"
    // }

    console.log(e.target);
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = e.target.id;
        h.innerHTML = "You Click The Grey Box";
        break;
      case "wheat":
        body.style.backgroundColor = e.target.id;
        h.innerHTML = "You Click The Wheat Box";
        break;
      case "blue":
        body.style.backgroundColor = e.target.id;
        h.innerHTML = "You Click The Blue Box";
        break;
      case "yellow":
        body.style.backgroundColor = e.target.id;
        h.innerHTML = "You Click The Yellow Box";
        break;
      default:
        break;
    }
  });
});
