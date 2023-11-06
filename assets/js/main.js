// svg fill
document.getElementById("my-svg").addEventListener("click", function() {
    var path = this.querySelector("path");
    path.setAttribute("fill", "red");
});
 
// client slider
$('.client-slider').owlCarousel({
  loop:true,
  margin:10,
 autoplay:true,
  nav:false,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})

// aos
AOS.init();

// swiper

var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1.4,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });