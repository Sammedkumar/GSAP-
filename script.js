var menu=document.querySelector(".nav-part2 i")
var full=document.querySelector(".full-scrn-nav")



var flag=0;
menu.addEventListener("click",function(){

    if(flag==0){
        full.style.top = "0%"
        document.querySelector(".nav h1").style.color = "#222"
        document.querySelector(".nav h3").style.color = "#222"
        document.querySelector(".nav i").style.color = "#222"
        document.querySelector(".page1 h1").style.display = "none"
        document.querySelector(".page1 h2").style.display = "none"
        document.querySelector(".page1 h3").style.display = "none"
        document.querySelector(".page2 img").style.display = "none"
        flag=1;
    }else {
         full.style.top = "-100%"
         document.querySelector(".nav h1").style.color = "white"
         document.querySelector(".nav h3").style.color = "white"
         document.querySelector(".nav i").style.color = "white"
         document.querySelector(".page1 h1").style.display = "initial"
         document.querySelector(".page1 h2").style.display = "initial"
         document.querySelector(".page1 h3").style.display = "initial"
         document.querySelector(".page2 img").style.display = "initial"

         flag=0;
    }
    
})

var t1=gsap.timeline();
t1.from(".page1 h1",{
    y:60,
    opacity:0,
    duration:0.6    
})
.from(".page1 h2",{
    y:50,
    opacity:0,
    duration:0.4,
    delay:-0.1
})
.from(".page1 h3",{
    y:50,
    opacity:0,
    duration:0.4,
    delay:-0.1
})


gsap.to(".page2 img",{
    scale:1,
    scrollTrigger:{
        trigger:".page2 img",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 0%",
        scrub:2
    }
})

gsap.to(".page2 h1",{
    rotateX:0,
    opacity:1,
    scrollTrigger:{
        trigger:".page2 h1",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 20%",
        scrub:2
    }

})


var slide1h1 =document.querySelectorAll(".page6 .slide1-of-h1 h1")
slide1h1.forEach(function(val){
    gsap.to(val,{
        transform:'translate(-100%)',
        duration:4,
        scrollTrigger:{
            trigger:".page6",
            scroller:"body",
            scrub:3,


        }
    })
})

var slide2h1 =document.querySelectorAll(".page6 .slide2-of-h1 h1")

slide2h1.forEach(function(val){
    gsap.to(val,{
        transform:'translate(0%)',
        duration:4,
        scrollTrigger:{
            trigger:".page6",
            scroller:"body",
            scrub:3,
        }
    })
})

document.querySelector(".element1").addEventListener("mousemove",function(dets){
    document.querySelector(".element1 img").style.opacity = 1;
    document.querySelector(".element1 img").style.left= `${dets.x -300 }px`;
    document.querySelector(".element1 img").style.top= `${dets.y-300 }px`;

})
document.querySelector(".element1").addEventListener("mouseleave",function(dets){
    document.querySelector(".element1 img").style.opacity = 0;
    

})
document.querySelector(".element2").addEventListener("mousemove",function(dets){
    document.querySelector(".element2 img").style.opacity = 1;
    // document.querySelector(".element2 img").style.left= `${dets.x -300 }px`;         
    
    // document.querySelector(".element2 img").style.top= `${dets.y}px`;

})
document.querySelector(".element2").addEventListener("mouseleave",function(dets){
    document.querySelector(".element2 img").style.opacity = 0;
    

})
