"use strict";

// var myModal = new bootstrap.Modal(document.getElementById("modal-contact"));
// var modalUnete = new bootstrap.Modal(document.getElementById("modal-unete"));
// modalUnete.show();
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

      if (window.location.pathname.split("/")[2] == "en") {
        nameInput.closest(".input__group").querySelector(".error-input").innerText = "Verify your email format.";
      } else {
        nameInput.closest(".input__group").querySelector(".error-input").innerText = "Verifica el formato de email ";
      }
    } else {
      nameInput.closest(".input__group").querySelector(".error-input").classList.remove("show");
    }
  }
}; /// CONTACTO


var formContacto = document.querySelector("#modal-contact form");
var inputNombre = document.querySelector("#input-name");
var inputEmpresa = document.querySelector("#input-empresa");
var chips = document.querySelectorAll(".input__group input");
var inputMail = document.querySelector("#input-email");
var contador = 1;
preguntas = document.querySelectorAll("#modal-contact .input__group");
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

btnNext.onclick = function () {
  valText(inputNombre);
  valTextNum(inputEmpresa);
  var chipCheck = document.querySelectorAll("#input--group3 .checked");
  var chipCheck5 = document.querySelectorAll("#input--group5 .checked");
  valMail(inputMail);

  if (chipCheck.length < 1) {
    document.querySelector("#input--group3 .error-input").classList.add("show");
  } else {
    document.querySelector("#input--group3 .error-input").classList.remove("show");
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
}; /// UNETE


var formContactoU = document.querySelector("#modal-unete form");
var btnPrevU = document.querySelector("#prev-form-u");
var btnNextU = document.querySelector("#next-form-u");
var inputNombreU = document.querySelector("#input-name-unete");
var inputMailU = document.querySelector("#input-email-unete");
var inputAbout = document.querySelector("#input-about");
var contadorU = 10;
preguntasU = document.querySelectorAll("#modal-unete .input__group");

btnNextU.onclick = function () {
  valText(inputNombreU);
  valMail(inputMailU);
  valTextNum(inputAbout);
  var msjsError = document.querySelectorAll("#modal-unete .input__group.show .error-input.show");
  var msjsErrorHide = document.querySelectorAll("#modal-unete .error-input.show");

  if (msjsError.length == 0) {
    // form.submit();
    // console.log("si");
    contadorU = ++contadorU;

    if (contadorU == 13) {
      btnNextU.classList.add("send");
    }

    if (contadorU > 14) {
      contadorU = 14;
    } else {
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = msjsErrorHide[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var msjsErrorHideElem = _step5.value;
          msjsErrorHideElem.classList.remove("show");
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
        for (var _iterator6 = preguntasU[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var preguntasElem = _step6.value;
          preguntasElem.classList.remove("show");
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

      document.querySelector("#modal-unete #input--group" + contadorU).classList.add("show");
      btnPrevU.classList.remove("hide");
      btnNextU.classList.remove("valid");
    }

    if (contadorU == 14) {
      btnPrevU.classList.add("hide");
      btnNextU.classList.add("hide");
      setTimeout(function () {
        formContactoU.submit();
      }, 2000);
    }

    return true;
  } else {
    // console.log("no");
    return false;
  }
};

btnPrevU.onclick = function () {
  contadorU = --contadorU; // console.log(contador);

  if (contadorU == 10) {
    contadorU = 10;
    btnPrevU.classList.add("hide");
  }

  if (contadorU == 12) {
    btnNextU.classList.remove("send");
  }

  if (contadorU > 13) {} else {
    var _iteratorNormalCompletion7 = true;
    var _didIteratorError7 = false;
    var _iteratorError7 = undefined;

    try {
      for (var _iterator7 = preguntasU[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
        var preguntasElem = _step7.value;
        preguntasElem.classList.remove("show");
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

    document.querySelector("#input--group" + contadorU).classList.add("show");
  }
};

var bntLoad = document.querySelector("#file-unete");

bntLoad.onchange = function () {
  console.log(bntLoad.value);
  document.querySelector(".icon-icon-upload").classList.add("check");
}; //////////////// FOCUS


var focusInput = function focusInput() {
  var inputs = document.querySelectorAll(".input__group input");
  var _iteratorNormalCompletion8 = true;
  var _didIteratorError8 = false;
  var _iteratorError8 = undefined;

  try {
    var _loop = function _loop() {
      var inputsElem = _step8.value;
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
        var _iteratorNormalCompletion9 = true;
        var _didIteratorError9 = false;
        var _iteratorError9 = undefined;

        try {
          for (var _iterator9 = msjsError[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
            var msjsErrorElem = _step9.value;
            msjsErrorElem.classList.remove("show");
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
      });
    };

    for (var _iterator8 = inputs[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
      _loop();
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

focusInput();
//# sourceMappingURL=form-unete.dev.js.map
