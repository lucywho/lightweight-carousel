# Simple lightweight carousel

This is a straightforward carousel written in vanilla JavaScript. Slides are shown one at a time from right-to-left horizontally, with a gentle fade-out/fade-in animation on transition.

Instructions on how to switch to left-to-right or vertical display are given below.

Navigation dots allow the user to switch between slides at will. Clicking is disabled during transition to prevent race conditions developing.

## Basic structure

### index.html

#### head

Links to carousel.css and style.css

#### body

carousel div includes slides (.carousel-slide) and navigation dots (#dots)

The divs with class carousel-slide are the moving containers. Each carousel-slide div encloses a content div; this is where you put your text and images. The content class is styled in style.css.

The #dots container contains individual divs for each dot (.dot). NOTE: this example code has four slides, and hence four dots. You will need to manually add or remove dot divs to match the number of slides you have.

#### script

Link to carousel.js

### carousel.css

This stylesheet styles the carousel elements.

`carousel`: currently styled so that slides will appear centered in the container, and navigation dots display under slides. You can remove or restyle the border and height to fit your own project.

`carousel-slide`: height is set to 95% to allow room for the navigation dots (set to height: 5%). Adjust these figures to your own preferences.

`#carousel .onscreen` and `#carousel .offscreen-left`: control the transitions and fade animations.

-   To remove the fade effect, delete the `animation` line in both sections.
-   to make slides appear faster or slower, change the `transition-duration` in both sections (NOTE: for a smooth carousel effect, the transition-duration should be the same in both cases)

`@keyframes fadeIn` and `fadeOut` : sets the fade animations.

`#dots` : styles the container for the navigation dots. Currently set to sit at the bottom on the carousel div.

`.dots` and `.fill-in` style the navigation dots. You may prefer to move this code to your own stylesheet.

### carousel.js

This script handles the timing, transitions, and navigation dots. If you want to change the time each slide displays, edit

Line 10 for the first slide when the page loads (currently 7s)
Line 47 for subsequent slides (also 7s)

Note that this is the _total_ time that the slide is visible, including the transition time. The transition time is 4s (set in carousel.css), so the visible slide is stationary for 3s.

## Making changes

### slides move left-to-right

in carousel.css:

``
.carousel-slide {
transform: translateX(-100%);
}

#carousel .offscreen-left {
transform: translateX(100%);
}  
``

### slides move vertically

``
.carousel-slide {
transform: translateY(100%);
}

#carousel .offscreen-left {
transform: translateY(-100%);
}

Notes:

-   swap the - sign around for slides that move top-to-bottom
-   if you set .carousel-slide to translateX and .offscreen-left to translateY, your slides will slide in and then drop out!

Moving the navigation dots to a vertical position is a little more involved:

``
#carousel {
flex-direction: row;
}

.carousel-slide {
width: 95%;
height: 100%;
}

#dots {
/_bottom: 0_/
right: 0;
flex-direction: column;
width: 5%;
height: 100%;
}
``
