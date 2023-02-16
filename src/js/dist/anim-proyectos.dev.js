"use strict";

// gsap.utils.toArray(".accordion-item").forEach((step) => {
//     ScrollTrigger.create({
//         trigger: step,
//         start: "top +=300",
//         end: "bottom +=300",
//         toggleActions: "play pause resume reset",
//         // endTrigger: ".lista",
//         // end: "bottom center",
//         // toggleClass: "active",
//         // className: "active",
//         // markers: true,
//         // toggleClass: { targets: ".accordion-collapse", className: "show" },
//         // onEnter: () => {
//         onToggle: (self) => {
//             var myCollapse = step.querySelector(".accordion-collapse");
//             // var myCollapse = step;
//             var bsCollapse = new bootstrap.Collapse(myCollapse, {
//                 toggle: true,
//             });
//             // ScrollTrigger.refresh();
//         },
//     });
// });
function efectoFade() {
  function sectionFade() {
    var sectionFade = $(".accordion-item");
    sectionFade.each(function () {
      var mediaqueryList = window.matchMedia("(max-width: 768px)");

      if (mediaqueryList.matches) {
        var posSection = $(this).offset().top - 400; //console.log("mobile home")
      } else {
        var posSection = $(this).offset().top - 300; //console.log("d home");
      }

      var scrolleo = $(window).scrollTop();

      if (scrolleo > posSection) {
        $(this).find(".accordion-collapse").addClass("show");
      } else {
        $(this).find(".accordion-collapse").removeClass("show");
      }
    });
  }

  sectionFade();
  $(document).scroll(function () {
    sectionFade();
  }); // document.querySelector("#collapse1").classList.add("show");
}

efectoFade(); // const blogs = document.querySelectorAll(".accordion-item");
// const observer = new IntersectionObserver(function (entries, observer) {
//     entries.forEach((entry) => {
//         if (!entry.isIntersecting) {
//             return;
//         }
//         entry.target.classList.add("entry-animation");
//     });
// });
// blogs.forEach((blog) => observer.observe(blog));

var itemLista = document.querySelectorAll(".accordion-item");
var itemCollapse = document.querySelectorAll(".accordion-collapse");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = itemLista[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var itemListaElem = _step.value;

    // itemListaElem.onclick = (event) => {
    //     var myCollapse = itemListaElem.querySelector(".accordion-collapse");
    //     var bsCollapse = new bootstrap.Collapse(myCollapse, {
    //         toggle: true,
    //     });
    // };
    itemListaElem.onmouseover = function (event) {// var myCollapse = itemListaElem.querySelector(".accordion-collapse");
      // var bsCollapse = new bootstrap.Collapse(myCollapse, {
      //     toggle: true,
      // });
      // for (const itemCollapseElem of itemCollapse) {
      //     itemCollapseElem.classList.remove("show");
      // }
      // itemListaElem
      //     .querySelector(".accordion-collapse")
      //     .classList.add("show");
      // window.scroll(0, itemListaElem.offsetTop - 300);
    };

    itemListaElem.onmouseleave = function (event) {// var myCollapse = itemListaElem.querySelector(".accordion-collapse");
      // var bsCollapse = new bootstrap.Collapse(myCollapse, {
      //     toggle: true,
      // });
    };
  } // var span = document.getElementsByTagName("span")[0];
  // var select = document.getElementsByTagName("select")[0];
  // span.addEventListener("mousedown", function () {
  //     var evt = event;
  //     setTimeout(function () {
  //         select.dispatchEvent(evt);
  //     });
  // });
  //////////////////////// CLASS BODY

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

if (window.location.pathname.includes("proyectos")) {
  document.querySelector("body").classList.add("body-projects");
} //////////////////////// FILTROS


var filtro = document.querySelectorAll(".filtros li");
var destacados = document.querySelector(".filtros #Destacados");
var todos = document.querySelector(".filtros #todos");
var lista = document.querySelector(".lista");
var listaItems = document.querySelectorAll(".lista a");
var comboTipo = document.querySelector("#combo-tipo select");
var comboIndustria = document.querySelector("#combo-industria select");
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  var _loop = function _loop() {
    var filtroElem = _step2.value;

    filtroElem.onclick = function () {
      var _iteratorNormalCompletion9 = true;
      var _didIteratorError9 = false;
      var _iteratorError9 = undefined;

      try {
        for (var _iterator9 = filtro[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
          var _filtroElem = _step9.value;

          _filtroElem.classList.remove("active");
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

      filtroElem.classList.add("active");
    };
  };

  for (var _iterator2 = filtro[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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

comboTipo.onchange = function () {
  lista.setAttribute("class", "lista lista-combo");
  var valorCombo = comboTipo.value;
  var itemActive = document.querySelectorAll(".lista a[" + valorCombo + "]");
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = listaItems[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var listaItemsElem = _step3.value;
      listaItemsElem.classList.remove("active");
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

  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = itemActive[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var itemActiveElem = _step4.value;
      itemActiveElem.classList.add("active");
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

comboIndustria.onchange = function () {
  lista.setAttribute("class", "lista lista-combo");
  var valueIndustria = comboIndustria.value;
  var itemActive = document.querySelectorAll(".lista a[industria='" + valueIndustria + "']");
  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = listaItems[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var listaItemsElem = _step5.value;
      listaItemsElem.classList.remove("active");
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

  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = itemActive[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var itemActiveElem = _step6.value;
      itemActiveElem.classList.add("active");
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

destacados.addEventListener("click", function () {
  lista.setAttribute("class", "lista lista-destacados");
  var _iteratorNormalCompletion7 = true;
  var _didIteratorError7 = false;
  var _iteratorError7 = undefined;

  try {
    for (var _iterator7 = listaItems[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
      var listaItemsElem = _step7.value;
      listaItemsElem.classList.remove("active");
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
});
todos.addEventListener("click", function () {
  lista.setAttribute("class", "lista");
  var _iteratorNormalCompletion8 = true;
  var _didIteratorError8 = false;
  var _iteratorError8 = undefined;

  try {
    for (var _iterator8 = listaItems[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
      var listaItemsElem = _step8.value;
      listaItemsElem.classList.remove("active");
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
});
$("select option").val(function (idx, val) {
  $(this).siblings('[value="' + val + '"]').remove();
});
//# sourceMappingURL=anim-proyectos.dev.js.map
