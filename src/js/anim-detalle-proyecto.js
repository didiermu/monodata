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

const sliderDetalle = () => {
    const swiper = new Swiper(".swiper", {
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
    });
};

const sliderResp = () => {
    const mediaquery = window.matchMedia("(max-width: 768px)");
    const galeria = document.querySelector(".galeria");
    const modal = document.querySelector(".modal-body");
    const slider = document.querySelector(".swiper");

    if (mediaquery.matches) {
        galeria.insertAdjacentElement("afterbegin", slider);
    } else {
        modal.insertAdjacentElement("afterbegin", slider);
    }
};

sliderResp();
sliderDetalle();

window.addEventListener("resize", () => {
    sliderResp();
    sliderDetalle();
});

//////////////////////// CLASS BODY

if (window.location.pathname.includes("proyecto")) {
    document.querySelector("body").classList.add("body-projects");
}
