"use strict";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

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
};

animTxt("#one", "Ciudad de México 19:10 h");
animTxt("#two", "Elevación 2.240 m");
animTxt("#tre", "Superficie 1.485 km²");
animTxt("#fou", "22 °C");
animTxt("#fiv", "Viento del N a 18 km/h");
animTxt("#six", "Humedad 30%"); ///////// TABLA
// var elem = document.querySelector(".grid");
// var iso = new Isotope(elem, {
//     // options
//     itemSelector: ".grid-item",
//     layoutMode: "masonry",
//     percentPosition: true,
// });

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
}; // orderItems();
// const clickItemLab = () => {
//     const itemTabla = document.querySelectorAll(".grid-item");
//     for (const itemTablaElem of itemTabla) {
//         itemTablaElem.onclick = () => {
//             // for (const itemTablaElem of itemTabla) {
//             //     itemTablaElem.classList.toggle("pasive");
//             // }
//             // itemTablaElem.classList.toggle("active");
//             itemTablaElem.classList.toggle("active");
//             // iso.layout();
//         };
//     }
//     orderItems();
// };
// orderItems();
// clickItemLab();


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
        var swiper = new Swiper(sliderItem, {
          direction: "horizontal",
          // enabled: false,
          allowTouchMove: true,
          pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true
          }
        }); // sliderTabla(sliderItem);
      };
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
};

clicTabla();

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
};
//# sourceMappingURL=anim-exp.dev.js.map
