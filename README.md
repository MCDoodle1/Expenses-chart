# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

This is my first challenge on Frontend Mentor. My goal was to extend my knowledge of HTML, CSS and JavaScript. Like many self-educating starters I watch many YouTube tutorials and spend too little time coding. This is my attempt to reverse that. I chose this challenge because it did not look too complicated, but spent more time on it than I counted upon.

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page

### Screenshot

![mobile](./images/printscreen%20Mobile.png)
![desktop](./images/printscreen%20Desktop.png)

## My process
I started by making sketches of the layout and looking at dimensions and distances between elements. 
I thought about how the HTML should be structured. 
Then I thought on the use of Grid, Flex and Block elements. I decided to use Flexbox for the main structure and Grid for the barchart.
I wrote the HTML
followed by CSS
I finished by writing the Javascript code

### Built with

- HTML
- CSS
- Flexbox
- JavaScript

### What I learned

My major learnings while working through this project were Flexbox, adding HTML code with the help of JavaScript and using JS Eventlisteners. For CSS I read a lot about naming conventions and tried to apply them in my code. I also learned a lot about positioning of elements, but still find this difficult, mainly because of the many options to choose from.

Something that I wanted to change but couldn't find how was to center the div for the daily spending that pops up when you hover over a bar. If anyone knows a solution, it would be very welcome.

```html
<div class="amount">$17.45</div>
```
```css
.barchart {
    display: grid;
    grid-template-columns: repeat(7, minmax(0.5rem, 1fr)); 
    grid-column-gap: 0.75rem;
    align-items:flex-end; 
    min-height: 30vh;
}

.amount {
    display: none;
    border-radius: var(--border-radius-bars);
    background-color: var(--color-neutral-dark);
    color: var(--color-neutral-light);
    font-size: var(--fontsize-xs); 
    margin-bottom: 0.5rem;
    padding: 0.25rem; 
}
```

### Continued development

I want to continue learning about CSS and JS. In the future I also plan to learn aReact and JQuery and do projects with them. Working with the BEM methodology is also something I want to try.

### Useful resources

- [Kevin Powell](https://www.youtube.com/watch?v=rg7Fvvl3taU) 
- [Kevin Powell](https://www.youtube.com/watch?v=u044iM9xsWU) 
- [Kevin Powell](https://www.youtube.com/watch?v=3elGSZSWTbM) - This helped me understand Grid, Flexbox and the differences

## Author

- Website - [Marco Clarijs] - Working on a portfolio website. Not finished yet.
- Frontend Mentor - [@MCDoodle1](https://www.frontendmentor.io/profile/MCDoodle1)
- Twitter - [@MCS1966](https://www.twitter.com/MCS1966). Not an active user
- LinkedIn - [Marco Clarijs] (https://www.linkedin.com/feed/) 

