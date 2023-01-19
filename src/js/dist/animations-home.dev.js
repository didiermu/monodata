"use strict";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

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

cursor();
playVideo(); // cursorPlay();

var animTxt = function animTxt(elem, texto) {
  // const dataApi = document.querySelectorAll(
  //     ".info--api--content.info--api--content h6"
  // );
  // for (const dataApiElem of dataApi) {
  //     console.log(dataApiElem.textContent);
  //     let tween = gsap.to(".info--api--content h6", {
  //         text: {
  //             value: dataApiElem.textContent,
  //         },
  //         duration: 5,
  //         delay: 1,
  //         ease: "none",
  //     });
  // }
  gsap.to(elem, {
    duration: 2,
    text: {
      value: texto,
      newClass: "class2" // delimiter: " ",

    },
    ease: "none"
  });
}; // animTxt("#one", "Ciudad de México 19:10 h");
// animTxt("#two", "Elevación 2.240 m");
// animTxt("#tre", "Superficie 1.485 km²");
// animTxt("#fou", "22 °C");
// animTxt("#fiv", "Viento del N a 18 km/h");
// animTxt("#six", "Humedad 30%");


var hoverServices = function hoverServices() {
  var itemsServices = document.querySelectorAll(".servicios__item");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var itemsServicesElem = _step.value;

      itemsServicesElem.onmouseover = function () {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = itemsServices[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _itemsServicesElem = _step2.value;

            _itemsServicesElem.classList.remove("active", "onactive");
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

        itemsServicesElem.classList.add("active");
      };
    };

    for (var _iterator = itemsServices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
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
};

var objLoad = function objLoad(elem) {
  gsap.fromTo(elem, {
    rotate: 360
  }, {
    duration: 3,
    rotate: 0,
    stagger: 0.1,
    ease: "power2.out"
  });
};

var objParallaxArray = function objParallaxArray(elem) {
  gsap.utils.toArray(elem).forEach(function (e) {
    gsap.fromTo(e, {
      opacity: 0,
      yPercent: -1000
    }, {
      duration: 1,
      opacity: 1,
      yPercent: 0,
      stagger: 0.1,
      delay: 1,
      ease: "power3.out"
    });
  });
};

var objLoadVertical = function objLoadVertical(elem) {
  var boletosArr = gsap.utils.toArray(elem);
  boletosArr.forEach(function () {
    gsap.fromTo(boletosArr, {
      opacity: 0,
      yPercent: -100
    }, {
      duration: 0.5,
      opacity: 1,
      yPercent: 0,
      stagger: 0.1,
      delay: 0.05,
      ease: "ease"
    });
  });
};

var objLoadVerticalLetter = function objLoadVerticalLetter(elem) {
  var boletosArr = gsap.utils.toArray(elem);
  boletosArr.forEach(function () {
    gsap.fromTo(boletosArr, {
      opacity: 0,
      yPercent: 100
    }, {
      duration: 0.5,
      opacity: 1,
      yPercent: 0,
      stagger: 0.3,
      delay: 0.1,
      ease: "ease"
    });
  });
};

var objText = function objText(elem) {
  var boletosArr = gsap.utils.toArray(elem);
  boletosArr.forEach(function () {
    gsap.fromTo(boletosArr, {
      opacity: 0,
      yPercent: 50
    }, {
      duration: 1,
      opacity: 1,
      yPercent: 0,
      stagger: 1,
      delay: 1,
      ease: "power3.out"
    });
  });
};

var objParallax = function objParallax(trigger, elem, posicion) {
  gsap.from(elem, {
    yPercent: 0
  });
  gsap.to(elem, {
    yPercent: posicion,
    ease: "none",
    scrollTrigger: {
      trigger: trigger,
      start: "top center",
      end: "+=300",
      scrub: 1,
      // toggleActions: "restart pause reverse pause",
      // markers: true,
      immediateRender: false
    }
  });
};

var animContenido = function animContenido(trigger, elem) {
  var controller = new ScrollMagic.Controller();
  var info = new ScrollMagic.Scene({
    triggerElement: trigger,
    triggerHook: 0.9,
    duration: 600
  }).setTween(elem, 0.5, {
    yPercent: -100
  } // TweenMax.fromTo(
  //     elem,
  //     1,
  //     {
  //         opacity: 0,
  //         yPercent: 10,
  //     },
  //     {
  //         opacity: 1,
  //         yPercent: 0,
  //         delay: 0.5,
  //     }
  // )
  ).addTo(controller);
};

var animContenidoCorto = function animContenidoCorto(trigger, elem) {
  var controller = new ScrollMagic.Controller();
  var info = new ScrollMagic.Scene({
    triggerElement: trigger,
    triggerHook: 0.9
  }).setTween(TweenMax.fromTo(elem, 1, {
    opacity: 0,
    yPercent: 50
  }, {
    opacity: 1,
    yPercent: 0,
    delay: 0.5
  })).on("start", function () {
    anime({
      targets: ".char",
      opacity: [0, 1],
      translateY: 30,
      delay: anime.stagger(5),
      easing: "cubicBezier(.71,-0.77,.43,1.67)"
    });
  }).addTo(controller);
};

var animContenidoImage = function animContenidoImage(trigger, elem) {
  var controller = new ScrollMagic.Controller();
  var info = new ScrollMagic.Scene({
    triggerElement: trigger,
    triggerHook: 0.6,
    duration: 600
  }).setTween(elem, 0.5, {
    scale: 1
  }, {
    scale: 1.5
  } // TweenMax.fromTo(
  //     elem,
  //     1,
  //     {
  //         opacity: 0,
  //         yPercent: 10,
  //     },
  //     {
  //         opacity: 1,
  //         yPercent: 0,
  //         delay: 0.5,
  //     }
  // )
  ).addTo(controller);
};

animContenidoImage(".servicios--pic", ".servicios--pic img");

var objParallaxSimple = function objParallaxSimple(trigger, elem) {
  var boletosArr = gsap.utils.toArray(elem);
  boletosArr.forEach(function (target) {
    gsap.fromTo(boletosArr, {
      opacity: 0,
      yPercent: 50
    }, {
      duration: 2,
      opacity: 1,
      yPercent: 0,
      stagger: 0.3,
      ease: "ease",
      delay: 2,
      scrollTrigger: {
        trigger: trigger,
        scrub: 1,
        start: "+=100 center",
        end: "center +=700",
        toggleActions: "restart pause reverse pause",
        immediateRender: false // markers: true,

      }
    });
  });
}; // animContenido(".hero--video", ".hero h1");


objLoad(".header img");
objLoadVertical(".header ul");

var animLetter = function animLetter() {
  splt({
    target: ".hero--contain .splt"
  });
};

var animLetterDos = function animLetterDos() {
  splt({
    target: ".projects .splt"
  });
}; // animLetter();
// animLetterDos(); // ok pero revisar para quqe no se corten las palabras


objLoadVerticalLetter(".hero--contain .splt"); // objText(".hero h1");

animContenidoCorto(".projects", ".projects h2"); // objParallaxArray(".papers__item");
// objParallaxSimple(".contact", ".contact--access *");
// objParallaxSimple(".contact", ".contact--data .col-lg-3");

hoverServices();
var swiper = new Swiper(".swiper-mobile", {
  direction: "horizontal",
  slidesPerView: 1,
  allowTouchMove: true,
  loop: true,
  // cssMode: true,
  effect: "fade",
  fadeEffect: {
    crossFase: true // transformEl: ".swiper-slide",

  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets"
  }
});
//# sourceMappingURL=animations-home.dev.js.map
