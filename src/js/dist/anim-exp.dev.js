"use strict";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

var animTxt = function animTxt(elem, texto) {
  gsap.to(elem, {
    duration: 2,
    text: {
      value: texto,
      newClass: "class2" // delimiter: " ",

    },
    ease: "none"
  });
};

animTxt("#one", "Ciudad de México 19:10 h");
animTxt("#two", "Elevación 2.240 m");
animTxt("#tre", "Superficie 1.485 km²");
animTxt("#fou", "22 °C");
animTxt("#fiv", "Viento del N a 18 km/h");
animTxt("#six", "Humedad 30%"); ///////// TABLA

var isotopo = function isotopo() {
  var $grid = $(".grid").isotope({
    itemSelector: ".grid-item",
    percentPosition: true,
    layoutMode: "masonry" // masonry: {
    //     horizontalOrder: true,
    // },

  });
  $grid.on("click", ".grid-item", function () {
    // $(".grid-item").removeClass("active");
    $grid.isotope("layout");
    $(this).addClass("active"); // const grid_items = document.querySelectorAll(".grid-item");
    // let item_active = document.querySelector(
    //     ".grid-item[data-item='item0']"
    // );
    // if (item_active.classList.contains("active")) {
    //     for (const grid_itemsElem of grid_items) {
    //         grid_itemsElem.classList.add("first");
    //         grid_itemsElem.removeAttribute("style");
    //         // let top_item = grid_itemsElem.offsetTop;
    //         // grid_itemsElem.style.top = top_item + 255 + "px";
    //     }
    // } else {
    //     $grid.isotope("updateSortData").isotope();
    // }
  });
}; // isotopo();


