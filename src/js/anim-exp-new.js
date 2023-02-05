const sliderTabla = (slider) => {
    // const swiperOb = document.querySelector(slider);
    const swipOp = {
        // const swiper = new Swiper(slider, {
        direction: "horizontal",
        slidesPerView: 1,
        loop: true,
        allowTouchMove: true,
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
    };

    var mySwiper = new Swiper(slider, swipOp);
    // function resetSwiper() {
    //     var swiperWrapper = $(".swiper-wrapper");
    //     var newSlides = $(".swiper-wrapper")
    //         .children(".swiper-slide")
    //         .clone(true);
    //     mySwiper.destroy();
    //     swiperWrapper.empty().append(newSlides);
    //     $(".swiper-wrapper").attr("style", "");
    //     mySwiper = new Swiper(slider, settings);
    // }
};

const swipOp = {
    // const swiper = new Swiper(slider, {
    direction: "horizontal",
    slidesPerView: "auto",
    // allowTouchMove: true,
    loop: false,

    pagination: {
        el: ".swiper-pagination",
        // type: "bullets",
        clickable: true,
        enabled: true,
        renderBullet: function (index, className) {
            return '<div class="' + className + '">0' + (index + 1) + "</div>";
        },
    },
};

var mySwiper;

const tablaExp = () => {
    const wrapItem = document.querySelector(".tabla-wrap");
    const grid_items = document.querySelectorAll(".grid-item");

    for (let index = 0; index < grid_items.length; index++) {
        grid_items[index].setAttribute("data-item", "item" + index);
    }

    gsap.registerPlugin(Flip);
    var targets = gsap.utils.toArray(".tabla-wrap_item");
    var targetsClose = gsap.utils.toArray(".grid-item .icon-close");

    function flip(target) {
        const state = Flip.getState(targets);
        const openClass = gsap.utils.toArray(".active");
        const allItems = document.querySelectorAll(".grid-item");

        for (const allItemsElem of allItems) {
            allItemsElem.classList.remove("active");
        }

        target.closest(".grid-item").classList.add("active");

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
            if (this.closest(".grid-item").classList.contains("active")) {
                console.log("si");
                return false;
            } else {
                console.log("no");
                flip(this);
            }

            //// AGREGA ALTO EN LA FILA FINAL ESTO HAY QUE AJUSTARLO PARA QUE NO SEA FIJO A¿LAS CLASES

            // const item12 = document.querySelector(
            //     ".grid-item[data-item=item12]"
            // );
            // const item13 = document.querySelector(
            //     ".grid-item[data-item=item13]"
            // );
            // const item14 = document.querySelector(
            //     ".grid-item[data-item=item14]"
            // );
            // const item15 = document.querySelector(
            //     ".grid-item[data-item=item15]"
            // );

            // if (
            //     item12.classList.contains("active") ||
            //     item13.classList.contains("active") ||
            //     item14.classList.contains("active") ||
            //     item15.classList.contains("active")
            // ) {
            //     wrapItem.classList.add("lastItem");
            // } else {
            //     wrapItem.classList.remove("lastItem");
            // }

            // WRAP ACTIVE
            document.querySelector(".tabla-wrap").classList.add("wrapActive");

            // ACTIVE SLIDER

            mySwiper = new Swiper(this.querySelector(".swiper"), swipOp);
        });
    }

    // close

    function closeFlip(target) {
        const state = Flip.getState(targets);
        const openClass = gsap.utils.toArray(".active");

        target.closest(".grid-item").classList.remove("active");

        gsap.set(openClass, { zIndex: 7 });

        Flip.from(state, {
            duration: 0.25,
            absolute: true,
            ease: "power1.out",
            nested: true,
        }).set(targets, { clearProps: "zIndex" });
    }

    for (var i = 0; i < targetsClose.length; i++) {
        targetsClose[i].addEventListener("click", function () {
            closeFlip(this);

            wrapItem.classList.remove("lastItem");

            /// slider
            mySwiper.destroy(true, true);
        });
    }

    /// CERRA ITEM
    // const itemClose = document.querySelectorAll(".grid-item .icon-close");

    // for (const itemCloseElem of itemClose) {
    //     itemCloseElem.addEventListener("click", () => {
    //         itemCloseElem.closest(".grid-item").classList.remove("active");
    //     });
    // }
};

tablaExp();
