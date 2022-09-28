function show() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
show()

gsap.from("#bigtext>h1", {

    trigger: "#bigtext>h1",
    scroller: "#main",
    onstart: function() {
        $('#bigtext>h1').textillate({ in: { effect: 'fadeInUpBig' } });
    }

})


document.querySelector("#backmenu").addEventListener("click", function() {
    document.querySelector("#back").style.left = "100%";
    document.querySelector("#menu>h1").style.display="initial";
})

function gsapcode(){
gsap.from("#text",{
        y:40,
        opacity:0,
        scrollTrigger:{
            trigger:"#text",
            scroller:"#main",
            start:"top 60%",
        }
})    
gsap.from("#image1",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#image1",
        start:"top 50%"
    },
    y:100,
    opacity:0,
    duration:1
})
gsap.from("#image2",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#image2",
        start:"top 50%"
    },
    y:100,
    opacity:0,
    duration:1
})
gsap.from("#image3",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#image3",
        start:"top 50%"
    },
    y:100,
    opacity:0,
    duration:1
})
gsap.from("#image4",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#image4",
        start:"top 50%"
    },
    y:100,
    opacity:0,
    duration:1
})
gsap.from("#text3",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#text3",
        start:"top 50%"
    },
    y:100,
    opacity:0,
    duration:1
})
gsap.from("#toptext h1",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#toptext h1",
        start:"top 70%"
    },
    y:100,
    opacity:0,
    duration:1
})
gsap.from("#bottom .boxes",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#bottom .boxes",
        start:"top 80%"
    },
    y:100,
    opacity:0,
    duration:1
})
gsap.from("#page7 #top",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#bottom .boxes",
        start:"top 80%"
    },
    y:100,
    opacity:0,
    duration:1
})
} 
gsapcode();

