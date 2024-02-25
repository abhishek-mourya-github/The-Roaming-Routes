
Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.5,
});

Shery.textAnimate(".main-text-left h1", {
  style: 1,
  y: 30,
  delay: 0.1,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
});

gsap.from(".main-text-right h1, .main-text-right p",{
  x:600,
  duration:0.7,
  delay:0.5,
  stagger:0.1,
})


Shery.imageEffect(".container img", {
  style: 4,
  config: {
    uColor: { value: false },
    uSpeed: { value: 1, range: [0.1, 1], rangep: [1, 10] },
    uAmplitude: { value: 0.37, range: [0, 5] },
    uFrequency: { value: 2.48, range: [0, 10] },
    geoVertex: { range: [1, 64], value: 15.06 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 2.0377155160010925 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.13, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  preset: "./presets/wigglewobble.json",
});

gsap.from(".nav .nav-first a, .nav .nav-middle a, .nav .nav-last a",{
    y:-100,
    stagger:0.2,
    delay:0.5,
    duration:1,
    opacity:0,
    scale:1,
})


/*  container-1  */

gsap.from(".page2 .container-1 .leftpart .serial-no h1 , .page2 .container-1 .leftpart .info h1 , .page2 .container-1 .leftpart .info p, .page2 .container-1 .leftpart .info a ",{
    x:-300,
    delay:1,
    duration:1,
    scale:1,
    opacity:0,
    stagger:0.2,
    scrollTrigger:".page2 .container-1 .leftpart .serial-no h1 , .page2 .container-1 .leftpart .info h1 , .page2 .container-1 .leftpart .info p, .page2 .container-1 .leftpart .info a"
})

gsap.from(".page2 .container-1 .rightpart img",{
    x:300,
    delay:1,
    duration:1,
    scale:1,
    opacity:0,
    scrollTrigger:".page2 .container-1 .rightpart img"
})



/*  container-2  */



gsap.from(".page2 .container-2 .leftpart img ",{
  x:-300,
  delay:1,
  duration:1,
  scale:1,
  opacity:0,
  stagger:0.2,
  scrollTrigger:".page2 .container-2 .leftpart img "
})

gsap.from(".page2 .container-2 .rightpart .serial-no-2 h1, .page2 .container-2 .rightpart .info-1 h1 ,.page2 .container-2 .rightpart .info-1 p,.page2 .container-2 .rightpart .info-1 a ",{
  x:300,
  delay:1,
  duration:1,
  scale:1,
  opacity:0,
  scrollTrigger:".page2 .container-2 .rightpart .serial-no-2 h1, .page2 .container-2 .rightpart .info-1 h1 ,.page2 .container-2 .rightpart .info-1 p,.page2 .container-2 .rightpart .info-1 a "
})


/*  container-3  */



gsap.from(".page2 .container-3 .leftpart .serial-no-3 h1 , .page2 .container-3 .leftpart .info-2 h1 , .page2 .container-3 .leftpart .info-2 p, .page2 .container-3 .leftpart .info-2 a ",{
  x:-300,
  delay:1,
  duration:1,
  scale:1,
  opacity:0,
  stagger:0.2,
  scrollTrigger:".page2 .container-3 .leftpart .serial-no-3 h1 , .page2 .container-3 .leftpart .info-2 h1 , .page2 .container-3 .leftpart .info-2 p, .page2 .container-3 .leftpart .info-2 a "
})

gsap.from(".page2 .container-3 .rightpart img",{
  x:300,
  delay:1,
  duration:1,
  scale:1,
  opacity:0,
  scrollTrigger:".page2 .container-3 .rightpart img"
})


/*  container-4  */


gsap.from(".page2 .container-4 .leftpart img ",{
  x:-300,
  delay:1,
  duration:1,
  scale:1,
  opacity:0,
  stagger:0.2,
  scrollTrigger:".page2 .container-4 .leftpart img "
})

gsap.from(".page2 .container-4 .rightpart .serial-no-4 h1, .page2 .container-4 .rightpart .info-3 h1 ,.page2 .container-4 .rightpart .info-3 p,.page2 .container-4 .rightpart .info-3 a ",{
  x:300,
  delay:1,
  duration:1,
  scale:1,
  opacity:0,
  scrollTrigger:".page2 .container-4 .rightpart .serial-no-4 h1, .page2 .container-4 .rightpart .info-3 h1 ,.page2 .container-4 .rightpart .info-3 p,.page2 .container-4 .rightpart .info-3 a  "
})
 

/*  container-5  */


gsap.from(".page2 .container-5 .leftpart .serial-no-5 h1 , .page2 .container-5 .leftpart .info-4 h1 , .page2 .container-5 .leftpart .info-4 p, .page2 .container-5 .leftpart .info-4 a ",{
  x:-300,
  delay:1,
  duration:1,
  scale:1,
  opacity:0,
  stagger:0.2,
  scrollTrigger:".page2 .container-5 .leftpart .serial-no-5 h1 , .page2 .container-5 .leftpart .info-4 h1 , .page2 .container-5 .leftpart .info-4 p, .page2 .container-5 .leftpart .info-4 a "
})

gsap.from(".page2 .container-5 .rightpart img",{
  x:300,
  delay:1,
  duration:1,
  scale:1,
  opacity:0,
  scrollTrigger:".page2 .container-5 .rightpart img"
})


/*  container-6  */


gsap.from(".page2 .container-6 .leftpart img ",{
  x:-300,
  delay:1,
  duration:1,
  scale:1,
  opacity:0,
  stagger:0.2,
  scrollTrigger:".page2 .container-6 .leftpart img "
})

gsap.from(".page2 .container-6 .rightpart .serial-no-6 h1, .page2 .container-6 .rightpart .info-5 h1 ,.page2 .container-6 .rightpart .info-5 p, .page2 .container-6 .rightpart .info-5 a ",{
  x:300,
  delay:1,
  duration:1,
  scale:1,
  opacity:0,
  scrollTrigger:".page2 .container-6 .rightpart .serial-no-6 h1, .page2 .container-6 .rightpart .info-5 h1 ,.page2 .container-6 .rightpart .info-5 p, .page2 .container-6 .rightpart .info-5 a   "
})


/*  container-7  */


gsap.from(".page2 .container-7 .leftpart .serial-no-7 h1 , .page2 .container-7 .leftpart .info-6 h1 , .page2 .container-7 .leftpart .info-6 p, .page2 .container-7 .leftpart .info-6 a ",{
  x:-300,
  delay:1,
  duration:1,
  scale:1,
  opacity:0,
  stagger:0.2,
  scrollTrigger:".page2 .container-7 .leftpart .serial-no-7 h1 , .page2 .container-7 .leftpart .info-6 h1 , .page2 .container-7.leftpart .info-6 p, .page2 .container-7 .leftpart .info-6 a"
})

gsap.from(".page2 .container-7 .rightpart img",{
  x:300,
  delay:1,
  duration:1,
  scale:1,
  opacity:0,
  scrollTrigger:".page2 .container-7 .rightpart img"
})


