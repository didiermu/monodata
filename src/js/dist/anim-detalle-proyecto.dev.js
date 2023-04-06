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
// const sliderDetalle = () => {
//     const swiper = new Swiper(".swiper", {
//         loop: true,
//         autoplay: {
//             speed: 3000,
//         },
//         pagination: {
//             el: ".swiper-pagination",
//             type: "custom",
//             clickable: true,
//             renderCustom: function (swiperContent, currentClass, totalClass) {
//                 return currentClass + " / " + totalClass;
//             },
//         },
//         navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//         },
//         // breakpoints: {
//         //     320: {
//         //         allowTouchMove: true,
//         //     },
//         //     768: {
//         //         allowTouchMove: false,
//         //     },
//         // },
//     });
// };


var swiperConfig = {
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

};
var slideModal;

var sliderResp = function sliderResp() {
  var mediaquery = window.matchMedia("(max-width: 768px)");
  var galeria = document.querySelector(".galeria");
  var modal = document.querySelector(".galeria .modal-body");
  var slider = document.querySelector(".swiper");

  if (mediaquery.matches) {
    galeria.insertAdjacentElement("afterbegin", slider);
  } else {
    modal.insertAdjacentElement("afterbegin", slider);
  }
}; // sliderResp();
// sliderDetalle();


var triggeGaleria = function triggeGaleria() {
  var slidesLink = document.querySelectorAll(".gallery .gallery-item a");
  var imagesBody = document.querySelectorAll(".gallery .gallery-item");
  var allSlidesModal = document.querySelectorAll(".modal .gallery .gallery-item");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = slidesLink[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var slidesLinkElem = _step.value;
      slidesLinkElem.removeAttribute("href");
      slidesLinkElem.setAttribute("data-bs-toggle", "modal");
      slidesLinkElem.setAttribute("data-bs-target", "#exampleModal");
    } /// agrega clase a slides por galeria

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var swiperWrap = document.querySelector(".swiper-wrapper");
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = allSlidesModal[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var allSlidesModalElem = _step2.value;
      allSlidesModalElem.classList.add(allSlidesModalElem.closest(".gallery").id);
      var slide = document.createElement("div");
      slide.classList.add("slide-gale", allSlidesModalElem.closest(".gallery").id);
      swiperWrap.append(slide);
      var imgSlide = allSlidesModalElem.querySelector("img");
      slide.append(imgSlide);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    var _loop = function _loop() {
      var imagesBodyElem = _step3.value;

      imagesBodyElem.onclick = function () {
        slideModal = new Swiper(".swiper", swiperConfig);
        var idGaleria = imagesBodyElem.closest(".gallery").id;
        var selectSlides = document.querySelectorAll(".modal ." + idGaleria);
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = selectSlides[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var selectSlidesElem = _step5.value;
            selectSlidesElem.classList.add("swiper-slide");
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
              _iterator5["return"]();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }
      };
    };

    for (var _iterator3 = imagesBody[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  document.querySelector(".modal .btn-close").onclick = function () {
    slideModal.destroy(true, true);
    var slideModalNew = document.querySelectorAll(".slide-gale");
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = slideModalNew[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var slideModalNewElem = _step4.value;
        slideModalNewElem.classList.remove("swiper-slide");
        slideModalNewElem.removeAttribute("role");
        slideModalNewElem.removeAttribute("aria-label");
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
          _iterator4["return"]();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }
  };
};

triggeGaleria(); // window.addEventListener("resize", () => {
// sliderResp();
// sliderDetalle();
// });
//////////////////////// GRID IMAGES

var imagenes = document.querySelectorAll(".gallery img");
var _iteratorNormalCompletion6 = true;
var _didIteratorError6 = false;
var _iteratorError6 = undefined;

try {
  for (var _iterator6 = imagenes[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
    var imagenesElem = _step6.value;

    if (imagenesElem.getAttribute("width") > 1210) {
      imagenesElem.closest(".gallery-item").classList.add("imgMax");
    }
  }
} catch (err) {
  _didIteratorError6 = true;
  _iteratorError6 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
      _iterator6["return"]();
    }
  } finally {
    if (_didIteratorError6) {
      throw _iteratorError6;
    }
  }
}

setTimeout(function () {
  var elem = document.querySelector(".gallery");
  var iso = new Isotope(elem, {
    // options
    itemSelector: ".gallery-item",
    layoutMode: "masonry"
  });
}, 500); //////////////////////// CLASS BODY

var urlPage = function urlPage() {
  if (window.location.pathname.includes("proyecto")) {
    document.querySelector("body").classList.add("body-projects");
  }

  if (window.location.pathname.split("/")[1] == "en") {
    document.querySelector(".galeria").classList.add("galeria-en");
  }
};

urlPage();
//# sourceMappingURL=anim-detalle-proyecto.dev.js.map
