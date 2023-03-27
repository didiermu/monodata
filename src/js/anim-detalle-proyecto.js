const playVideo = () => {
    const cursorPoint = document.querySelector(".cursor.pause");
    const cursorPlay = document.querySelector(".cursor.play");
    const wrapVideo = document.querySelector(".hero--video");
    var options = {
        fluid: true,
        responsive: true,
        autoplay: true,
        controls: false,
    };
    var player = videojs("video-desktop", options, function onPlayerReady() {
        // videojs.log("Your player is ready!");
    });

    cursorPoint.onclick = () => {
        console.log("pa");
        player.pause();
        cursorPoint.style.display = "none";
        cursorPlay.style.display = "block";
        // cursorPoint.classList.add("hide");
        // cursorPointPlay.classList.remove("show");
    };

    cursorPlay.onclick = () => {
        player.play();
        cursorPoint.style.display = "block";
        cursorPlay.style.display = "none";
        // cursorPoint.classList.add("hide");
        // cursorPointPlay.classList.remove("show");
    };
};

const objVideo = document.querySelector(".hero--video");
const objBanner = document.querySelector(".accordion-body picture");

if (document.body.contains(objVideo)) {
    playVideo();
}

//////////////////////// REMOVE MODAL

// const sliderDetalle = () => {
//     const swiper = new Swiper(".swiper", {
//         loop: true,
//         autoplay: {
//             speed: 3000,
//         },
//         pagination: {
//             el: ".swiper-pagination",
//             type: "custom",
//             clickable: true,
//             renderCustom: function (swiperContent, currentClass, totalClass) {
//                 return currentClass + " / " + totalClass;
//             },
//         },
//         navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//         },

//         // breakpoints: {
//         //     320: {
//         //         allowTouchMove: true,
//         //     },
//         //     768: {
//         //         allowTouchMove: false,
//         //     },
//         // },
//     });
// };

const swiperConfig = {
    loop: true,
    autoplay: {
        speed: 3000,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "custom",
        clickable: true,
        renderCustom: function (swiperContent, currentClass, totalClass) {
            return currentClass + " / " + totalClass;
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // breakpoints: {
    //     320: {
    //         allowTouchMove: true,
    //     },
    //     768: {
    //         allowTouchMove: false,
    //     },
    // },
};

var slideModal;

const sliderResp = () => {
    const mediaquery = window.matchMedia("(max-width: 768px)");
    const galeria = document.querySelector(".galeria");
    const modal = document.querySelector(".galeria .modal-body");
    const slider = document.querySelector(".swiper");

    if (mediaquery.matches) {
        galeria.insertAdjacentElement("afterbegin", slider);
    } else {
        modal.insertAdjacentElement("afterbegin", slider);
    }
};

// sliderResp();
// sliderDetalle();

const triggeGaleria = () => {
    const slidesLink = document.querySelectorAll(".gallery .gallery-item a");
    const imagesBody = document.querySelectorAll(".gallery .gallery-item");
    const allSlidesModal = document.querySelectorAll(
        ".modal .gallery .gallery-item"
    );

    for (const slidesLinkElem of slidesLink) {
        slidesLinkElem.removeAttribute("href");
        slidesLinkElem.setAttribute("data-bs-toggle", "modal");
        slidesLinkElem.setAttribute("data-bs-target", "#exampleModal");
    }

    /// agrega clase a slides por galeria
    const swiperWrap = document.querySelector(".swiper-wrapper");

    for (const allSlidesModalElem of allSlidesModal) {
        allSlidesModalElem.classList.add(
            allSlidesModalElem.closest(".gallery").id
        );

        let slide = document.createElement("div");
        slide.classList.add(
            "slide-gale",
            allSlidesModalElem.closest(".gallery").id
        );
        swiperWrap.append(slide);
        let imgSlide = allSlidesModalElem.querySelector("img");
        slide.append(imgSlide);
    }

    for (const imagesBodyElem of imagesBody) {
        imagesBodyElem.onclick = () => {
            slideModal = new Swiper(".swiper", swiperConfig);
            let idGaleria = imagesBodyElem.closest(".gallery").id;
            let selectSlides = document.querySelectorAll(
                ".modal ." + idGaleria
            );

            for (const selectSlidesElem of selectSlides) {
                selectSlidesElem.classList.add("swiper-slide");
            }
        };
    }

    document.querySelector(".modal .btn-close").onclick = () => {
        slideModal.destroy(true, true);
        const slideModalNew = document.querySelectorAll(".slide-gale");
        for (const slideModalNewElem of slideModalNew) {
            slideModalNewElem.classList.remove("swiper-slide");
            slideModalNewElem.removeAttribute("role");
            slideModalNewElem.removeAttribute("aria-label");
        }
    };
};

triggeGaleria();

// window.addEventListener("resize", () => {
    // sliderResp();
    // sliderDetalle();
// });

//////////////////////// GRID IMAGES
const imagenes = document.querySelectorAll(".gallery img");
for (const imagenesElem of imagenes) {
    if (imagenesElem.getAttribute("width") > 1210) {
        imagenesElem.closest(".gallery-item").classList.add("imgMax");
    }
}

setTimeout(() => {
    var elem = document.querySelector(".gallery");
    var iso = new Isotope(elem, {
        // options
        itemSelector: ".gallery-item",
        layoutMode: "masonry",
    });
}, 500);

//////////////////////// CLASS BODY

const urlPage = () => {

    if (window.location.pathname.includes("proyecto")) {
        document.querySelector("body").classList.add("body-projects");
    }
    
    if (window.location.pathname.split('/')[2] == "en") {
        document.querySelector(".galeria").classList.add("galeria-en");
    }

}

urlPage();
