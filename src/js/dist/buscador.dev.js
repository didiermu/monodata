"use strict";

// var modalSearch = new bootstrap.Modal(document.getElementById("modal-search"));
// modalSearch.show();
/// CHANGE LANG
// const btnSearch = document.querySelector(".is-search-submit");
// btnSearch.querySelector("span").innerText = "";
// btnSearch.setAttribute("msg", "Buscar");
// const labelSearch = document.querySelector("#modal-search .is-screen-reader-text");
// labelSearch.innerText = "Buscar por tipo de proyecto, industria o marca";
// document.addEventListener("DOMContentLoaded", () => {
//     setTimeout(() => {
//         $("select option").val(function (idx, val) {
//             $(this)
//                 .siblings('[value="' + val + '"]')
//                 .remove();
//         });
//         console.log("pr1");
//     }, 500);
// });
function myFunction() {
  var input, filter, section, div, h1, i;
  input = document.getElementById("input-search");
  filter = input.value.toUpperCase();
  section = document.querySelector(".search--grid");
  div = section.getElementsByTagName("a");

  for (i = 0; i < div.length; i++) {
    h1 = div[i].getElementsByTagName("h4")[0];

    if (h1) {
      var palabrasEnFiltro = filter.split(" ");
      var hallado = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = palabrasEnFiltro[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var filtro = _step.value;

          if (h1.innerHTML.toUpperCase().indexOf(filtro) > -1) {
            hallado++;
          }
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

      if (hallado === palabrasEnFiltro.length) {
        //   div[i].style.display = "block";
        div[i].classList.add("match");
      } else {
        //   div[i].style.display = "";
        div[i].classList.remove("match");
      }
    }
  }
}

var btnBuscar = document.querySelector("#btn-search");

btnBuscar.onclick = function () {
  myFunction();
  var noResult = document.querySelectorAll(".match");
  var keySearch = document.querySelector("#input-search").value;
  document.querySelector("#modal-search .modal-body").classList.add("active");
  document.querySelector("#info-resultado").classList.add("active");
  document.querySelector("#noResult").innerText = noResult.length;
  document.querySelector("#keySearch").innerText = keySearch;
  return false;
};

var customSelect = function customSelect() {
  $("select").each(function () {
    var $this = $(this),
        numberOfOptions = $(this).children("option").length;
    $this.addClass("select-hidden");
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');
    var $styledSelect = $this.next("div.select-styled");
    $styledSelect.text($this.children("option").eq(0).text()); // $styledSelect.attr("valor",$this.children('option').eq(0).text());

    var $list = $("<ul />", {
      "class": "select-options"
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
      $("<li />", {
        text: $this.children("option").eq(i).text(),
        rel: $this.children("option").eq(i).val()
      }).appendTo($list); //if ($this.children('option').eq(i).is(':selected')){
      //  $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
      //}
    }

    var $listItems = $list.children("li");
    $styledSelect.click(function (e) {
      e.stopPropagation();
      $("div.select-styled.active").not(this).each(function () {
        $(this).removeClass("active").next("ul.select-options").hide();
        $(this).parents("li").removeClass("active");
      });
      $(this).toggleClass("active").next("ul.select-options").toggle();
      $(this).parents("li").toggleClass("active");
    });
    $listItems.click(function (e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass("active");
      $styledSelect.attr("valor", $(this).attr("rel"));
      $this.val($(this).attr("rel"));
      $list.hide();
      $(this).parents("li").removeClass("active"); //console.log($this.val());
    });
    $(document).click(function () {
      $styledSelect.removeClass("active");
      $list.hide();
      $styledSelect.parents("li").removeClass("active");
    });
  });
};

customSelect(); //////////////////////// FILTROS

var filtrosSearch = function filtrosSearch() {
  var filtro = document.querySelectorAll("#filtros-proy-search li");
  var lista = document.querySelector(".search--grid");
  var listaItems = document.querySelectorAll(".search--grid a");
  var comboTipo = document.querySelector("#modal-search #combo-tipo select"); // const comboIndustria = document.querySelector(
  //     "#modal-search #combo-industria select"
  // );

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    var _loop3 = function _loop3() {
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
      _loop3();
    } // const comboTipoNew = document.querySelectorAll(
    //     "#modal-search #combo-tipo .select-options li"
    // );
    // for (const comboTipoNewEl of comboTipoNew) {
    //     comboTipoNewEl.onclick = () => {
    //         lista.setAttribute("class", "search--grid lista-combo");
    //         destacados.classList.remove("active");
    //         let valorCombo = comboTipoNewEl.getAttribute("rel");
    //         // let itemActive = document.querySelectorAll(".lista a."+valorCombo);
    //         let itemActive = document.querySelectorAll(
    //             ".search--grid a[" + valorCombo + "]"
    //         );
    //         for (const listaItemsElem of listaItems) {
    //             listaItemsElem.classList.remove("active");
    //         }
    //         for (const itemActiveElem of itemActive) {
    //             itemActiveElem.classList.add("active");
    //         }
    //     };
    // }
    // comboIndustria.onchange = () => {
    //     lista.setAttribute("class", "search--grid lista-combo");
    //     let valueIndustria = comboIndustria.value;
    //     let itemActive = document.querySelectorAll(
    //         ".search--grid a[industria='" + valueIndustria + "']"
    //     );
    //     for (const listaItemsElem of listaItems) {
    //         listaItemsElem.classList.remove("active");
    //     }
    //     for (const itemActiveElem of itemActive) {
    //         itemActiveElem.classList.add("active");
    //     }
    // };

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

  var filtrosTipoNewSearch = function filtrosTipoNewSearch() {
    var comboTipoNew = document.querySelectorAll("#filtros-proy-search #combo-tipo-s .select-options li");
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      var _loop = function _loop() {
        var comboTipoNewEl = _step3.value;
        comboTipoNewEl.addEventListener("click", function () {
          var valorCombo = comboTipoNewEl.getAttribute("rel");
          var itemActive = document.querySelectorAll(".search--grid a[" + valorCombo + "]");
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = listaItems[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var listaItemsElem = _step4.value;
              listaItemsElem.classList.remove("active", "match");
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

          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = itemActive[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var itemActiveElem = _step5.value;
              itemActiveElem.classList.add("match", "active");
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
        });
      };

      for (var _iterator3 = comboTipoNew[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
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
  };

  var filtrosIndustriaNewSearch = function filtrosIndustriaNewSearch() {
    var comboTipoNew = document.querySelectorAll("#filtros-proy-search #combo-industria-s .select-options li");
    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
      var _loop2 = function _loop2() {
        var comboTipoNewEl = _step6.value;
        comboTipoNewEl.addEventListener("click", function () {
          var valueIndustria = comboTipoNewEl.getAttribute("rel");
          var itemActive = document.querySelectorAll(".search--grid a[industria=" + valueIndustria + "]");
          var _iteratorNormalCompletion7 = true;
          var _didIteratorError7 = false;
          var _iteratorError7 = undefined;

          try {
            for (var _iterator7 = listaItems[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
              var listaItemsElem = _step7.value;
              listaItemsElem.classList.remove("active", "match");
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

          var _iteratorNormalCompletion8 = true;
          var _didIteratorError8 = false;
          var _iteratorError8 = undefined;

          try {
            for (var _iterator8 = itemActive[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
              var itemActiveElem = _step8.value;
              itemActiveElem.classList.add("match", "active");
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
      };

      for (var _iterator6 = comboTipoNew[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
        _loop2();
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

  filtrosTipoNewSearch();
  filtrosIndustriaNewSearch();
};

filtrosSearch();
//# sourceMappingURL=buscador.dev.js.map
