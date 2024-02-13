function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
init()

var crsr= document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
 crsr.style.left =dets.x+20+"px"
 crsr.style.top =dets.y+20+"px"
})

 var tl = gsap.timeline({
    scrollTrigger:{
    trigger:".page1 h1",
    scroller:".main",
    start:"top 27%",
    end:"top 0",
    scrub:3
    }
})
tl.to(".page1 h1",{
        x:-100,
      
},"anim") 
tl.to(".page1 h2",{
    x:100
},"anim")
tl.to(".page1 video",{
   width:"90%"
},"anim")


var tl2 = gsap.timeline({
    scrollTrigger:{
    trigger:".page1 h1",
    scroller:".main",
    start:"top -115%",
    end:"top -130",
    scrub:3
    }
})
tl2.to(".main",{
    backgroundColor:"#fff"
})


var tl3 = gsap.timeline({
    scrollTrigger:{
    trigger:".page1 h1",
    scroller:".main",
    start:"top -500%",
    end:"top -520",
    scrub:3
    }
})
tl3.to(".main",{
    backgroundColor:"#0F0D0D"
})

var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")
h4.forEach(function(elem) {
   elem.addEventListener("mouseenter",function(){
    purple.style.display = "block"
    purple.style.opacity ="1"
    purple.style.transition ="all ease-out 0.9s"
  })
  elem.addEventListener("mouseleave",function(){
    purple.style.display = "none"
    purple.style.opacity ="0"
    purple.style.transition ="all ease-out 0.9s"
  })

  
});

// var boxes = document.querySelectorAll(".box")
// boxes.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(){
//         var att = elem.getAttribute("data-image")
//         crsr.style.width = "470px"
//         crsr.style.height = "370px"
//         crsr.style.borderRadius = "0"
//         crsr.style.backgroundImage = `url(${att})`
// var diffe = dets.clientY - elem.getBoundingClientRect();


//     })
//     elem.addEventListener("mouseleave",function(){
//         elem.style.backgroundColor = "transparent"
//         crsr.style.width = "20px"
//         crsr.style.height = "20px"
//         crsr.style.borderRadius = "50%"
//         crsr.style.backgroundImage = `none`
//     })
// })
