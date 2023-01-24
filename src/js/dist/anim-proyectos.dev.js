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
  });
  document.querySelector("#collapse1").classList.add("show");
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

var combos = document.querySelectorAll(".combo");
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = combos[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var combosElem = _step2.value;
    var select = combosElem.querySelector("select");
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

if (window.location.pathname.includes("proyectos")) {
  document.querySelector("body").classList.add("body-projects");
} //////////////////////// FILTROS


var filtro = document.querySelectorAll(".filtros li");
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  var _loop = function _loop() {
    var filtroElem = _step3.value;

    filtroElem.onclick = function () {
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = filtro[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _filtroElem = _step4.value;

          _filtroElem.classList.remove("active");
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

      filtroElem.classList.add("active");
    };
  };

  for (var _iterator3 = filtro[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
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
//# sourceMappingURL=anim-proyectos.dev.js.map