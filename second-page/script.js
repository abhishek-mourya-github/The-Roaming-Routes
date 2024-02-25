const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

Shery.imageEffect(".back", {
  style: 5,
  // debug: true,
  config: {
    a: { value: 2, range: [0, 30] },
    b: { value: 0.75, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 2.058189587488188 },
    gooey: { value: true },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  gooey: true,
});

var elems = document.querySelectorAll(".elem");

elems.forEach(function (elem) {
  var h1s = elem.querySelectorAll("h1");
  var index = 0;

  var animating = false;

  document.querySelector(".main").addEventListener("click", function () {
    if (!animating) {
      animating = true;
      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function () {
          gsap.set(this._targets[0], { top: "100%" });
          animating = false;
        },
      });

      index === h1s.length - 1 ? (index = 0) : index++;

      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
      });
    }
  });
});

var elems = document.querySelectorAll(".imagediv");

elems.forEach(function (elem) {
  var h1s = elem.querySelectorAll(".imagediv img");
  var index = 0;

  var animating = false;

  document.querySelector(".hero").addEventListener("click", function () {
    if (!animating) {
      animating = true;
      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function () {
          gsap.set(this._targets[0], { top: "100%" });
          animating = false;
        },
      });
      index === h1s.length - 1 ? (index = 0) : index++;

      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
      });
    }
  });
});

gsap.from(".heroright p", {
  x: 100,
  delay: 1,
  duration: 1,
  stagger: 0.2,
  opacity: 0,
  scale: 1,
});

document.addEventListener("mousemove", function (dets) {
  gsap.to(".cursor", {
    left: dets.x,
    top: dets.y,
  });
});

document.querySelector("#elem1").addEventListener("mouseenter", function () {
  gsap.to(".cursor", {
    transform: `translate(-50%,-50%) scale(1)`,
  });
});

document.querySelector("#elem1").addEventListener("mouseleave", function () {
  gsap.to(".cursor", {
    transform: `translate(-50%,-50%) scale(0)`,
  });
});

document.querySelector("#elem2").addEventListener("mouseenter", function () {
  gsap.to(".cursor", {
    transform: `translate(-50%,-50%) scale(1)`,
  });
});

document.querySelector("#elem2").addEventListener("mouseleave", function () {
  gsap.to(".cursor", {
    transform: `translate(-50%,-50%) scale(0)`,
  });
});

document.querySelector("#elem3").addEventListener("mouseenter", function () {
  gsap.to(".cursor", {
    transform: `translate(-50%,-50%) scale(1)`,
  });
});

document.querySelector("#elem3").addEventListener("mouseleave", function () {
  gsap.to(".cursor", {
    transform: `translate(-50%,-50%) scale(0)`,
  });
});

document.querySelector("#child1").addEventListener("mouseenter", function () {
  gsap.to(".cursor", {
    transform: `translate(-50%,-50%) scale(1)`,
  });
});

document.querySelector("#child1").addEventListener("mouseleave", function () {
  gsap.to(".cursor", {
    transform: `translate(-50%,-50%) scale(0)`,
  });
});

document.querySelector("#child2").addEventListener("mouseenter", function () {
  gsap.to(".cursor", {
    transform: `translate(-50%,-50%) scale(1)`,
  });
});

document.querySelector("#child2").addEventListener("mouseleave", function () {
  gsap.to(".cursor", {
    transform: `translate(-50%,-50%) scale(0)`,
  });
});

document.querySelector("#child3").addEventListener("mouseenter", function () {
  gsap.to(".cursor", {
    transform: `translate(-50%,-50%) scale(1)`,
  });
});

document.querySelector("#child3").addEventListener("mouseleave", function () {
  gsap.to(".cursor", {
    transform: `translate(-50%,-50%) scale(0)`,
  });
});