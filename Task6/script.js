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

const quotes = () => {
  const fetchedQuotes = fetch("https://zenquotes.io/api/random/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      document.querySelector(".quote").innerHTML = `"${data.map(
        (data) => data.q
      )}"`;
      document.querySelector(".author").innerHTML = `-${data.map(
        (data) => data.a
      )}`;
    });
};
quotes();
nextquote.addEventListener("click", () => {
  quotes();
});

const quotes2 = () => {
  const fetchedQuotes = fetch("https://zenquotes.io/api/quotes")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      document.querySelector(".q").innerHTML = `"${data.map(
        (data) => data.h + "\n"
      )}"`;
    });
};
quotes2();
