"use strict";

var myModal = new bootstrap.Modal(document.getElementById("modal-contact")); // myModal.show();
/// TEXTO

var valText = function valText(nameInput) {
  var regEx = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
  var validText = regEx.test(nameInput.value);

  if (nameInput.value.length < 1) {
    nameInput.parentNode.querySelector(".error-input").classList.add("show");
  } else {
    nameInput.parentNode.querySelector(".error-input").classList.remove("show");

    if (!validText) {
      nameInput.parentNode.querySelector(".error-input").classList.add("show");
      nameInput.parentNode.querySelector(".error-input").innerText = "Solo se permiten letras";
    } else {
      nameInput.parentNode.querySelector(".error-input").classList.remove("show");
    }
  }
}; /// TEXTO Y NUMERO


var valTextNum = function valTextNum(nameInput) {
  if (nameInput.value.length < 1) {
    nameInput.parentNode.querySelector(".error-input").classList.add("show");
  } else {
    // nameInput.siblings(".error-input").remove();
    var regEx = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/; // var regEx = /^[A-Za-z0-9 -_.]*[A-Za-z0-9][A-Za-z0-9 -_.]*$/;

    var validText = regEx.test(nameInput.value);

    if (!validText) {
      nameInput.parentNode.querySelector(".error-input").classList.add("show");
      nameInput.parentNode.querySelector(".error-input").innerText = "No se permiten caracteres especiales";
    } else {
      nameInput.parentNode.querySelector(".error-input").classList.remove("show");
    }
  }
};

var inputNombre = document.querySelector("#input-name");
var inputEmpresa = document.querySelector("#input-empresa");
var contador = 1;
preguntas = document.querySelectorAll(".input__group");
var btnPrev = document.querySelector("#prev-form");
var btnNext = document.querySelector("#next-form");

btnNext.onclick = function () {
  // valText(inputNombre);
  // valTextNum(inputEmpresa);
  var msjsError = document.querySelectorAll(".error-input.show");

  if (msjsError.length == 0) {
    // form.submit();
    console.log("si");
    contador = ++contador;

    if (contador == 7) {
      btnNext.classList.add("send");
    }

    if (contador > 8) {
      contador = 8;
    } else {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = preguntas[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var preguntasElem = _step.value;
          preguntasElem.classList.remove("show");
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

      document.querySelector("#input--group" + contador).classList.add("show");
      btnPrev.classList.remove("hide");
      btnNext.classList.remove("valid");
    }

    if (contador == 8) {
      btnPrev.classList.add("hide");
      btnNext.classList.add("hide");
    }

    return true;
  } else {
    console.log("no");
    return false;
  }
};

btnPrev.onclick = function () {
  contador = --contador;
  console.log(contador);

  if (contador == 1) {
    contador = 1;
    btnPrev.classList.add("hide");
  }

  if (contador == 6) {
    btnNext.classList.remove("send");
  }

  if (contador > 8) {} else {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = preguntas[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var preguntasElem = _step2.value;
        preguntasElem.classList.remove("show");
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

    document.querySelector("#input--group" + contador).classList.add("show");
  }
}; //////////////// FOCUS


var focusInput = function focusInput() {
  var inputs = document.querySelectorAll(".input__group input");
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    var _loop = function _loop() {
      var inputsElem = _step3.value;
      inputsElem.addEventListener("click", function () {
        inputsElem.focus();
        inputsElem.parentNode.classList.add("active");
        inputsElem.parentNode.classList.remove("valid");
      });
      inputsElem.addEventListener("blur", function () {
        if (inputsElem.value == "") {
          inputsElem.parentNode.classList.remove("active");
        } else {
          // inputsElem.parentNode.classList.replace("active", "valid");
          btnNext.classList.add("valid");
        }

        var msjsError = document.querySelectorAll(".error-input");
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = msjsError[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var msjsErrorElem = _step4.value;
            msjsErrorElem.classList.remove("show");
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
      });
    };

    for (var _iterator3 = inputs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
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

focusInput();
//# sourceMappingURL=forms.dev.js.map
