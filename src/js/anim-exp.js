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
//     percentPosition: true,
// });

const isotopo = () => {
    var $grid = $(".grid").isotope({
        itemSelector: ".grid-item",
        percentPosition: true,
        layoutMode: "masonry",
        // masonry: {
        //     horizontalOrder: true,
        // },
    });
    $grid.on("click", ".grid-item", function () {
        // $(".grid-item").removeClass("active");
        $grid.isotope("layout");
        $(this).addClass("active");

        // const grid_items = document.querySelectorAll(".grid-item");
        // let item_active = document.querySelector(
        //     ".grid-item[data-item='item0']"
        // );

        // if (item_active.classList.contains("active")) {
        //     for (const grid_itemsElem of grid_items) {
        //         grid_itemsElem.classList.add("first");
        //         grid_itemsElem.removeAttribute("style");
        //         // let top_item = grid_itemsElem.offsetTop;
        //         // grid_itemsElem.style.top = top_item + 255 + "px";
        //     }
        // } else {
        //     $grid.isotope("updateSortData").isotope();
        // }
    });
};

// isotopo();

const orderItems = () => {
    const grid_items = document.querySelectorAll(".tabla-wrap_item");
    const close_item = document.querySelectorAll(".icon-close");

    for (let index = 0; index < grid_items.length; index++) {
        grid_items[index]
            .closest(".grid-item")
            .setAttribute("data-item", "item" + index);
    }

    for (const close_itemElem of close_item) {
        close_itemElem.onclick = () => {
            // for (const grid_itemsElem of grid_items) {
            //     // grid_itemsElem.classList.remove("first");
            //     grid_itemsElem.closest(".grid-item").classList.remove("active", "first");
            // }

            const removeArray = (clase) => {
                for (const grid_itemsElem of grid_items) {
                    grid_itemsElem
                        .closest(".grid-item")
                        .classList.remove(clase);
                }
            };

            const condicion = (elem, clase) => {
                if (
                    document
                        .querySelector(
                            ".grid-item[data-item='item" + elem + "']"
                        )
                        .classList.contains("active")
                ) {
                    // toggleArray(clase);
                } else {
                    removeArray(clase);
                }
            };

            condicion("0", "first");
            condicion("1", "sec");
            condicion("2", "ter");
            condicion("3", "cua");
            condicion("4", "cin");
            condicion("5", "sei");
            condicion("6", "sie");
            condicion("7", "och");
            condicion("8", "nue");
            condicion("9", "die");
            condicion("10", "once");
            condicion("11", "doce");
            condicion("12", "trec");
            condicion("13", "cato");
            condicion("14", "quin");
            condicion("15", "diesi");
        };
    }

    for (const grid_itemsElem of grid_items) {
        grid_itemsElem.onclick = () => {
            grid_itemsElem.closest(".grid-item").classList.add("active");

            const toggleArray = (clase) => {
                for (const grid_itemsElem of grid_items) {
                    grid_itemsElem.closest(".grid-item").classList.add(clase);
                }
            };

            // const removeArray = (clase) => {
            //     for (const grid_itemsElem of grid_items) {
            //         grid_itemsElem.classList.remove(clase);
            //     }
            // };

            const condicion = (elem, clase) => {
                if (
                    document
                        .querySelector(
                            ".grid-item[data-item='item" + elem + "']"
                        )
                        .classList.contains("active")
                ) {
                    toggleArray(clase);
                }
                // else {
                //     removeArray(clase);
                // }
            };

            condicion("0", "first");
            condicion("1", "sec");
            condicion("2", "ter");
            condicion("3", "cua");
            condicion("4", "cin");
            condicion("5", "sei");
            condicion("6", "sie");
            condicion("7", "och");
            condicion("8", "nue");
            condicion("9", "die");
            condicion("10", "once");
            condicion("11", "doce");
            condicion("12", "trec");
            condicion("13", "cato");
            condicion("14", "quin");
            condicion("15", "diesi");
        };
    }
};

// orderItems();

// const clickItemLab = () => {
//     const itemTabla = document.querySelectorAll(".grid-item");

//     for (const itemTablaElem of itemTabla) {
//         itemTablaElem.onclick = () => {
//             // for (const itemTablaElem of itemTabla) {
//             //     itemTablaElem.classList.toggle("pasive");
//             // }
//             // itemTablaElem.classList.toggle("active");
//             itemTablaElem.classList.toggle("active");
//             // iso.layout();
//         };
//     }

