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

const cursorPlay = () => {
    gsap.set(".cursor.pause", { xPercent: -50, yPercent: -50 });

    const ball = document.querySelector(".cursor.pause");
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.2;

    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");

    window.addEventListener("mousemove", (e) => {
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
    const cursorPoint = document.querySelector(".cursor");
    const cursorPointPlay = document.querySelector(".cursor.pause");
    const wrapVideo = document.querySelector(".hero--video");
    var options = { fluid: true, responsive: true };
    var player = videojs("video-desktop", options, function onPlayerReady() {
        // videojs.log("Your player is ready!");
    });

    wrapVideo.onclick = () => {
        player.play();
        // cursorPoint.classList.toggle("hide");
        // cursorPointPlay.classList.toggle("show");
    };

    // cursorPointPlay.onclick = () => {
    //     player.pause();
    //     cursorPoint.classList.add("hide");
    //     cursorPointPlay.classList.remove("show");
    // };

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

const swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "custom",
        clickable: true,
        renderCustom: function (swiperContent, currentClass, totalClass) {
            return currentClass + " / " + totalClass;
        },
    },
});

playVideo();
cursor();
cursorPlay();
