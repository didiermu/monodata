"use strict";

var myModal = new bootstrap.Modal(document.getElementById("modal-contact")); // myModal.show();
/// TEXTO

var valText = function valText(nameInput) {
  var regEx = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
  var validText = regEx.test(nameInput.value);

  if (nameInput.value.length < 1) {
    nameInput.closest(".input__group").querySelector(".error-input").classList.add("show");
  } else {
    nameInput.closest(".input__group").querySelector(".error-input").classList.remove("show");

    if (!validText) {
      nameInput.closest(".input__group").querySelector(".error-input").classList.add("show");
      nameInput.closest(".input__group").querySelector(".error-input").innerText = "Solo se permiten letras";
    } else {
      nameInput.closest(".input__group").querySelector(".error-input").classList.remove("show");
    }
  }
}; /// TEXTO Y NUMERO


var valTextNum = function valTextNum(nameInput) {
  if (nameInput.value.length < 1) {
    nameInput.closest(".input__group").querySelector(".error-input").classList.add("show");
  } else {
    // nameInput.siblings(".error-input").remove();
    var regEx = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/; // var regEx = /^[A-Za-z0-9 -_.]*[A-Za-z0-9][A-Za-z0-9 -_.]*$/;

    var validText = regEx.test(nameInput.value);

    if (!validText) {
      nameInput.closest(".input__group").querySelector(".error-input").classList.add("show");
      nameInput.closest(".input__group").querySelector(".error-input").innerText = "No se permiten caracteres especiales";
    } else {
      nameInput.closest(".input__group").querySelector(".error-input").classList.remove("show");
    }
  }
}; // MAIL


var valMail = function valMail(nameInput) {
  if (nameInput.value.length < 1) {
    nameInput.closest(".input__group").querySelector(".error-input").classList.add("show");
  } else {
    var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var validNumbre = regEx.test(nameInput.value);

    if (!validNumbre) {
      nameInput.closest(".input__group").querySelector(".error-input").classList.add("show");
      nameInput.closest(".input__group").querySelector(".error-input").innerText = "Verifica el formato de email ";
    } else {
      nameInput.closest(".input__group").querySelector(".error-input").classList.remove("show");
    }
  }
};

var formContacto = document.querySelector(".modal-body form");
var inputNombre = document.querySelector("#input-name");
var inputEmpresa = document.querySelector("#input-empresa"); // const chips = document.querySelectorAll(".input__chip");
// const chips = document.querySelectorAll(".input__group label");

var chips = document.querySelectorAll(".input__group input"); // const chips = document.querySelectorAll(".input__group .chip");

var inputMail = document.querySelector("#input-email");
var contador = 1;
preguntas = document.querySelectorAll(".input__group");
var btnPrev = document.querySelector("#prev-form");
var btnNext = document.querySelector("#next-form");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop2 = function _loop2() {
    var chipsElem = _step.value;
    chipsElem.addEventListener("click", function () {
      chipsElem.closest(".input__chip").classList.toggle("set");
      chipsElem.classList.toggle("checked");
    });
  };

  for (var _iterator = chips[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop2();
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

console.log("3");

btnNext.onclick = function () {
  valText(inputNombre);
  valTextNum(inputEmpresa);
  var chipCheck = document.querySelectorAll("#input--group3 .checked");
  var chipCheck4 = document.querySelectorAll("#input--group4 .checked");
  var chipCheck5 = document.querySelectorAll("#input--group5 .checked");
  valMail(inputMail);

  if (chipCheck.length < 1) {
    document.querySelector("#input--group3 .error-input").classList.add("show");
  } else {
    document.querySelector("#input--group3 .error-input").classList.remove("show");
  }

  if (chipCheck4.length < 1) {
    document.querySelector("#input--group4 .error-input").classList.add("show");
  } else {
    document.querySelector("#input--group4 .error-input").classList.remove("show");
  }

  if (chipCheck5.length < 1) {
    document.querySelector("#input--group5 .error-input").classList.add("show");
  } else {
    document.querySelector("#input--group5 .error-input").classList.remove("show");
  }

  var msjsError = document.querySelectorAll(".input__group.show .error-input.show");
  var msjsErrorHide = document.querySelectorAll(" .error-input.show");

  if (msjsError.length == 0) {
    // form.submit();
    // console.log("si");
    contador = ++contador;

    if (contador == 7) {
      btnNext.classList.add("send");
    }

    if (contador > 8) {
      contador = 8;
    } else {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = msjsErrorHide[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var msjsErrorHideElem = _step2.value;
          msjsErrorHideElem.classList.remove("show");
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

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = preguntas[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var preguntasElem = _step3.value;
          preguntasElem.classList.remove("show");
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

      document.querySelector("#input--group" + contador).classList.add("show");
      btnPrev.classList.remove("hide");
      btnNext.classList.remove("valid");
    }

    if (contador == 8) {
      btnPrev.classList.add("hide");
      btnNext.classList.add("hide");
      setTimeout(function () {
        formContacto.submit();
      }, 2000);
    }

    return true;
  } else {
    console.log("no");
    return false;
  }
};

btnPrev.onclick = function () {
  contador = --contador; // console.log(contador);

  if (contador == 1) {
    contador = 1;
    btnPrev.classList.add("hide");
  }

  if (contador == 6) {
    btnNext.classList.remove("send");
  }

  if (contador > 8) {} else {
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = preguntas[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var preguntasElem = _step4.value;
        preguntasElem.classList.remove("show");
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

    document.querySelector("#input--group" + contador).classList.add("show");
  }
}; //////////////// FOCUS


var focusInput = function focusInput() {
  var inputs = document.querySelectorAll(".input__group input");
  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    var _loop = function _loop() {
      var inputsElem = _step5.value;
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
        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          for (var _iterator6 = msjsError[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var msjsErrorElem = _step6.value;
            msjsErrorElem.classList.remove("show");
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
      });
    };

    for (var _iterator5 = inputs[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      _loop();
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
};

focusInput();
//# sourceMappingURL=forms.dev.js.map
