"use strict";

var cursor = function cursor() {
  var wrapVideo = document.querySelector(".hero--video");
  gsap.set(".cursor.play", {
    xPercent: -50,
    yPercent: -50
  });
  var ball = document.querySelector(".cursor.play");
  var pos = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  };
  var mouse = {
    x: pos.x,
    y: pos.y
  };
  var speed = 0.2;
  var xSet = gsap.quickSetter(ball, "x", "px");
  var ySet = gsap.quickSetter(ball, "y", "px");
  wrapVideo.addEventListener("mousemove", function (e) {
    mouse.x = e.x;
    mouse.y = e.y;
  });
  gsap.ticker.add(function () {
    // adjust speed for higher refresh monitors
    var dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;
    xSet(pos.x);
    ySet(pos.y);
  });
};

var playVideo = function playVideo() {
  var cursorPoint = document.querySelector(".cursor");
  var wrapVideo = document.querySelector(".hero--video");
  var options = {
    fluid: true,
    responsive: true,
    autoplay: true,
    controls: true
  };
  var player = videojs("video-desktop", options, function onPlayerReady() {// videojs.log("Your player is ready!");
  });
  var mediaquery = window.matchMedia("(max-width: 768px)"); // if (mediaquery.matches) {
  //     wrapVideo.onclick = () => {
  //         if (player.paused()) {
  //             player.play();
  //         } else {
  //             player.pause();
  //         }
  //         wrapVideo.classList.add("play");
  //         cursorPoint.classList.add("hide");
  //         // cursorPoint.remove();
  //         // cursorPointPlay.classList.toggle("show");
  //     };
  // } else {
  //     player.play();
  // }

  cursorPoint.onclick = function () {
    console.log("pa");
    player.pause();
    cursorPoint.classList.add("hide");
    cursorPointPlay.classList.remove("show");
  }; // gsap.to(".hero--video", {
  //     scrollTrigger: {
  //         trigger: ".hero",
  //         scrub: 0.7,
  //         start: "top top",
  //         end: "bottom +=400px",
  //         // end: "bottom top",
  //         ease: "power2",
  //         markers: true,
  //         onUpdate: (self) => {
  //             if (self.progress > 0.6) {
  //                 // player.play();
  //             } else {
  //                 player.pause();
  //             }
  //         },
  //     },
  // });

};

playVideo();
cursor(); //////////////////////// REMOVE MODAL

var sliderDetalle = function sliderDetalle() {
  var swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
      speed: 3000
    },
    pagination: {
      el: ".swiper-pagination",
      type: "custom",
      clickable: true,
      renderCustom: function renderCustom(swiperContent, currentClass, totalClass) {
        return currentClass + " / " + totalClass;
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    } // breakpoints: {
    //     320: {
    //         allowTouchMove: true,
    //     },
    //     768: {
    //         allowTouchMove: false,
    //     },
    // },

  });
};

var sliderResp = function sliderResp() {
  var mediaquery = window.matchMedia("(max-width: 768px)");
  var galeria = document.querySelector(".galeria");
  var modal = document.querySelector(".modal-body");
  var slider = document.querySelector(".swiper");

  if (mediaquery.matches) {
    galeria.insertAdjacentElement("afterbegin", slider);
  } else {
    modal.insertAdjacentElement("afterbegin", slider);
  }
};

sliderResp();
sliderDetalle();
window.addEventListener("resize", function () {
  sliderResp();
  sliderDetalle();
}); //////////////////////// CLASS BODY

if (window.location.pathname.includes("proyecto")) {
  document.querySelector("body").classList.add("body-projects");
}
//# sourceMappingURL=anim-detalle-proyecto.dev.js.map
