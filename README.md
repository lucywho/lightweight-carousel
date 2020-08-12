# Simple lightweight carousel

This is a straightforward carousel written in vanilla JavaScript. Slides are shown one at a time from right-to-left horizontally, with a gentle fade-out/fade-in animation on transition.

Instructions on how to switch to left-to-right or vertical display are given below.

Navigation dots allow the user to switch between slides at will, and arrows allow navigation back and forth one slide at a time. Clicking is disabled during transition to prevent race conditions developing.

## Basic structure

### index.html

#### head

Links to carousel.css and style.css

#### body

`#carousel` div includes slides (`.carousel-slide`) and navigation icons (`#dots`)

The divs with class `.carousel-slide` are the moving containers. Each `.carousel-slide` div encloses a content div; this is where you put your text and images. For this example, the content class is styled in `style.css`.

The `#dots` div is a container holding individual divs for each navigation dot (`.dot`). NOTE: this example code has four slides, and hence four dots. You will need to manually add or remove `.dot` divs to match the number of slides you have.

This container also includes the forward and back arrows in this example, however the code handling the arrows is independent of the `#dots` container so you can move them elsewhere on your page if you prefer.

#### script

Link to carousel.js

### carousel.css

This stylesheet styles the carousel elements.

`#carousel`: currently styled so that slides will appear centered in the container, and navigation dots display under slides. You can remove or restyle the border and height to fit your own project.

`.carousel-slide`: height is set to 95% to allow room for the navigation dots (set to height: 5%). Adjust these figures to your own preferences.

`#carousel .onscreen` and `#carousel .offscreen-left`: control the transitions and fade animations.

-   to make slides appear faster or slower, change the `transition-duration` in these sections (NOTE: for a smooth carousel effect, the `transition-duration` should be the same in both cases)

*   to edit the timing of the fade effect, change the second element of the `animation` line. This is currently set to 4 seconds. (In my opinion, the effect works best when the duration is the same as the transition duration.)
*   to remove the fade effect, delete the `animation` line in both sections.

`@keyframes fadeIn` and `fadeOut` sets the fade animations.

`#dots` : styles the container for the navigation dots. Currently set to sit horizontally at the bottom on the carousel div. There are instructions below on how to set it vertically the right hand side.

`.dots`, `.fill-in`, and `.arrow` style the navigation icons. You may prefer to move these to your main stylesheet.

### carousel.js

This script handles the timing of the carousel, and the behaviour of the navigation dots.

-   Line 10 sets how long the first slide is visible for when the page loads (currently 7s)
-   Line 47 set the timing for subsequent slides (also 7s)

Note that this is the _total_ time that the slide is visible, including the transition time. The transition time is 4s (set in carousel.css), so each slide is stationary for 3s. Adjust these timings to suit your own content.

## Adjust direction of carousel

### slides move left-to-right

Make changes in carousel.css:

```
.carousel-slide {
transform: translateX(-100%);
}

#carousel .offscreen-left {
transform: translateX(100%);
}
```

### slides move vertically

Make changes in carousel.css:

#### bottom to top

```
.carousel-slide {
transform: translateY(100%);
}

#carousel .offscreen-left {
transform: translateY(-100%);
}
```

#### top to bottom

```
.carousel-slide {
transform: translateY(-100%);
}

#carousel .offscreen-left {
transform: translateY(100%);
}
```

(Note: if you set .carousel-slide to translateX and .offscreen-left to translateY, your slides will slide in and then drop out!)

### align navigation dots vertically

If you have a vertical carousel, it makes sense to also have the dots aligned vertically

```
#carousel {
flex-direction: row;
}

.carousel-slide {
width: 95%;
height: 100%;
}

#dots {
~~bottom: 0;~~
right: 0;
flex-direction: column;
width: 5%;
height: 100%;
}
```

You'll probably also want to change the arrow symbols in `index.html` (lines 27 and 32) to up and down arrows.
