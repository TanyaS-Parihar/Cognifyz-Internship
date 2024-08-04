const button = document.querySelector(".button");
const nextquote = document.querySelector(".nextquote");

button.addEventListener("click", () => {
  const body = document.body;
  const currentColor = body.style.backgroundColor;
  const title = document.querySelector(".title");
  if (body.style.backgroundColor == "rgb(24, 9, 39)") {
    body.style.backgroundColor = "lightblue";
    body.style.color = "black";
  } else {
    body.style.backgroundColor = "rgb(24, 9, 39)";
    body.style.color = "rgba(245, 245, 245, 0.876)";
  }
});
