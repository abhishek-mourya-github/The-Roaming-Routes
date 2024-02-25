Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
  });
  

gsap.from(".left_text a" ,{
    y:-100,
    duration: 0.5, 
    delay: 1,
    opacity:0,
    scale:1,
    stagger:0.3,
})

gsap.from(" .right_text a" ,{
    y:-80,
    duration: 0.9, 
    delay: 0.6,
    stagger: 0.2,
})

gsap.from(".innerbox_uppertext h1",{
    x: -100,
    duration: 0.8,
    delay:1.5,
    scale:1,
    opacity:0,
    stagger:0.1,
})

gsap.from(".innerbox_middletext p",{
    x: -100,
    duration: 0.8,
    delay:2,
    scale:1,
    opacity:0,
    stagger:0.2,
})

gsap.from(".container_left .card-home img",{
    duration:0.5,
    delay:2,
    opacity:0,
    scale:1,
    // stagger:0.2,
})

gsap.from(".container_right .card-home img",{
    duration:0.5,
    delay:2,
    opacity:0,
    scale:1,
    // stagger:0.2,
})

gsap.from(".innerbox_button button",{
    opacity : 0,
    scale: 1,
    delay: 2.5,
    duration : 0.5,
    x: -100,
})