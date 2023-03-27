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
            for (var filtro of palabrasEnFiltro) {
                if (h1.innerHTML.toUpperCase().indexOf(filtro) > -1) {
                    hallado++;
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

const btnBuscar = document.querySelector("#btn-search");
btnBuscar.onclick = () => {
    myFunction();
    const noResult = document.querySelectorAll(".match");
    let keySearch = document.querySelector("#input-search").value;
    document.querySelector("#modal-search .modal-body").classList.add("active");
    document.querySelector("#info-resultado").classList.add("active");
    document.querySelector("#noResult").innerText = noResult.length;
    document.querySelector("#keySearch").innerText = keySearch;
    return false;
};

const customSelect = () => {
    $("select").each(function () {
        var $this = $(this),
            numberOfOptions = $(this).children("option").length;

        $this.addClass("select-hidden");
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next("div.select-styled");
        $styledSelect.text($this.children("option").eq(0).text());
        // $styledSelect.attr("valor",$this.children('option').eq(0).text());

        var $list = $("<ul />", {
            class: "select-options",
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $("<li />", {
                text: $this.children("option").eq(i).text(),
                rel: $this.children("option").eq(i).val(),
            }).appendTo($list);
            //if ($this.children('option').eq(i).is(':selected')){
            //  $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
            //}
        }

        var $listItems = $list.children("li");

        $styledSelect.click(function (e) {
            e.stopPropagation();
            $("div.select-styled.active")
                .not(this)
                .each(function () {
                    $(this)
                        .removeClass("active")
                        .next("ul.select-options")
                        .hide();
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
            $(this).parents("li").removeClass("active");
            //console.log($this.val());
        });

        $(document).click(function () {
            $styledSelect.removeClass("active");
            $list.hide();
            $styledSelect.parents("li").removeClass("active");
        });
    });
};

customSelect();

//////////////////////// FILTROS
const filtrosSearch = () => {
    const filtro = document.querySelectorAll("#filtros-proy-search li");
    const lista = document.querySelector(".search--grid");
    const listaItems = document.querySelectorAll(".search--grid a");
    const comboTipo = document.querySelector(
        "#modal-search #combo-tipo select"
    );

    // const comboIndustria = document.querySelector(
    //     "#modal-search #combo-industria select"
    // );

    for (const filtroElem of filtro) {
        filtroElem.onclick = () => {
            for (const filtroElem of filtro) {
                filtroElem.classList.remove("active");
            }
            filtroElem.classList.add("active");
        };
    }

    // const comboTipoNew = document.querySelectorAll(
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

    const filtrosTipoNewSearch = () => {
        const comboTipoNew = document.querySelectorAll(
            "#filtros-proy-search #combo-tipo-s .select-options li"
        );

        for (const comboTipoNewEl of comboTipoNew) {
            comboTipoNewEl.addEventListener("click", () => {
                let valorCombo = comboTipoNewEl.getAttribute("rel");

                let itemActive = document.querySelectorAll(
                    ".search--grid a[" + valorCombo + "]"
                );

                for (const listaItemsElem of listaItems) {
                    listaItemsElem.classList.remove("active", "match");
                }
                for (const itemActiveElem of itemActive) {
                    itemActiveElem.classList.add("match", "active");
                }
            });
        }
    };

    const filtrosIndustriaNewSearch = () => {
        const comboTipoNew = document.querySelectorAll(
            "#filtros-proy-search #combo-industria-s .select-options li"
        );

        for (const comboTipoNewEl of comboTipoNew) {
            comboTipoNewEl.addEventListener("click", () => {
                let valueIndustria = comboTipoNewEl.getAttribute("rel");
                let itemActive = document.querySelectorAll(
                    ".search--grid a[industria=" + valueIndustria + "]"
                );

                for (const listaItemsElem of listaItems) {
                    listaItemsElem.classList.remove("active", "match");
                }
                for (const itemActiveElem of itemActive) {
                    itemActiveElem.classList.add("match", "active");
                }
            });
        }
    };

    filtrosTipoNewSearch();
    filtrosIndustriaNewSearch();
};

filtrosSearch();
