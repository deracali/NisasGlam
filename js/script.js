"use strict";
window.onscroll = function () {
  myFunction();
};

let navbar = document.querySelector(".navbar");
let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

ScrollReveal().reveal(".textbox-h2 .features - h2 .testimonial - h2", {
  delay: 500,
  origin: "left",
});
ScrollReveal().reveal(".hero-sec,.imgBox,.features,.features-img", {
  delay: 600,
  origin: "bottom",
});
// ScrollReveal().reveal(".text-box", { delay: 700, origin: "right" });

function imgSlider(anything) {
  document.querySelector(".bg-img-1").src = anything;
}
function changebgColor(color) {
  const header = document.querySelector(".hero-sec");
  header.style.background = color;
}
function changeColor(colors) {
  const body = document.querySelector("body");
  body.style.color = colors;
}

function menuToggle() {
  const toggleMenu = document.querySelector(".toggleMenu");
  const links = document.querySelector(".links");
  toggleMenu.classList.toggle("active");
  links.classList.toggle("active");
}

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
