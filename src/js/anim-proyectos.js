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
                var posSection = $(this).offset().top - 400;
                //console.log("mobile home")
            } else {
                var posSection = $(this).offset().top - 300;
                //console.log("d home");
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

    // document.querySelector("#collapse1").classList.add("show");
}

efectoFade();

// const blogs = document.querySelectorAll(".accordion-item");

// const observer = new IntersectionObserver(function (entries, observer) {
//     entries.forEach((entry) => {
//         if (!entry.isIntersecting) {
//             return;
//         }
//         entry.target.classList.add("entry-animation");
//     });
// });

// blogs.forEach((blog) => observer.observe(blog));

const itemLista = document.querySelectorAll(".accordion-item");
const itemCollapse = document.querySelectorAll(".accordion-collapse");

for (const itemListaElem of itemLista) {
    // itemListaElem.onclick = (event) => {
    //     var myCollapse = itemListaElem.querySelector(".accordion-collapse");
    //     var bsCollapse = new bootstrap.Collapse(myCollapse, {
    //         toggle: true,
    //     });
    // };

    itemListaElem.onmouseover = (event) => {
        // var myCollapse = itemListaElem.querySelector(".accordion-collapse");
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
    itemListaElem.onmouseleave = (event) => {
        // var myCollapse = itemListaElem.querySelector(".accordion-collapse");
        // var bsCollapse = new bootstrap.Collapse(myCollapse, {
        //     toggle: true,
        // });
    };
}

// var span = document.getElementsByTagName("span")[0];
// var select = document.getElementsByTagName("select")[0];

// span.addEventListener("mousedown", function () {
//     var evt = event;
//     setTimeout(function () {
//         select.dispatchEvent(evt);
//     });
// });

//////////////////////// CLASS BODY

if (window.location.pathname.includes("proyectos")) {
    document.querySelector("body").classList.add("body-projects");
}

//////////////////////// FILTROS

const filtro = document.querySelectorAll(".filtros li");
const destacados = document.querySelector(".filtros #Destacados");
const todos = document.querySelector(".filtros #todos");
const lista = document.querySelector(".lista");
const listaItems = document.querySelectorAll(".lista a");
const comboTipo = document.querySelector("#filtros-proy #combo-tipo select");

const comboIndustria = document.querySelector(
    "#filtros-proy #combo-industria select"
);

for (const filtroElem of filtro) {
    filtroElem.onclick = () => {
        for (const filtroElem of filtro) {
            filtroElem.classList.remove("active");
        }
        filtroElem.classList.add("active");
    };
}

const filtrosOld = () => {
    comboTipo.onchange = () => {
        lista.setAttribute("class", "lista lista-combo");

        let valorCombo = comboTipo.value;
        let itemActive = document.querySelectorAll(
            ".lista a[" + valorCombo + "]"
        );

        for (const listaItemsElem of listaItems) {
            listaItemsElem.classList.remove("active");
        }
        for (const itemActiveElem of itemActive) {
            itemActiveElem.classList.add("active");
        }
    };

    comboIndustria.onchange = () => {
        lista.setAttribute("class", "lista lista-combo");
        let valueIndustria = comboIndustria.value;
        let itemActive = document.querySelectorAll(
            ".lista a[industria='" + valueIndustria + "']"
        );
        for (const listaItemsElem of listaItems) {
            listaItemsElem.classList.remove("active");
        }
        for (const itemActiveElem of itemActive) {
            itemActiveElem.classList.add("active");
        }
    };
};

const itemDestacado = document.querySelectorAll(".Destacado");
for (const itemDestacadoEl of itemDestacado) {
    itemDestacadoEl.classList.add("active");
}

destacados.addEventListener("click", () => {
    lista.setAttribute("class", "lista lista-destacados");
    for (const listaItemsElem of listaItems) {
        listaItemsElem.classList.remove("active");
    }
});

todos.addEventListener("click", () => {
    destacados.classList.remove("active");

    lista.setAttribute("class", "lista");
    for (const listaItemsElem of listaItems) {
        listaItemsElem.classList.remove("active");
    }
});

// const customSelect = () => {
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

const filtrosTipoNew = () => {
    const comboTipoNew = document.querySelectorAll(
        "#filtros-proy #combo-tipo .select-options li"
    );

    for (const comboTipoNewEl of comboTipoNew) {
        comboTipoNewEl.onclick = () => {
            lista.setAttribute("class", "lista lista-combo");
            destacados.classList.remove("active");

            let valorCombo = comboTipoNewEl.getAttribute("rel");

            let itemActive = document.querySelectorAll(
                ".lista a[" + valorCombo + "]"
            );

            for (const listaItemsElem of listaItems) {
                listaItemsElem.classList.remove("active");
            }
            for (const itemActiveElem of itemActive) {
                itemActiveElem.classList.add("active");
            }
        };
    }
};

const filtrosIndustriaNew = () => {
    const comboTipoNew = document.querySelectorAll(
        "#filtros-proy #combo-industria .select-options li"
    );

    for (const comboTipoNewEl of comboTipoNew) {
        comboTipoNewEl.onclick = () => {
            destacados.classList.remove("active");
            lista.setAttribute("class", "lista lista-combo");

            let valueIndustria = comboTipoNewEl.getAttribute("rel");
            let itemActive = document.querySelectorAll(
                ".lista a[industria=" + valueIndustria + "]"
            );

            for (const listaItemsElem of listaItems) {
                listaItemsElem.classList.remove("active");
            }
            for (const itemActiveElem of itemActive) {
                itemActiveElem.classList.add("active");
            }
        };
    }
};

filtrosTipoNew();
filtrosIndustriaNew();

// document.addEventListener("DOMContentLoaded", (event) => {
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
