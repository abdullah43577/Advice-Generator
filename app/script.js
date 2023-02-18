"use strict";

class App {
  constructor() {
    this.blockquote = document.querySelector("blockquote");
    this.adviceHd = document.querySelector("p");
    this.dice = document.getElementById("dice");
    setInterval(this.getAdvice.bind(this), 5000);
    this.dice.addEventListener("click", this.getAdvice.bind(this));
  }

  getAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => {
        if (!response.ok)
          throw new Error(
            `couldn't receive data from end server!, Error Code (${response.status})`
          );
        return response.json();
      })
      .then((data) => {
        let adviceGenerator = data.slip;
        this.adviceHd.textContent = `ADVICE #${adviceGenerator.id}`;
        this.blockquote.textContent = `"${adviceGenerator.advice}"`;
      })
      .catch((err) => {
        console.error(`something went wrong, ${err.message}`);
        this.blockquote.textContent = `something went wrong, please make sure you're connected to the internet`;
      });
  }
}

const app = new App();
