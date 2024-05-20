gsap.from(".first-left img",{
    x:1000,
    duration:2,
    
    
})
gsap.from(".first-right button",{
    x:80,
    duration:1.5,
    repeat:-1,
    yoyo:true,
})

gsap.from("#hero-text",{
    opacity:0,
    y:30,
    duration:2,
    delay:1,
    stagger:0.5
})

gsap.from(".second",{
    opacity:0,
    y:30,
    duration:1,
    delay:0,
    stagger:-0.5
})

gsap.from(".review-heading",{
    x:1200,
    duration:2,
    scrollTrigger:"review-heading"
})

gsap.from(".review-box-first",{
    x:1200,
    opacity:0,
    duration:1,
    delay:1.2,
    stagger:1,
    scrollTrigger:"review-box-first",
    scrub:true
})

gsap.to(".fourth-right img",{
    rotate:10,
    repeat:-1,
    yoyo:true,
    duration:1
})

gsap.from("#fourth-text",{
    y:30,
    opacity:0,
    duration:1,
    delay:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:"fourth-text",
        scroller:"body",
        markers:true,
        
        
    }
})