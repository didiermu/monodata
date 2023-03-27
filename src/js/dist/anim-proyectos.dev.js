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
var comboTipo = document.querySelector("#filtros-proy #combo-tipo select");
var comboIndustria = document.querySelector("#filtros-proy #combo-industria select");
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  var _loop3 = function _loop3() {
    var filtroElem = _step2.value;

    filtroElem.onclick = function () {
      var _iteratorNormalCompletion16 = true;
      var _didIteratorError16 = false;
      var _iteratorError16 = undefined;

      try {
        for (var _iterator16 = filtro[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
          var _filtroElem = _step16.value;

          _filtroElem.classList.remove("active");
        }
      } catch (err) {
        _didIteratorError16 = true;
        _iteratorError16 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion16 && _iterator16["return"] != null) {
            _iterator16["return"]();
          }
        } finally {
          if (_didIteratorError16) {
            throw _iteratorError16;
          }
        }
      }

      filtroElem.classList.add("active");
    };
  };

  for (var _iterator2 = filtro[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    _loop3();
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

var filtrosOld = function filtrosOld() {
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
};

var itemDestacado = document.querySelectorAll(".Destacado");
var _iteratorNormalCompletion7 = true;
var _didIteratorError7 = false;
var _iteratorError7 = undefined;

try {
  for (var _iterator7 = itemDestacado[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
    var itemDestacadoEl = _step7.value;
    itemDestacadoEl.classList.add("active");
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

destacados.addEventListener("click", function () {
  lista.setAttribute("class", "lista lista-destacados");
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
todos.addEventListener("click", function () {
  destacados.classList.remove("active");
  lista.setAttribute("class", "lista");
  var _iteratorNormalCompletion9 = true;
  var _didIteratorError9 = false;
  var _iteratorError9 = undefined;

  try {
    for (var _iterator9 = listaItems[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
      var listaItemsElem = _step9.value;
      listaItemsElem.classList.remove("active");
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
}); // const customSelect = () => {
//     /*
// Reference: http://jsfiddle.net/BB3JK/47/
// */
// $('select').each(function(){
//     var $this = $(this), numberOfOptions = $(this).children('option').length;
//     $this.addClass('select-hidden');
//     $this.wrap('<div class="select"></div>');
//     $this.after('<div class="select-styled"></div>');
//     var $styledSelect = $this.next('div.select-styled');
//     $styledSelect.text($this.children('option').eq(0).text());
//     // $styledSelect.attr("valor",$this.children('option').eq(0).text());
//     var $list = $('<ul />', {
//         'class': 'select-options'
//     }).insertAfter($styledSelect);
//     for (var i = 0; i < numberOfOptions; i++) {
//         $('<li />', {
//             text: $this.children('option').eq(i).text(),
//             rel: $this.children('option').eq(i).val()
//         }).appendTo($list);
//         //if ($this.children('option').eq(i).is(':selected')){
//         //  $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
//         //}
//     }
//     var $listItems = $list.children('li');
//     $styledSelect.click(function(e) {
//         e.stopPropagation();
//         $('div.select-styled.active').not(this).each(function(){
//             $(this).removeClass('active').next('ul.select-options').hide();
//             $(this).parents("li").removeClass("active");
//         });
//         $(this).toggleClass('active').next('ul.select-options').toggle();
//         $(this).parents("li").toggleClass("active");
//     });
//     $listItems.click(function(e) {
//         e.stopPropagation();
//         $styledSelect.text($(this).text()).removeClass('active');
//         $styledSelect.attr("valor", $(this).attr('rel'));
//         $this.val($(this).attr('rel'));
//         $list.hide();
//         $(this).parents("li").removeClass("active");
//         //console.log($this.val());
//     });
//     $(document).click(function() {
//         $styledSelect.removeClass('active');
//         $list.hide();
//         $styledSelect.parents("li").removeClass("active");
//     });
// });
// }
// customSelect();

var filtrosTipoNew = function filtrosTipoNew() {
  var comboTipoNew = document.querySelectorAll("#filtros-proy #combo-tipo .select-options li");
  var _iteratorNormalCompletion10 = true;
  var _didIteratorError10 = false;
  var _iteratorError10 = undefined;

  try {
    var _loop = function _loop() {
      var comboTipoNewEl = _step10.value;

      comboTipoNewEl.onclick = function () {
        lista.setAttribute("class", "lista lista-combo");
        destacados.classList.remove("active");
        var valorCombo = comboTipoNewEl.getAttribute("rel");
        var itemActive = document.querySelectorAll(".lista a[" + valorCombo + "]");
        var _iteratorNormalCompletion11 = true;
        var _didIteratorError11 = false;
        var _iteratorError11 = undefined;

        try {
          for (var _iterator11 = listaItems[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
            var listaItemsElem = _step11.value;
            listaItemsElem.classList.remove("active");
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

        var _iteratorNormalCompletion12 = true;
        var _didIteratorError12 = false;
        var _iteratorError12 = undefined;

        try {
          for (var _iterator12 = itemActive[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
            var itemActiveElem = _step12.value;
            itemActiveElem.classList.add("active");
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
      };
    };

    for (var _iterator10 = comboTipoNew[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
      _loop();
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

var filtrosIndustriaNew = function filtrosIndustriaNew() {
  var comboTipoNew = document.querySelectorAll("#filtros-proy #combo-industria .select-options li");
  var _iteratorNormalCompletion13 = true;
  var _didIteratorError13 = false;
  var _iteratorError13 = undefined;

  try {
    var _loop2 = function _loop2() {
      var comboTipoNewEl = _step13.value;

      comboTipoNewEl.onclick = function () {
        destacados.classList.remove("active");
        lista.setAttribute("class", "lista lista-combo");
        var valueIndustria = comboTipoNewEl.getAttribute("rel");
        var itemActive = document.querySelectorAll(".lista a[industria=" + valueIndustria + "]");
        var _iteratorNormalCompletion14 = true;
        var _didIteratorError14 = false;
        var _iteratorError14 = undefined;

        try {
          for (var _iterator14 = listaItems[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
            var listaItemsElem = _step14.value;
            listaItemsElem.classList.remove("active");
          }
        } catch (err) {
          _didIteratorError14 = true;
          _iteratorError14 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion14 && _iterator14["return"] != null) {
              _iterator14["return"]();
            }
          } finally {
            if (_didIteratorError14) {
              throw _iteratorError14;
            }
          }
        }

        var _iteratorNormalCompletion15 = true;
        var _didIteratorError15 = false;
        var _iteratorError15 = undefined;

        try {
          for (var _iterator15 = itemActive[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
            var itemActiveElem = _step15.value;
            itemActiveElem.classList.add("active");
          }
        } catch (err) {
          _didIteratorError15 = true;
          _iteratorError15 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion15 && _iterator15["return"] != null) {
              _iterator15["return"]();
            }
          } finally {
            if (_didIteratorError15) {
              throw _iteratorError15;
            }
          }
        }
      };
    };

    for (var _iterator13 = comboTipoNew[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
      _loop2();
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

filtrosTipoNew();
filtrosIndustriaNew(); // document.addEventListener("DOMContentLoaded", (event) => {
//     const valorIdustria =  document.querySelectorAll(".lista select option");
//     for (const valorIdustriaEl of valorIdustria) {
//         if(valorIdustriaEl.value == ""){
//             valorIdustriaEl.remove();
//         }
//         if(valorIdustriaEl.innerHTML == "Sin categoría"){
//             valorIdustriaEl.remove();
//         }
//     }
//         var optionValues =[];
//         $('select option').each(function(){
//            if($.inArray(this.value, optionValues) >-1){
//               $(this).remove()
//            }else{
//               optionValues.push(this.value);
//            }
//         });
//     console.log("load");
// });
//# sourceMappingURL=anim-proyectos.dev.js.map
