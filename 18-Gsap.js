gsap.to("#page2 h1",{
    transform:"translateX(-120%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // delay:1,
        start:"top 0",
        end:"top -100%",
        scrub:5,
        pin:true
    }
})