//     orderItems();
// };

// orderItems();
// clickItemLab();

const clicTabla = () => {
    const sliderTabla = (slider) => {
        const swiper = new Swiper(slider, {
            direction: "horizontal",
            // enabled: false,
            slidesPerView: 1,
            allowTouchMove: true,
            pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true,
            },
        });

        swiper.destroy(true, true);
    };

    const sliderTablaDestroy = (sliderDes) => {
        const swiperDes = new Swiper(sliderDes, {
            direction: "horizontal",
            enabled: false,
            allowTouchMove: false,
        });

        swiperDes.destroy(true, true);
    };

    ///// open
    const grid_items = document.querySelectorAll(".tabla-wrap_item");

    for (let index = 0; index < grid_items.length; index++) {
        grid_items[index]
            .closest(".grid-item")
            .setAttribute("data-item", "item" + index);
    }

    for (const grid_itemsElem of grid_items) {
        grid_itemsElem.onclick = () => {
            let sliderItem = grid_itemsElem.querySelector(".swiper");

            for (const grid_itemsElem of grid_items) {
                grid_itemsElem
                    .closest(".grid-item:not(.active)")
                    .classList.add("pause");
            }

            grid_itemsElem.closest(".grid-item").classList.add("active");

            const toggleArray = (clase) => {
                for (const grid_itemsElem of grid_items) {
                    grid_itemsElem.closest(".grid-item").classList.add(clase);
                }
            };

            const condicion = (elem, clase) => {
                if (
                    document
                        .querySelector(
                            ".grid-item[data-item='item" + elem + "']"
                        )
                        .classList.contains("active")
                ) {
                    toggleArray(clase);
                } else {
                    // removeArray(clase);
                    // console.log("no");
                }
            };

            condicion("0", "first");
            condicion("1", "sec");
            condicion("2", "ter");
            condicion("3", "cua");
            condicion("4", "cin");
            condicion("5", "sei");
            condicion("6", "sie");
            condicion("7", "och");
            condicion("8", "nue");
            condicion("9", "die");
            condicion("10", "once");
            condicion("11", "doce");
            condicion("12", "trec");
            condicion("13", "cato");
            condicion("14", "quin");
            condicion("15", "diesi");

            const swiper = new Swiper(sliderItem, {
                direction: "horizontal",
                // enabled: false,
                allowTouchMove: true,
                pagination: {
                    el: ".swiper-pagination",
                    type: "bullets",
                    clickable: true,
                },
            });

            setTimeout(() => {
                window.scroll(
                    0,
                    grid_itemsElem.closest(".grid-item").offsetTop + 400
                );
            }, 100);

            // sliderTabla(sliderItem);
        };

        /// TOGGLE
        // const grid_items_open = document.querySelectorAll(".pause");
        // for (const grid_items_openElem of grid_items_open) {
        //     grid_items_openElem.onclick = () => {
        //         grid_items_openElem.classList.remove("active");
        //     };
        // }
    }

    ///// close
    const close_item = document.querySelectorAll(".icon-close");
    for (const close_itemElem of close_item) {
        // const swiper = new Swiper(close_itemElem, {
        //     direction: "horizontal",
        //     slidesPerView: 1,
        //     allowTouchMove: false,
        // });

        close_itemElem.onclick = () => {
            let sliderItemDes = close_itemElem
                .closest(".grid-item")
                .querySelector(".swiper");

            for (const grid_itemsElem of grid_items) {
                grid_itemsElem.closest(".grid-item").classList.remove("pause");
            }

            const removeArray = (clase) => {
                close_itemElem.closest(".grid-item").classList.remove("active");
                for (const grid_itemsElem of grid_items) {
                    grid_itemsElem
                        .closest(".grid-item")
                        .classList.remove(clase);
                }
            };

            const condicion = (elem, clase) => {
                if (
                    document
                        .querySelector(
                            ".grid-item[data-item='item" + elem + "']"
                        )
                        .classList.contains("active")
                ) {
                    removeArray(clase);
                }
                //  else {
                //      removeArray(clase);
                //  }
            };

            condicion("0", "first");
            condicion("1", "sec");
            condicion("2", "ter");
            condicion("3", "cua");
            condicion("4", "cin");
            condicion("5", "sei");
            condicion("6", "sie");
            condicion("7", "och");
            condicion("8", "nue");
            condicion("9", "die");
            condicion("10", "once");
            condicion("11", "doce");
            condicion("12", "trec");
            condicion("13", "cato");
            condicion("14", "quin");
            condicion("15", "diesi");
            // swiperDos.destroy(true, true);

            // sliderTablaDestroy(sliderItemDes);
        };

        // swiper.on("slideChange", function () {
        //     console.log("slide changed");
        // });
    }
};

