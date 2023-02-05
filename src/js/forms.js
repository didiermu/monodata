var myModal = new bootstrap.Modal(document.getElementById("modal-contact"));
// myModal.show();

/// TEXTO

const valText = (nameInput) => {
    var regEx =
        /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
    var validText = regEx.test(nameInput.value);

    if (nameInput.value.length < 1) {
        nameInput
            .closest(".input__group")
            .querySelector(".error-input")
            .classList.add("show");
    } else {
        nameInput
            .closest(".input__group")
            .querySelector(".error-input")
            .classList.remove("show");

        if (!validText) {
            nameInput
                .closest(".input__group")
                .querySelector(".error-input")
                .classList.add("show");
            nameInput
                .closest(".input__group")
                .querySelector(".error-input").innerText =
                "Solo se permiten letras";
        } else {
            nameInput
                .closest(".input__group")
                .querySelector(".error-input")
                .classList.remove("show");
        }
    }
};

/// TEXTO Y NUMERO

const valTextNum = (nameInput) => {
    if (nameInput.value.length < 1) {
        nameInput
            .closest(".input__group")
            .querySelector(".error-input")
            .classList.add("show");
    } else {
        // nameInput.siblings(".error-input").remove();
        var regEx = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;
        // var regEx = /^[A-Za-z0-9 -_.]*[A-Za-z0-9][A-Za-z0-9 -_.]*$/;
        var validText = regEx.test(nameInput.value);

        if (!validText) {
            nameInput
                .closest(".input__group")
                .querySelector(".error-input")
                .classList.add("show");
            nameInput
                .closest(".input__group")
                .querySelector(".error-input").innerText =
                "No se permiten caracteres especiales";
        } else {
            nameInput
                .closest(".input__group")
                .querySelector(".error-input")
                .classList.remove("show");
        }
    }
};

// MAIL

const valMail = (nameInput) => {
    if (nameInput.value.length < 1) {
        nameInput
            .closest(".input__group")
            .querySelector(".error-input")
            .classList.add("show");
    } else {
        var regEx =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var validNumbre = regEx.test(nameInput.value);
        if (!validNumbre) {
            nameInput
                .closest(".input__group")
                .querySelector(".error-input")
                .classList.add("show");
            nameInput
                .closest(".input__group")
                .querySelector(".error-input").innerText =
                "Verifica el formato de email ";
        } else {
            nameInput
                .closest(".input__group")
                .querySelector(".error-input")
                .classList.remove("show");
        }
    }
};

const formContacto = document.querySelector(".modal-body form");
const inputNombre = document.querySelector("#input-name");
const inputEmpresa = document.querySelector("#input-empresa");
// const chips = document.querySelectorAll(".input__chip");
// const chips = document.querySelectorAll(".input__group label");
const chips = document.querySelectorAll(".input__group input");
// const chips = document.querySelectorAll(".input__group .chip");
const inputMail = document.querySelector("#input-email");

let contador = 1;
preguntas = document.querySelectorAll(".input__group");
const btnPrev = document.querySelector("#prev-form");
const btnNext = document.querySelector("#next-form");

for (const chipsElem of chips) {
    chipsElem.addEventListener("click", () => {
        chipsElem.closest(".input__chip").classList.toggle("set");
        chipsElem.classList.toggle("checked");
    });
}

console.log("3");

btnNext.onclick = () => {
    valText(inputNombre);
    valTextNum(inputEmpresa);
    const chipCheck = document.querySelectorAll("#input--group3 .checked");
    const chipCheck4 = document.querySelectorAll("#input--group4 .checked");
    const chipCheck5 = document.querySelectorAll("#input--group5 .checked");
    valMail(inputMail);

    if (chipCheck.length < 1) {
        document
            .querySelector("#input--group3 .error-input")
            .classList.add("show");
    } else {
        document
            .querySelector("#input--group3 .error-input")
            .classList.remove("show");
    }

    if (chipCheck4.length < 1) {
        document
            .querySelector("#input--group4 .error-input")
            .classList.add("show");
    } else {
        document
            .querySelector("#input--group4 .error-input")
            .classList.remove("show");
    }

    if (chipCheck5.length < 1) {
        document
            .querySelector("#input--group5 .error-input")
            .classList.add("show");
    } else {
        document
            .querySelector("#input--group5 .error-input")
            .classList.remove("show");
    }

    let msjsError = document.querySelectorAll(
        ".input__group.show .error-input.show"
    );

    let msjsErrorHide = document.querySelectorAll(" .error-input.show");

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
            for (const msjsErrorHideElem of msjsErrorHide) {
                msjsErrorHideElem.classList.remove("show");
            }
            for (const preguntasElem of preguntas) {
                preguntasElem.classList.remove("show");
            }
            document
                .querySelector("#input--group" + contador)
                .classList.add("show");
            btnPrev.classList.remove("hide");
            btnNext.classList.remove("valid");
        }

        if (contador == 8) {
            btnPrev.classList.add("hide");
            btnNext.classList.add("hide");

            setTimeout(() => {
                formContacto.submit();
            }, 2000);
        }

        return true;
    } else {
        console.log("no");

        return false;
    }
};

btnPrev.onclick = () => {
    contador = --contador;
    // console.log(contador);

    if (contador == 1) {
        contador = 1;
        btnPrev.classList.add("hide");
    }

    if (contador == 6) {
        btnNext.classList.remove("send");
    }

    if (contador > 8) {
    } else {
        for (const preguntasElem of preguntas) {
            preguntasElem.classList.remove("show");
        }
        document
            .querySelector("#input--group" + contador)
            .classList.add("show");
    }
};

//////////////// FOCUS

const focusInput = () => {
    const inputs = document.querySelectorAll(".input__group input");

    for (const inputsElem of inputs) {
        inputsElem.addEventListener("click", () => {
            inputsElem.focus();
            inputsElem.parentNode.classList.add("active");
            inputsElem.parentNode.classList.remove("valid");
        });

        inputsElem.addEventListener("blur", () => {
            if (inputsElem.value == "") {
                inputsElem.parentNode.classList.remove("active");
            } else {
                // inputsElem.parentNode.classList.replace("active", "valid");
                btnNext.classList.add("valid");
            }

            const msjsError = document.querySelectorAll(".error-input");
            for (const msjsErrorElem of msjsError) {
                msjsErrorElem.classList.remove("show");
            }
        });
    }
};

focusInput();
