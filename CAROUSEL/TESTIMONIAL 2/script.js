// Our clients
new Glider(document.querySelector(".testimonial-showcase"), {
  // Mobile-first defaults
  slidesToShow: 1,
  slidesToScroll: 1,
  scrollLock: true,
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next",
  },
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 775,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 1,
        slidesToScroll: 1,
        scrollLock: true,
        itemWidth: 150,
        duration: 0.25,
      },
    },
    {
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        scrollLock: true,
        itemWidth: 150,
        duration: 0.25,
      },
    },
  ],
});
const glider = new Glider(document.getElementById("glider"));

function sliderAuto(slider, miliseconds) {
  const slidesCount = slider.track.childElementCount;
  let slideTimeout = null;
  let nextIndex = 1;

  function slide() {
    slideTimeout = setTimeout(function () {
      if (nextIndex >= slidesCount) {
        nextIndex = 0;
      }
      slider.scrollItem(nextIndex++);
    }, miliseconds);
  }

  slider.ele.addEventListener("glider-animated", function () {
    window.clearInterval(slideTimeout);
    slide();
  });

  slide();
}

sliderAuto(glider, 1000);