// clicTabla();

const mansory = () => {
    var $grid = $(".grid").masonry({
        // columnWidth: 80,
        horizontalOrder: true,
        // percentPosition: true,
    });
    // change size of item by toggling gigante class
    $grid.on("click", ".grid-item .tabla-wrap_item", function () {
        $(".grid-item").addClass("moved");
        $(this).parent().addClass("active");
        // trigger layout after item size changes
        $grid.masonry("layout");

        const swiper = new Swiper($(this).parent(), {
            direction: "horizontal",
            // enabled: false,
            allowTouchMove: true,
            pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true,
            },
        });
    });

    $(".icon-close").on("click", function () {
        $(".grid-item").removeClass("moved");
        $(".grid-item").removeClass("active");
        // trigger layout after item size changes
        $grid.masonry("layout");
    });
};

/// TABLA GSAP

const sliderTabla = (slider) => {
    const swiper = new Swiper(slider, {
        direction: "horizontal",
        // enabled: false,
        slidesPerView: 1,
        allowTouchMove: false,
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
    });

    // swiper.destroy(true, true);
};

// const sliderTablaDestroy = (sliderDes) => {
//     console.log("sdetroy");
//     const swiperDes = new Swiper(sliderDes, {
//         direction: "horizontal",
//         enabled: false,
//         allowTouchMove: false,
//     });

//     swiperDes.destroy(true, true);
// };

gsap.registerPlugin(Flip);

const grid_items = document.querySelectorAll(".tabla-wrap_item");

for (let index = 0; index < grid_items.length; index++) {
    grid_items[index]
        .closest(".grid-item")
        .setAttribute("data-item", "item" + index);
}

/// OPEN CARDS

var targets = gsap.utils.toArray(".grid-item, .grid-items.pause");
// var targets = gsap.utils.toArray(".grid-item .swiper");

function flip(target) {
    const state = Flip.getState(targets);
    const openClass = gsap.utils.toArray(".active");
    const allItems = document.querySelectorAll(".grid-item");
    const itemActive = document.querySelectorAll(".grid-item.pause");

    // state.targets.classList.remove("active");

    for (const allItemsElem of allItems) {
        allItemsElem.classList.remove("active");
        // allItemsElem.classList.add("pause");
    }

    target.classList.toggle("active");

    // target.closest(".grid-item").classList.toggle("active");

    gsap.set(openClass, { zIndex: 7 });

    Flip.from(state, {
        duration: 0.25,
        absolute: true,
        ease: "power1.out",
        nested: true,
    }).set(targets, { clearProps: "zIndex" });
}

for (var i = 0; i < targets.length; i++) {
    targets[i].addEventListener("click", function () {
        // flip(this.closest(".grid-item"));
        flip(this);

        //// AGREGA ALTO EN LA FILA FINAL

        const item12 = document.querySelector(".grid-item[data-item=item12]");
        const item13 = document.querySelector(".grid-item[data-item=item13]");
        const item14 = document.querySelector(".grid-item[data-item=item14]");
        const item15 = document.querySelector(".grid-item[data-item=item15]");
        const wrapItem = document.querySelector(".tabla-wrap");

        if (
            item12.classList.contains("active") ||
            item13.classList.contains("active") ||
            item14.classList.contains("active") ||
            item15.classList.contains("active")
        ) {
            wrapItem.classList.add("lastItem");
        } else {
            wrapItem.classList.remove("lastItem");
        }

        // WRAP ACTIVE
        document.querySelector(".tabla-wrap").classList.add("wrapActive");

        // SLIDER
        sliderTabla(this.querySelector(".swiper"));
    });
}

const allItems = document.querySelectorAll(".grid-item");
const close_item = document.querySelectorAll(".icon-close");
for (const close_itemElem of close_item) {
    close_itemElem.onclick = () => {
        for (const allItemsElem of allItems) {
            // allItemsElem.classList.remove("active");
        }
    };
}
