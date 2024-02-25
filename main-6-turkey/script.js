gsap.from(".nav .nav-first a, .nav .nav-middle a, .nav .nav-last a", {
    y: -100,
    stagger: 0.2,
    delay: 0.4,
    duration: 1,
    opacity: 0,
    scale: 1,
  });
  
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
  });
  
  Shery.imageEffect(".container-1 img", {
    style: 3,
    config: {
      uFrequencyX: { value: 14.05, range: [0, 100] },
      uFrequencyY: { value: 8.26, range: [0, 100] },
      uFrequencyZ: { value: 9.09, range: [0, 100] },
      geoVertex: { range: [1, 64], value: 47.34 },
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
  

  
  gsap.from(
    ".page3 .container-2 .leftpart .serial-no h1 , .page3 .container-2 .leftpart .info h1 , .page3 .container-2 .leftpart .info p, .page3 .container-2 .leftpart .info a ",
    {
      x: -300,
      delay: 1,
      duration: 1.3,
      scale: 1,
      opacity: 0,
      stagger: 0.3,
      scrollTrigger:
        ".page3 .container-2 .leftpart .serial-no h1 , .page3 .container-2 .leftpart .info h1 , .page3 .container-2 .leftpart .info p, .page3 .container-2 .leftpart .info a ",
    }
  );
  
  gsap.from(".page3 .container-2 .rightpart img", {
    x: 300,
    delay: 1,
    duration: 1,
    scale: 1,
    opacity: 0,
    scrollTrigger: ".page3 .container-2 .rightpart img",
  });
  


  gsap.from(".page3 .container-3 .leftpart img ", {
    x: -300,
    delay: 1,
    duration: 1,
    scale: 1,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: ".page3 .container-3 .leftpart img ",
  });
  
  gsap.from(
    ".page3 .container-3 .rightpart .serial-no-2 h1, .page3 .container-3 .rightpart .info-1 h1 ,.page3 .container-3 .rightpart .info-1 p,.page3 .container-3 .rightpart .info-1 a ",
    {
      x: 300,
      delay: 1,
      duration: 1.3,
      scale: 1,
      opacity: 0,
      stagger: 0.3,
      scrollTrigger:
        ".page3 .container-3 .rightpart .serial-no-2 h1, .page3 .container-3 .rightpart .info-1 h1 ,.page3 .container-3 .rightpart .info-1 p,.page3 .container-3 .rightpart .info-1 a ",
    }
  );
  

  
  gsap.from(
    ".page3 .container-4 .leftpart .serial-no-3 h1 , .page3 .container-4 .leftpart .info-2 h1 , .page3 .container-4 .leftpart .info-2 p, .page3 .container-4 .leftpart .info-2 a ",
    {
      x: -300,
      delay: 1,
      duration: 1.3,
      scale: 1,
      opacity: 0,
      stagger: 0.3,
      scrollTrigger:
        ".page3 .container-4 .leftpart .serial-no-3 h1 , .page3 .container-4 .leftpart .info-2 h1 , .page3 .container-4 .leftpart .info-2 p, .page3 .container-4 .leftpart .info-2 a ",
    }
  );
  
  gsap.from(".page3 .container-4 .rightpart img", {
    x: 300,
    delay: 1,
    duration: 1,
    scale: 1,
    opacity: 0,
    scrollTrigger: ".page3 .container-4 .rightpart img",
  });
  
  