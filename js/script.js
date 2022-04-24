"use strict";

let testimonial = document.getElementById("testimonial"),
  testimDots = Array.prototype.slice.call(
    document.getElementById("testimonial-dots").children
  ),
  testimContent = Array.prototype.slice.call(
    document.getElementById("testimonial-content").children
  ),
  testimLeftArrow = document.getElementById("left-arrow"),
  testimRightArrow = document.getElementById("right-arrow"),
  testimSpeed = 4500,
  CurrentSlide = 0,
  CurrentActive = 0,
  testimTimer;

window.onload = function () {
  // testimonial script
  function playSlide(slide) {
    for (let k = 0; k < testimDots.length; k++) {
      testimContent[k].classList.remove("active");
      testimContent[k].classList.remove("inactive");
      testimDots[k].classList.remove("active");
    }
    if (slide < 0) {
      slide = CurrentSlide = testimContent.length - 1;
    }
    if (slide > testimContent.length - 1) {
      slide = CurrentSlide = 0;
    }
    if (CurrentActive != CurrentSlide) {
      testimContent[CurrentActive].classList.add("inactive");
    }
    testimContent[slide].classList.add("active");
    testimDots[slide].classList.add("active");

    CurrentActive = CurrentSlide;

    clearTimeout(testimTimer);

    testimTimer = setTimeout(function () {
      playSlide((CurrentSlide += 1));
    }, testimSpeed);
  }

  testimLeftArrow.addEventListener("click", function () {
    console.log("good");
    playSlide((CurrentSlide -= 1));
  });
  testimRightArrow.addEventListener("click", function () {
    console.log("hello");
    playSlide((CurrentSlide += 1));
  });

  for (let i = 0; i < testimDots.length; i++) {
    testimDots[i].addEventListener("click", function () {
      console.log("heloo");
      playSlide((CurrentSlide = testimDots.indexOf(this)));
    });
  }
  playSlide(CurrentSlide);
};
