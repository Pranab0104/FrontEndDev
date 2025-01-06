gsap.from("#page1 #circle",{
    scale:0,
    rotate:720,
    delay:1,
    duration:2
})

gsap.from("#page2 #circle",{
    scale:0,
    rotate:720,
    delay:1,
    duration:2,
    scrollTrigger:{
        trigger:"#page2 #circle",
        scroller:"body",
        scrub:5
    }
})

gsap.from("#page3 #circle",{
    scale:0,
    rotate:720,
    delay:1,
    duration:2,
    scrollTrigger:{
        trigger:"#page3 #circle",
        scroller:"body",
        scrub:5
        // markers:true
    }
})