const cursor = () => {
    const wrapVideo = document.querySelector(".hero--video");
    gsap.set(".cursor.play", { xPercent: -50, yPercent: -50 });

    const ball = document.querySelector(".cursor.play");
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.2;

    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");

    wrapVideo.addEventListener("mousemove", (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    gsap.ticker.add(() => {
        // adjust speed for higher refresh monitors
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
    });
};

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

    const mediaquery = window.matchMedia("(max-width: 768px)");
    // if (mediaquery.matches) {
    //     wrapVideo.onclick = () => {
    //         if (player.paused()) {
    //             player.play();
    //         } else {
    //             player.pause();
    //         }

    //         wrapVideo.classList.add("play");
    //         cursorPoint.classList.add("hide");

    //         // cursorPoint.remove();
    //         // cursorPointPlay.classList.toggle("show");
    //     };
    // } else {
    //     player.play();
    // }

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

    // gsap.to(".hero--video", {
    //     scrollTrigger: {
    //         trigger: ".hero",
    //         scrub: 0.7,
    //         start: "top top",
    //         end: "bottom +=400px",
    //         // end: "bottom top",
    //         ease: "power2",
    //         markers: true,
    //         onUpdate: (self) => {
    //             if (self.progress > 0.6) {
    //                 // player.play();
    //             } else {
    //                 player.pause();
    //             }
    //         },
    //     },
    // });
};

playVideo();
// cursor();

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
