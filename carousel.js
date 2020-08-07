(function() {
    const slide = document.querySelectorAll("#carousel .carousel-slide");
    const dots = document.querySelectorAll("#dots .dot");
    const total = slide.length;
    let last = total - 1;
    let i = 0;
    let timer;
    let isTransitioning = false;

    timer = setTimeout(moveSlide, 7000);

    function moveSlide(index) {
        isTransitioning = true;
        if (typeof index == "number") {
            if (i === index) {
                return;
            } else {
                slide[i].classList.remove("onscreen");
                dots[i].classList.remove("fill-in");
                slide[i].classList.add("offscreen-left");

                i = index;

                dots[i].classList.add("fill-in");
                slide[i].classList.add("onscreen");
            }
        } else if (i < last) {
            slide[i].classList.remove("onscreen");
            dots[i].classList.remove("fill-in");
            slide[i].classList.add("offscreen-left");

            i++;

            dots[i].classList.add("fill-in");
            slide[i].classList.add("onscreen");
        } else if (i === last) {
            slide[i].classList.remove("onscreen");
            dots[i].classList.remove("fill-in");
            slide[i].classList.add("offscreen-left");

            i = 0;

            dots[i].classList.add("fill-in");
            slide[i].classList.add("onscreen");
        }

        timer = setTimeout(moveSlide, 7000);
    }

    for (let x = 0; x < dots.length; x++) {
        dots[x].addEventListener("click", clickHandler(x));
    }

    function clickHandler(dotIndex) {
        return function() {
            if (isTransitioning) {
                return;
            } else {
                for (let d = 0; d < dots.length; d++) {
                    dots[d].classList.remove("fill-in");
                }
                dots[dotIndex].classList.add("fill-in");
                clearTimeout(timer);
                moveSlide(dotIndex);
            }
        };
    }

    document
        .getElementById("right")
        .addEventListener("click", function rightClick(arrowIndex) {
            console.log("right clicked");
            if (isTransitioning) {
                return;
            } else {
                for (let d = 0; d < dots.length; d++) {
                    dots[d].classList.remove("fill-in");
                }
            }

            dots[i].classList.add("fill-in");
            clearTimeout(timer);
            moveSlide();
        });

    document
        .getElementById("left")
        .addEventListener("click", function leftClick() {
            console.log("left clicked");
        });

    document.addEventListener("transitionend", function(event) {
        if (event.target.classList.contains("offscreen-left")) {
            event.target.classList.remove("offscreen-left");
            isTransitioning = false;
        }
    });
})();
