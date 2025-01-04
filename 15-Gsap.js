var tl = gsap.timeline()

tl.from("#nav h3",{
    y:-50,
    delay:0.2,
    duration:0.6,
    opacity:0,
    stagger:0.8
})

tl.from("#main h1",{
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.3
})

tl.from("img",{
     x:100,
     opacity:0,
     rotate:20,
     duration:1,
     stagger:0.7
})