var orderItems = function orderItems() {
  var grid_items = document.querySelectorAll(".tabla-wrap_item");
  var close_item = document.querySelectorAll(".icon-close");

  for (var index = 0; index < grid_items.length; index++) {
    grid_items[index].closest(".grid-item").setAttribute("data-item", "item" + index);
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = close_item[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var close_itemElem = _step.value;

      close_itemElem.onclick = function () {
        // for (const grid_itemsElem of grid_items) {
        //     // grid_itemsElem.classList.remove("first");
        //     grid_itemsElem.closest(".grid-item").classList.remove("active", "first");
        // }
        var removeArray = function removeArray(clase) {
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = grid_items[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var grid_itemsElem = _step3.value;
              grid_itemsElem.closest(".grid-item").classList.remove(clase);
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
        };

        var condicion = function condicion(elem, clase) {
          if (document.querySelector(".grid-item[data-item='item" + elem + "']").classList.contains("active")) {// toggleArray(clase);
          } else {
            removeArray(clase);
          }
        };

        condicion("0", "first");
        condicion("1", "sec");
        condicion("2", "ter");
        condicion("3", "cua");
        condicion("4", "cin");
        condicion("5", "sei");
        condicion("6", "sie");
        condicion("7", "och");
        condicion("8", "nue");
        condicion("9", "die");
        condicion("10", "once");
        condicion("11", "doce");
        condicion("12", "trec");
        condicion("13", "cato");
        condicion("14", "quin");
        condicion("15", "diesi");
      };
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

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    var _loop = function _loop() {
      var grid_itemsElem = _step2.value;

      grid_itemsElem.onclick = function () {
        grid_itemsElem.closest(".grid-item").classList.add("active");

        var toggleArray = function toggleArray(clase) {
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = grid_items[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var _grid_itemsElem = _step4.value;

              _grid_itemsElem.closest(".grid-item").classList.add(clase);
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
        }; // const removeArray = (clase) => {
        //     for (const grid_itemsElem of grid_items) {
        //         grid_itemsElem.classList.remove(clase);
        //     }
        // };


        var condicion = function condicion(elem, clase) {
          if (document.querySelector(".grid-item[data-item='item" + elem + "']").classList.contains("active")) {
            toggleArray(clase);
          } // else {
          //     removeArray(clase);
          // }

        };

        condicion("0", "first");
        condicion("1", "sec");
        condicion("2", "ter");
        condicion("3", "cua");
        condicion("4", "cin");
        condicion("5", "sei");
        condicion("6", "sie");
        condicion("7", "och");
        condicion("8", "nue");
        condicion("9", "die");
        condicion("10", "once");
        condicion("11", "doce");
        condicion("12", "trec");
        condicion("13", "cato");
        condicion("14", "quin");
        condicion("15", "diesi");
      };
    };

    for (var _iterator2 = grid_items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      _loop();
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
};

var clicTabla = function clicTabla() {
  var sliderTabla = function sliderTabla(slider) {
    var swiper = new Swiper(slider, {
      direction: "horizontal",
      // enabled: false,
      slidesPerView: 1,
      allowTouchMove: true,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
      }
    });
    swiper.destroy(true, true);
  };

  var sliderTablaDestroy = function sliderTablaDestroy(sliderDes) {
    var swiperDes = new Swiper(sliderDes, {
      direction: "horizontal",
      enabled: false,
      allowTouchMove: false
    });
    swiperDes.destroy(true, true);
  }; ///// open


  var grid_items = document.querySelectorAll(".tabla-wrap_item");

  for (var index = 0; index < grid_items.length; index++) {
    grid_items[index].closest(".grid-item").setAttribute("data-item", "item" + index);
  }

  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    var _loop2 = function _loop2() {
      var grid_itemsElem = _step5.value;

      grid_itemsElem.onclick = function () {
        var sliderItem = grid_itemsElem.querySelector(".swiper");
        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
          for (var _iterator7 = grid_items[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var _grid_itemsElem3 = _step7.value;

            _grid_itemsElem3.closest(".grid-item:not(.active)").classList.add("pause");
          }
        } catch (err) {
          _didIteratorError7 = true;
          _iteratorError7 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
              _iterator7["return"]();
            }
          } finally {
            if (_didIteratorError7) {
              throw _iteratorError7;
            }
          }
        }

        grid_itemsElem.closest(".grid-item").classList.add("active");

        var toggleArray = function toggleArray(clase) {
          var _iteratorNormalCompletion8 = true;
          var _didIteratorError8 = false;
          var _iteratorError8 = undefined;

          try {
            for (var _iterator8 = grid_items[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
              var _grid_itemsElem2 = _step8.value;

              _grid_itemsElem2.closest(".grid-item").classList.add(clase);
            }
          } catch (err) {
            _didIteratorError8 = true;
            _iteratorError8 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
                _iterator8["return"]();
              }
            } finally {
              if (_didIteratorError8) {
                throw _iteratorError8;
              }
            }
          }
        };

        var condicion = function condicion(elem, clase) {
          if (document.querySelector(".grid-item[data-item='item" + elem + "']").classList.contains("active")) {
            toggleArray(clase);
          } else {// removeArray(clase);
            // console.log("no");
          }
        };

        condicion("0", "first");
        condicion("1", "sec");
        condicion("2", "ter");
        condicion("3", "cua");
        condicion("4", "cin");
        condicion("5", "sei");
        condicion("6", "sie");
        condicion("7", "och");
        condicion("8", "nue");
        condicion("9", "die");
        condicion("10", "once");
        condicion("11", "doce");
        condicion("12", "trec");
        condicion("13", "cato");
        condicion("14", "quin");
        condicion("15", "diesi");
        var swiper = new Swiper(sliderItem, {
          direction: "horizontal",
          // enabled: false,
          allowTouchMove: true,
          pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true
          }
        });
        setTimeout(function () {
          window.scroll(0, grid_itemsElem.closest(".grid-item").offsetTop + 400);
        }, 100); // sliderTabla(sliderItem);
      }; /// TOGGLE
      // const grid_items_open = document.querySelectorAll(".pause");
      // for (const grid_items_openElem of grid_items_open) {
      //     grid_items_openElem.onclick = () => {
      //         grid_items_openElem.classList.remove("active");
      //     };
      // }

    };

    for (var _iterator5 = grid_items[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      _loop2();
    } ///// close

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

  var close_item = document.querySelectorAll(".icon-close");
  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    var _loop3 = function _loop3() {
      var close_itemElem = _step6.value;

      // const swiper = new Swiper(close_itemElem, {
      //     direction: "horizontal",
      //     slidesPerView: 1,
      //     allowTouchMove: false,
      // });
      close_itemElem.onclick = function () {
        var sliderItemDes = close_itemElem.closest(".grid-item").querySelector(".swiper");
        var _iteratorNormalCompletion9 = true;
        var _didIteratorError9 = false;
        var _iteratorError9 = undefined;

        try {
          for (var _iterator9 = grid_items[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
            var grid_itemsElem = _step9.value;
            grid_itemsElem.closest(".grid-item").classList.remove("pause");
          }
        } catch (err) {
          _didIteratorError9 = true;
          _iteratorError9 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
              _iterator9["return"]();
            }
          } finally {
            if (_didIteratorError9) {
              throw _iteratorError9;
            }
          }
        }

        var removeArray = function removeArray(clase) {
          close_itemElem.closest(".grid-item").classList.remove("active");
          var _iteratorNormalCompletion10 = true;
          var _didIteratorError10 = false;
          var _iteratorError10 = undefined;

          try {
            for (var _iterator10 = grid_items[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
              var grid_itemsElem = _step10.value;
              grid_itemsElem.closest(".grid-item").classList.remove(clase);
            }
          } catch (err) {
            _didIteratorError10 = true;
            _iteratorError10 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
                _iterator10["return"]();
              }
            } finally {
              if (_didIteratorError10) {
                throw _iteratorError10;
              }
            }
          }
        };

        var condicion = function condicion(elem, clase) {
          if (document.querySelector(".grid-item[data-item='item" + elem + "']").classList.contains("active")) {
            removeArray(clase);
          } //  else {
          //      removeArray(clase);
          //  }

        };

        condicion("0", "first");
        condicion("1", "sec");
        condicion("2", "ter");
        condicion("3", "cua");
        condicion("4", "cin");
        condicion("5", "sei");
        condicion("6", "sie");
        condicion("7", "och");
        condicion("8", "nue");
        condicion("9", "die");
        condicion("10", "once");
        condicion("11", "doce");
        condicion("12", "trec");
        condicion("13", "cato");
        condicion("14", "quin");
        condicion("15", "diesi"); // swiperDos.destroy(true, true);
        // sliderTablaDestroy(sliderItemDes);
      }; // swiper.on("slideChange", function () {
      //     console.log("slide changed");
      // });

    };

    for (var _iterator6 = close_item[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      _loop3();
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
}; // clicTabla();


var mansory = function mansory() {
  var $grid = $(".grid").masonry({
    // columnWidth: 80,
    horizontalOrder: true // percentPosition: true,

  }); // change size of item by toggling gigante class

  $grid.on("click", ".grid-item .tabla-wrap_item", function () {
    $(".grid-item").addClass("moved");
    $(this).parent().addClass("active"); // trigger layout after item size changes

    $grid.masonry("layout");
    var swiper = new Swiper($(this).parent(), {
      direction: "horizontal",
      // enabled: false,
      allowTouchMove: true,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
      }
    });
  });
  $(".icon-close").on("click", function () {
    $(".grid-item").removeClass("moved");
    $(".grid-item").removeClass("active"); // trigger layout after item size changes

    $grid.masonry("layout");
  });
}; /// TABLA GSAP


