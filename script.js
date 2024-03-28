
const icon = document.querySelector("nav #hum");
const icon1 = document.querySelector("nav #icon");
const navigate = document.querySelector(".navigation");
const down1 = document.querySelector(".down1");
const menu = document.querySelector("nav .hum");
const hum = document.querySelector("nav #menu");

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  effect:"fadeout",
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


window.onload= function(){
 
}

// function animation (){
  
//   gsap.from(".load h1 ",{
//     y:-500,
//      duration:1.4,
//     stagger: 6,
//     scrub:true,
//      ease:"power1.out"
     
// })


// gsap.from(".page2 h1",{
//   x:400,
//   opacity:0,
//   duration:.7,
//   scrollTrigger:{
//       trigger:".page2 h1",
//       scroller:"body",
//       start:"top 100%",
//       end:"top -10%",
     
      
//     }
//   })

// gsap.from(".page2 p",{
// y:200,
// delay:.5,
// opacity:0,
// duration:.7,
// scrollTrigger:{
//     trigger:".page2 p",
//     scroller:"body",
//     start:"top 150%",
//     end:"top -5%",
   
    
//   }
// })
// gsap.from(".elem #img1",{
//   scale:3,
//   opacity:0,
//   scrollTrigger:{
//     trigger:".elem #img1",
//     scroller:"body",
//     start:"top 30%",
//     end:"top -20%",
//   }

// })
// gsap.from(".elem #img2",{
//   scale:3,
//   delay:.3,
//   opacity:0,
//   scrollTrigger:{
//   trigger:".elem #img2",
//   scroller:"body",
//   start:"top 30%",
//   end:"top -20%",
//   }

// })
// gsap.from(".elem #img3",{
//   scale:3,
//   opacity:0,
//   delay:.5,
//   scrollTrigger:{
//   trigger:".elem #img3",
//   scroller:"body",
//   start:"top 30%",
//   end:"top -20%",
//   }

// })
// gsap.from(".elem #img4",{
//   scale:3,
//   opacity:0,
//   delay:.6,
//   scrollTrigger:{
//     trigger:".elem #img4",
//     scroller:"body",
//     start:"top 30%",
//     end:"top -20%",
//   }

// })
// gsap.from(".elem #img5",{
//   scale:3,
//   opacity:0,
//   delay:.7,
//   scrollTrigger:{
//     trigger:".elem #img5",
//     scroller:"body",
//     start:"top 30%",
//     end:"top -20%",
//   }

// })
// gsap.from(".elem #img6",{
//   scale:3,
//   opacity:0,
//   delay:.8,
//   scrollTrigger:{
//   trigger:".elem #img6",
//   scroller:"body",
//   start:"top 30%",
//   end:"top -20%",
//   }

// })
// gsap.from(".page4 h4",{
//   y:500,
//   duration:1.2,
//   opacity:0,
//   scrollTrigger:{
//   trigger:".page4 h4",
//   scroller:"body",
//   start:"top 180%",
//   end:"top -20%",
//   }
// })

// gsap.from(".page4 p",{
//   y:200,
//   opacity:0,
//   duration:.7,
//   scrollTrigger:{
//   trigger:".page4 p",
//   scroller:"body",
//   start:"top 110%",
//   end:"top -20%",
     
      
//     }
// })

// gsap.from(".elem1 #img7",{
//   x:-100,
//   opacity:0,
//   scrollTrigger:{
//     trigger:".elem1 #img7",
//     scroller:"body",
//     start:"top 80%",
//     end:"top -1%",
//   }
// })
// gsap.from(".elem1 #img8",{
//   y:-100,
//   opacity:0,
//   delay:.2,
//   scrollTrigger:{
//     trigger:".elem1 #img8",
//     scroller:"body",
//     start:"top 60%",
//     end:"top -1%",
//   }
// })
// gsap.from(".elem1 #img9",{
//   x:100,
//   opacity:0,
//   delay:.3,
//   scrollTrigger:{
//     trigger:".elem1 #img9",
//     scroller:"body",
//     start:"top 80%",
//     end:"top -1%",
//   }
// })
// gsap.from(".page6 h2",{
// y:400,
//   opacity:0,
//   scrollTrigger:{
//     trigger:".page6 h2",
//     scroller:"body",
//     start:"top 170%",
//     end :"top 20%"
//   }

// })

// gsap.from(".page6 #para",{
//   y:400,
//   opacity:0,
//   delay:.4,
//   scrollTrigger:{
//     trigger:".page6 #para",
//     scroller:"body",
//     start:"top 150%",
//     end :"top 20%"
//   }
// })
// gsap.from(".page6 p",{
//   y:400,
//   opacity:0,
//   delay:.5,
//   scrollTrigger:{
//     trigger:".page6 p",
//     scroller:"body",
//     start:"top 190%",
//     end :"top 20%"
//   }
// })
// gsap.from(".elem3 #image1",{
//   scale:5,
//   opacity:0,
//   scrollTrigger:{
//     trigger:".elem3 #image1",
//     scroller:"body",
//     start:"top 40%",
//     end:"top -10%",
//   }
// })
// gsap.from(".elem3 #image2",{
//   scale:5,
//   opacity:0,
// delay:.5,
//   scrollTrigger:{
//     trigger:".elem3 #image2",
//     scroller:"body",
//     start:"top 40%",
//     end:"top -10%",
//   }
// })
// gsap.from(".elem3 #image3",{
//   scale:5,
//   opacity:0,
// delay:.8,
//   scrollTrigger:{
//     trigger:".elem3 #image3",
//     scroller:"body",
//     start:"top 40%",
//     end:"top -10%",
//   }
// })
// }
// animation ();

icon.addEventListener("click",()=>{
  navigate.classList.toggle("active")
  icon.classList.toggle("fa-times");
  // icon.classList.toggle("new");
  // down1.classList.remove("active")
  // icon1.classList.remove("new");
})

icon1.addEventListener("click",()=>{
  down1.classList.toggle("active")
  icon1.classList.toggle("new");
  down.classList.remove("active")
  icon.classList.remove("new");
  
})

hum.addEventListener("click",()=>{
  menu.classList.toggle("change");
  hum.classList.toggle("fa-fa-solid-marks")
})


