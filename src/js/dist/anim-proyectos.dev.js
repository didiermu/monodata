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
      } //var posSection = $(this).offset().top - 300;


      var scrolleo = $(window).scrollTop();

      if (scrolleo > posSection) {
        // $("section").removeClass("show");
        // $(this).addClass("show");
        // var myCollapse = step.querySelector(".accordion-collapse");
        // var myCollapse = step;
        // var myCollapse = $(this).find(".accordion-collapse");
        // var bsCollapse = new bootstrap.Collapse(myCollapse, {
        //     toggle: true,
        // });
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
//# sourceMappingURL=anim-proyectos.dev.js.map
