gsap.to("#page2 img",{
    width:"100%",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        delay:1,
        start:"top 0",
        end:"top -100%",
        scrub:3,
        pin:true
    }
})