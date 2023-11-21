
This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This project uses JSON data to switch between time modes(daily, weekly, monthly) and show relevant data on the cards. It's fully responsive and uses CSS Grid to show cards. It is built using HTML CSS and jQuery.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./Screenshot(1).png)
![](./Screenshot(2).png)


### Links

- Solution URL: (https://github.com/marko-zivanic/CardsTimeTracker)
- Live Site URL: (https://marko-zivanic.github.io/CardsTimeTracker/)

## My process

As always I bult the HTML structure first, then CSS using Grids, Then JavaScript and jQuerry, and then built the Responsive aspects, and the finishing touches.

### Built with

- HTML5
- CSS Grid
- Mobile-first workflow
- jQuerry

### What I learned

I learned to use CSS Grids, in a real example. I feel like I took my development skills to the next level. I wrote CLEAN, READABLE and USEFUL Classes(no more unused and messy structure).I added CSS Grids to my dev arsenal and I made card templates and edited the inner HTML values with jQuerry using this code:
```js
$(`.item${i + 1} .card h1`).html(data[i].timeframes.daily.current +'hrs');
      $(`.item${i + 1} .card p`).html('Yesterday - ' + data[i].timeframes.daily.previous + 'hrs');
      $('.daily-btn').addClass('selected');
      $('.weekly-btn').removeClass('selected');
      $('.monthly-btn').removeClass('selected');
```

So far I am really proud of myself for these achievements, and I will continue to improve my skills and build more projects

### Continued development

This project is finnished and I don't intend to continue developing it, but I will continue to develop and improve my skills.

### Useful resources

- [YT Video Explaning Grids](https://www.youtube.com/watch?v=EiNiSFIPIQE) This is useful for anyone researching CSS Grids.
- [YT Video Explaning Media Queries](https://www.youtube.com/watch?v=K24lUqcT0Ms) - This is an for anyone looking to build responsive Websites.

## Author

- Website - [Marko Zivanic](https://marko-zivanic.github.io/website/)

## Acknowledgments

Thanks to the makers of all informational content regarding these subjects. Without them I would struggle to build this!
