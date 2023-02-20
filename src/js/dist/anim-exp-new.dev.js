"use strict";

gsap.registerPlugin(ScrollTrigger, TextPlugin);
var swipOp = {
  // const swiper = new Swiper(slider, {
  direction: "horizontal",
  slidesPerView: "auto",
  // allowTouchMove: true,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    // type: "bullets",
    clickable: true,
    enabled: true,
    renderBullet: function renderBullet(index, className) {
      return '<div class="' + className + '">0' + (index + 1) + "</div>";
    }
  }
};
var mySwiper;

var tablaExp = function tablaExp() {
  var wrapItem = document.querySelector(".tabla-wrap");
  var grid_items = document.querySelectorAll(".grid-item");

  for (var index = 0; index < grid_items.length; index++) {
    grid_items[index].setAttribute("data-item", "item" + index);

    if (grid_items.length >= 1) {
      var lastElement = grid_items[grid_items.length - 1];
      lastElement.classList.add("last");
    }

    if (grid_items.length >= 2) {
      var penultimo = grid_items[grid_items.length - 2];
      penultimo.classList.add("penu");
    }

    if (grid_items.length >= 3) {
      var anteultimo = grid_items[grid_items.length - 3];
      anteultimo.classList.add("ante");
    }

    if (grid_items.length >= 4) {
      var terceultimo = grid_items[grid_items.length - 4];
      terceultimo.classList.add("terc");
    }

    if (grid_items.length >= 5) {
      wrapItem.classList.add("wrap5");
    }
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
      duration: 0.5,
      absolute: true,
      ease: "power1.out",
      nested: true // stagger: 0.01,

    }).set(targets, {
      clearProps: "zIndex"
    });
  }

  for (var i = 0; i < targets.length; i++) {
    targets[i].addEventListener("click", function () {
      if (this.closest(".grid-item").classList.contains("active")) {
        return false;
      } else {
        flip(this);
      } //// AGREGA ALTO EN LA FILA FINAL ESTO HAY QUE AJUSTARLO PARA QUE NO SEA FIJO A¿LAS CLASES


      var item12 = document.querySelector(".grid-item.last");
      var item13 = document.querySelector(".grid-item.penu");
      var item14 = document.querySelector(".grid-item.ante");
      var item15 = document.querySelector(".grid-item.terc");

      if (item12.classList.contains("active") || item13.classList.contains("active") || item14.classList.contains("active") || item15.classList.contains("active")) {
        wrapItem.classList.add("lastItem");
      } else {
        wrapItem.classList.remove("lastItem");
      } // WRAP ACTIVE


      wrapItem.classList.add("wrapActive"); // ACTIVE SLIDER

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
      duration: 0.5,
      absolute: true,
      ease: "power1.out",
      nested: true // stagger: 0.01,

    }).set(targets, {
      clearProps: "zIndex"
    });
  }

  for (var i = 0; i < targetsClose.length; i++) {
    targetsClose[i].addEventListener("click", function () {
      closeFlip(this); // WRAP ACTIVE

      wrapItem.classList.remove("wrapActive");
      wrapItem.classList.remove("lastItem"); /// slider

      mySwiper.destroy(true, true);
    });
  }
};

tablaExp();
//# sourceMappingURL=anim-exp-new.dev.js.map
