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

    document.querySelector("#collapse1").classList.add("show");
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

const combos = document.querySelectorAll(".combo");

for (const combosElem of combos) {
    const select = combosElem.querySelector("select");
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

for (const filtroElem of filtro) {
    filtroElem.onclick = () => {
        for (const filtroElem of filtro) {
            filtroElem.classList.remove("active");
        }
        filtroElem.classList.add("active");
    };
}