var sliderTabla = function sliderTabla(slider) {
  var swiper = new Swiper(slider, {
    direction: "horizontal",
    // enabled: false,
    slidesPerView: 1,
    allowTouchMove: false,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    }
  }); // swiper.destroy(true, true);
}; // const sliderTablaDestroy = (sliderDes) => {
//     console.log("sdetroy");
//     const swiperDes = new Swiper(sliderDes, {
//         direction: "horizontal",
//         enabled: false,
//         allowTouchMove: false,
//     });
//     swiperDes.destroy(true, true);
// };


gsap.registerPlugin(Flip);
var grid_items = document.querySelectorAll(".tabla-wrap_item");

for (var index = 0; index < grid_items.length; index++) {
  grid_items[index].closest(".grid-item").setAttribute("data-item", "item" + index);
} /// OPEN CARDS


var targets = gsap.utils.toArray(".grid-item, .grid-items.pause"); // var targets = gsap.utils.toArray(".grid-item .swiper");

function flip(target) {
  var state = Flip.getState(targets);
  var openClass = gsap.utils.toArray(".active");
  var allItems = document.querySelectorAll(".grid-item");
  var itemActive = document.querySelectorAll(".grid-item.pause"); // state.targets.classList.remove("active");

  var _iteratorNormalCompletion11 = true;
  var _didIteratorError11 = false;
  var _iteratorError11 = undefined;

  try {
    for (var _iterator11 = allItems[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
      var allItemsElem = _step11.value;
      allItemsElem.classList.remove("active"); // allItemsElem.classList.add("pause");
    }
  } catch (err) {
    _didIteratorError11 = true;
    _iteratorError11 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
        _iterator11["return"]();
      }
    } finally {
      if (_didIteratorError11) {
        throw _iteratorError11;
      }
    }
  }

  target.classList.toggle("active"); // target.closest(".grid-item").classList.toggle("active");

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
    // flip(this.closest(".grid-item"));
    flip(this); //// AGREGA ALTO EN LA FILA FINAL

    var item12 = document.querySelector(".grid-item[data-item=item12]");
    var item13 = document.querySelector(".grid-item[data-item=item13]");
    var item14 = document.querySelector(".grid-item[data-item=item14]");
    var item15 = document.querySelector(".grid-item[data-item=item15]");
    var wrapItem = document.querySelector(".tabla-wrap");

    if (item12.classList.contains("active") || item13.classList.contains("active") || item14.classList.contains("active") || item15.classList.contains("active")) {
      wrapItem.classList.add("lastItem");
    } else {
      wrapItem.classList.remove("lastItem");
    } // WRAP ACTIVE


    document.querySelector(".tabla-wrap").classList.add("wrapActive"); // SLIDER

    sliderTabla(this.querySelector(".swiper"));
  });
}

var allItems = document.querySelectorAll(".grid-item");
var close_item = document.querySelectorAll(".icon-close");
var _iteratorNormalCompletion12 = true;
var _didIteratorError12 = false;
var _iteratorError12 = undefined;

try {
  for (var _iterator12 = close_item[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
    var close_itemElem = _step12.value;

    close_itemElem.onclick = function () {
      var _iteratorNormalCompletion13 = true;
      var _didIteratorError13 = false;
      var _iteratorError13 = undefined;

      try {
        for (var _iterator13 = allItems[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {// allItemsElem.classList.remove("active");

          var allItemsElem = _step13.value;
        }
      } catch (err) {
        _didIteratorError13 = true;
        _iteratorError13 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion13 && _iterator13["return"] != null) {
            _iterator13["return"]();
          }
        } finally {
          if (_didIteratorError13) {
            throw _iteratorError13;
          }
        }
      }
    };
  }
} catch (err) {
  _didIteratorError12 = true;
  _iteratorError12 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion12 && _iterator12["return"] != null) {
      _iterator12["return"]();
    }
  } finally {
    if (_didIteratorError12) {
      throw _iteratorError12;
    }
  }
}
//# sourceMappingURL=anim-exp.dev.js.map
