gsap.registerPlugin(ScrollTrigger, TextPlugin);

const animTxt = (elem, texto) => {
    // const dataApi = document.querySelectorAll(
    //     ".info--api--content.info--api--content h6"
    // );
    // for (const dataApiElem of dataApi) {
    //     console.log(dataApiElem.textContent);
    //     let tween = gsap.to(".info--api--content h6", {
    //         text: {
    //             value: dataApiElem.textContent,
    //         },
    //         duration: 5,
    //         delay: 1,
    //         ease: "none",
    //     });
    // }

    gsap.to(elem, {
        duration: 2,
        text: {
            value: texto,
            newClass: "class2",
            // delimiter: " ",
        },
        ease: "none",
    });
};

animTxt("#one", "Ciudad de México 19:10 h");
animTxt("#two", "Elevación 2.240 m");
animTxt("#tre", "Superficie 1.485 km²");
animTxt("#fou", "22 °C");
animTxt("#fiv", "Viento del N a 18 km/h");
animTxt("#six", "Humedad 30%");

///////// TABLA

// var elem = document.querySelector(".grid");
// var iso = new Isotope(elem, {
//     // options
//     itemSelector: ".grid-item",
//     layoutMode: "masonry",
// });

// element argument can be a selector string
//   for an individual element
// var iso = new Isotope(".grid", {
//     // options
// });

// const itemTabla = document.querySelectorAll(".tabla-wrap_item");

// for (const itemTablaElem of itemTabla) {
//     itemTablaElem.onclick = () => {
//         // for (const itemTablaElem of itemTabla) {
//         //     itemTablaElem.classList.toggle("pasive");
//         // }
//         // itemTablaElem.classList.toggle("active");
//         itemTablaElem.classList.toggle("active");
//         iso.layout();
//     };
// }

const isotopo = () => {
    var $grid = $(".grid").isotope({
        itemSelector: ".grid-item",
        percentPosition: true,
        layoutMode: "masonry",
        masonry: {
            horizontalOrder: true,
            fitWidth: true,
        },
    });

    $grid.on("click", ".grid-item", function () {
        // change size of item by toggling gigante class
        // $(".grid-item").removeClass("active");
        $(this).toggleClass("active");
        $grid.isotope("layout");
    });

    // $grid.isotope("reloadItems");
};

isotopo();
