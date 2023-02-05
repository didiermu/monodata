"use strict";

var sliderTabla = function sliderTabla(slider) {
  // const swiperOb = document.querySelector(slider);
  var swipOp = {
    // const swiper = new Swiper(slider, {
    direction: "horizontal",
    slidesPerView: 1,
    loop: true,
    allowTouchMove: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    }
  };
  var mySwiper = new Swiper(slider, swipOp); // function resetSwiper() {
  //     var swiperWrapper = $(".swiper-wrapper");
  //     var newSlides = $(".swiper-wrapper")
  //         .children(".swiper-slide")
  //         .clone(true);
  //     mySwiper.destroy();
  //     swiperWrapper.empty().append(newSlides);
  //     $(".swiper-wrapper").attr("style", "");
  //     mySwiper = new Swiper(slider, settings);
  // }
};

var swipOp = {
  // const swiper = new Swiper(slider, {
  direction: "horizontal",
  slidesPerView: 1,
  loop: true,
  allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  }
};
var mySwiper;

var tablaExp = function tablaExp() {
  var wrapItem = document.querySelector(".tabla-wrap");
  var grid_items = document.querySelectorAll(".grid-item");

  for (var index = 0; index < grid_items.length; index++) {
    grid_items[index].setAttribute("data-item", "item" + index);
  }

  gsap.registerPlugin(Flip);
  var targets = gsap.utils.toArray(".tabla-wrap_item");
  var targetsClose = gsap.utils.toArray(".grid-item .icon-close");

  function flip(target) {
    var state = Flip.getState(targets);
    var openClass = gsap.utils.toArray(".active");
    var allItems = document.querySelectorAll(".grid-item");
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = allItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var allItemsElem = _step.value;
        allItemsElem.classList.remove("active");
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

    target.closest(".grid-item").classList.add("active");
    gsap.set(openClass, {
      zIndex: 7
    });
    Flip.from(state, {
      duration: 0.25,
      absolute: true,
      ease: "power1.out",
      nested: true
    }).set(targets, {
      clearProps: "zIndex"
    });
  }

  for (var i = 0; i < targets.length; i++) {
    targets[i].addEventListener("click", function () {
      flip(this); //// AGREGA ALTO EN LA FILA FINAL

      var item12 = document.querySelector(".grid-item[data-item=item12]");
      var item13 = document.querySelector(".grid-item[data-item=item13]");
      var item14 = document.querySelector(".grid-item[data-item=item14]");
      var item15 = document.querySelector(".grid-item[data-item=item15]");

      if (item12.classList.contains("active") || item13.classList.contains("active") || item14.classList.contains("active") || item15.classList.contains("active")) {
        wrapItem.classList.add("lastItem");
      } else {
        wrapItem.classList.remove("lastItem");
      } // WRAP ACTIVE


      document.querySelector(".tabla-wrap").classList.add("wrapActive"); // ACTIVE SLIDER

      mySwiper = new Swiper(this.querySelector(".swiper"), swipOp);
    });
  } // close


  function closeFlip(target) {
    var state = Flip.getState(targets);
    var openClass = gsap.utils.toArray(".active");
    target.closest(".grid-item").classList.remove("active");
    gsap.set(openClass, {
      zIndex: 7
    });
    Flip.from(state, {
      duration: 0.25,
      absolute: true,
      ease: "power1.out",
      nested: true
    }).set(targets, {
      clearProps: "zIndex"
    });
  }

  for (var i = 0; i < targetsClose.length; i++) {
    targetsClose[i].addEventListener("click", function () {
      closeFlip(this);
      wrapItem.classList.remove("lastItem"); /// slider

      mySwiper.destroy(true, true);
    });
  } /// CERRA ITEM
  // const itemClose = document.querySelectorAll(".grid-item .icon-close");
  // for (const itemCloseElem of itemClose) {
  //     itemCloseElem.addEventListener("click", () => {
  //         itemCloseElem.closest(".grid-item").classList.remove("active");
  //     });
  // }

};

tablaExp();
//# sourceMappingURL=anim-exp-new.dev.js.map
