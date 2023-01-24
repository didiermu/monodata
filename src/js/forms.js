var myModal = new bootstrap.Modal(document.getElementById("modal-contact"));
// myModal.show();

/// TEXTO

const valText = (nameInput) => {
    var regEx =
        /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
    var validText = regEx.test(nameInput.value);

    if (nameInput.value.length < 1) {
        nameInput.parentNode
            .querySelector(".error-input")
            .classList.add("show");
    } else {
        nameInput.parentNode
            .querySelector(".error-input")
            .classList.remove("show");

        if (!validText) {
            nameInput.parentNode
                .querySelector(".error-input")
                .classList.add("show");
            nameInput.parentNode.querySelector(".error-input").innerText =
                "Solo se permiten letras";
        } else {
            nameInput.parentNode
                .querySelector(".error-input")
                .classList.remove("show");
        }
    }
};

/// TEXTO Y NUMERO

const valTextNum = (nameInput) => {
    if (nameInput.value.length < 1) {
        nameInput.parentNode
            .querySelector(".error-input")
            .classList.add("show");
    } else {
        // nameInput.siblings(".error-input").remove();
        var regEx = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;
        // var regEx = /^[A-Za-z0-9 -_.]*[A-Za-z0-9][A-Za-z0-9 -_.]*$/;
        var validText = regEx.test(nameInput.value);

        if (!validText) {
            nameInput.parentNode
                .querySelector(".error-input")
                .classList.add("show");
            nameInput.parentNode.querySelector(".error-input").innerText =
                "No se permiten caracteres especiales";
        } else {
            nameInput.parentNode
                .querySelector(".error-input")
                .classList.remove("show");
        }
    }
};

const inputNombre = document.querySelector("#input-name");
const inputEmpresa = document.querySelector("#input-empresa");

let contador = 1;
preguntas = document.querySelectorAll(".input__group");
const btnPrev = document.querySelector("#prev-form");
const btnNext = document.querySelector("#next-form");

btnNext.onclick = () => {
    // valText(inputNombre);
    // valTextNum(inputEmpresa);

    let msjsError = document.querySelectorAll(".error-input.show");

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
        }

        return true;
    } else {
        console.log("no");

        return false;
    }
};

btnPrev.onclick = () => {
    contador = --contador;

    console.log(contador);

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
