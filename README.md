# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](<./screenshots/Screenshot%20(107).png>)

### Links

- Solution URL: [Solution URL here](https://your-solution-url.com)
- Live Site URL: [Live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- [Advice Slip](https://api.adviceslip.com/) - API for Advices

### What I learned

I learnt how to work with API, the day I did this challenge, so I decided to test out my newly learnt knowledge by building a simple advice generator app.

```js
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

};
```

## Author

- Website - [Abdullah Ayoola](https://github.com/abdullah43577)
- Frontend Mentor - [@abdullah43577](https://www.frontendmentor.io/profile/abdullah43577)
- Twitter - [@officialayo540](https://twitter.com/officialayo540)
