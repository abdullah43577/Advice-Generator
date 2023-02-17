"use strict";
const blockquote = document.querySelector("blockquote");
const adviceHd = document.querySelector("p");
const dice = document.getElementById("dice");

const getAdvice = function () {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      if (!response.ok)
        throw new Error("couldn't receive data from end server!");
      return response.json();
    })
    .then((data) => {
      let adviceGenerator = data.slip;
      adviceHd.textContent = `ADVICE #${adviceGenerator.id}`;
      blockquote.textContent = `"${adviceGenerator.advice}"`;
    })
    .catch((err) => {
      console.error(`something went wrong, ${err.message}`);

      blockquote.textContent = `something went wrong, ${err.message}`;
    });
};

setInterval(function () {
  getAdvice();
}, 5000);

dice.addEventListener("click", getAdvice);
