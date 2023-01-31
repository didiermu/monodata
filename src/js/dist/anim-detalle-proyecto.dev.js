"use strict";

var playVideo = function playVideo() {
  var cursorPoint = document.querySelector(".cursor.pause");
  var cursorPlay = document.querySelector(".cursor.play");
  var wrapVideo = document.querySelector(".hero--video");
  var options = {
    fluid: true,
    responsive: true,
    autoplay: true,
    controls: false
  };
  var player = videojs("video-desktop", options, function onPlayerReady() {// videojs.log("Your player is ready!");
  });

  cursorPoint.onclick = function () {
    console.log("pa");
    player.pause();
    cursorPoint.style.display = "none";
    cursorPlay.style.display = "block"; // cursorPoint.classList.add("hide");
    // cursorPointPlay.classList.remove("show");
  };

  cursorPlay.onclick = function () {
    player.play();
    cursorPoint.style.display = "block";
    cursorPlay.style.display = "none"; // cursorPoint.classList.add("hide");
    // cursorPointPlay.classList.remove("show");
  };
};

var objVideo = document.querySelector(".hero--video");
var objBanner = document.querySelector(".accordion-body picture");

if (document.body.contains(objVideo)) {
  playVideo();
} //////////////////////// REMOVE MODAL


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
