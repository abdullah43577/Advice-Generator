"use strict";

class Advice {
  constructor() {
    this.blockquote = document.querySelector("blockquote");
    this.adviceHd = document.querySelector("p");
    this.dice = document.getElementById("dice");
    setInterval(this.getAdvice.bind(this), 5000);
    this.dice.addEventListener("click", this.getAdvice.bind(this));
  }

  async getAdvice() {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      if (!res.ok) throw new Error("Problem getting Quotes from server!");

      const data = await res.json();

      let adviceGenerator = data.slip;
      this.adviceHd.textContent = `ADVICE #${adviceGenerator.id}`;
      this.blockquote.textContent = `"${adviceGenerator.advice}"`;
    } catch (err) {
      console.log(err);
      this.blockquote.textContent = `something went wrong, please make sure you're connected to the internet ${err.message}`;
    }
  }
}

const advice = new Advice();
