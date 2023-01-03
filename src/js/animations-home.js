gsap.registerPlugin(ScrollTrigger, TextPlugin);

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

playVideo();
cursor();
cursorPlay();

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

const hoverServices = () => {
    const itemsServices = document.querySelectorAll(".servicios__item");

    for (const itemsServicesElem of itemsServices) {
        itemsServicesElem.onmouseover = () => {
            for (const itemsServicesElem of itemsServices) {
                itemsServicesElem.classList.remove("active", "onactive");
            }
            itemsServicesElem.classList.add("active");
        };
    }
};

const objLoad = (elem) => {
    gsap.fromTo(
        elem,
        {
            rotate: 360,
        },
        {
            duration: 3,
            rotate: 0,
            stagger: 0.1,
            ease: "power2.out",
        }
    );
};

const objParallaxArray = (elem) => {
    gsap.utils.toArray(elem).forEach(function (e) {
        gsap.fromTo(
            e,
            {
                opacity: 0,
                yPercent: -1000,
            },
            {
                duration: 1,
                opacity: 1,
                yPercent: 0,
                stagger: 0.1,
                delay: 1,
                ease: "power3.out",
            }
        );
    });
};

const objLoadVertical = (elem) => {
    let boletosArr = gsap.utils.toArray(elem);

    boletosArr.forEach(function () {
        gsap.fromTo(
            boletosArr,
            {
                opacity: 0,
                yPercent: -100,
            },
            {
                duration: 0.5,
                opacity: 1,
                yPercent: 0,
                stagger: 0.1,
                delay: 0.05,
                ease: "ease",
            }
        );
    });
};

const objLoadVerticalLetter = (elem) => {
    let boletosArr = gsap.utils.toArray(elem);

    boletosArr.forEach(function () {
        gsap.fromTo(
            boletosArr,
            {
                opacity: 0,
                yPercent: 100,
            },
            {
                duration: 0.5,
                opacity: 1,
                yPercent: 0,
                stagger: 0.3,
                delay: 0.1,
                ease: "ease",
            }
        );
    });
};

const objText = (elem) => {
    let boletosArr = gsap.utils.toArray(elem);

    boletosArr.forEach(function () {
        gsap.fromTo(
            boletosArr,
            {
                opacity: 0,
                yPercent: 50,
            },
            {
                duration: 1,
                opacity: 1,
                yPercent: 0,
                stagger: 1,
                delay: 1,
                ease: "power3.out",
            }
        );
    });
};

const objParallax = (trigger, elem, posicion) => {
    gsap.from(elem, {
        yPercent: 0,
    });

    gsap.to(elem, {
        yPercent: posicion,
        ease: "none",
        scrollTrigger: {
            trigger: trigger,
            start: "top center",
            end: "+=300",
            scrub: 1,
            // toggleActions: "restart pause reverse pause",
            // markers: true,
            immediateRender: false,
        },
    });
};

const animContenido = (trigger, elem) => {
    const controller = new ScrollMagic.Controller();
    const info = new ScrollMagic.Scene({
        triggerElement: trigger,
        triggerHook: 0.9,
        duration: 600,
    })
        .setTween(
            elem,
            0.5,
            { yPercent: -100 }
            // TweenMax.fromTo(
            //     elem,
            //     1,
            //     {
            //         opacity: 0,
            //         yPercent: 10,
            //     },
            //     {
            //         opacity: 1,
            //         yPercent: 0,
            //         delay: 0.5,
            //     }
            // )
        )
        .addTo(controller);
};

const animContenidoCorto = (trigger, elem) => {
    const controller = new ScrollMagic.Controller();
    const info = new ScrollMagic.Scene({
        triggerElement: trigger,
        triggerHook: 0.9,
    })
        .setTween(
            TweenMax.fromTo(
                elem,
                1,
                {
                    opacity: 0,
                    yPercent: 50,
                },
                {
                    opacity: 1,
                    yPercent: 0,
                    delay: 0.5,
                }
            )
        )
        .on("start", function () {
            anime({
                targets: ".char",
                opacity: [0, 1],
                translateY: 30,
                delay: anime.stagger(5),
                easing: "cubicBezier(.71,-0.77,.43,1.67)",
            });
        })
        .addTo(controller);
};

const animContenidoImage = (trigger, elem) => {
    const controller = new ScrollMagic.Controller();
    const info = new ScrollMagic.Scene({
        triggerElement: trigger,
        triggerHook: 0.5,
        duration: 600,
    })
        .setTween(
            elem,
            0.5,
            { scale: 1.5 }
            // TweenMax.fromTo(
            //     elem,
            //     1,
            //     {
            //         opacity: 0,
            //         yPercent: 10,
            //     },
            //     {
            //         opacity: 1,
            //         yPercent: 0,
            //         delay: 0.5,
            //     }
            // )
        )
        .addTo(controller);
};

const objParallaxSimple = (trigger, elem) => {
    let boletosArr = gsap.utils.toArray(elem);

    boletosArr.forEach((target) => {
        gsap.fromTo(
            boletosArr,
            {
                opacity: 0,
                yPercent: 50,
            },
            {
                duration: 2,
                opacity: 1,
                yPercent: 0,
                stagger: 0.3,
                ease: "ease",
                delay: 2,
                scrollTrigger: {
                    trigger: trigger,
                    scrub: 1,
                    start: "+=100 center",
                    end: "center +=700",
                    toggleActions: "restart pause reverse pause",
                    immediateRender: false,
                    // markers: true,
                },
            }
        );
    });
};

// animContenido(".hero--video", ".hero h1");
objLoad(".header img");
objLoadVertical(".header ul");

const animLetter = () => {
    splt({
        target: ".hero--contain .splt",
    });
};

const animLetterDos = () => {
    splt({
        target: ".projects .splt",
    });
};

// animLetter();
animLetterDos();

objLoadVerticalLetter(".hero--contain .splt");
// objText(".hero h1");

animContenidoCorto(".projects", ".projects h2");

animContenidoImage(".servicios--pic", ".servicios--pic img");
// objParallaxArray(".papers__item");

// objParallaxSimple(".contact", ".contact--access *");
// objParallaxSimple(".contact", ".contact--data .col-lg-3");

hoverServices();

const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    slidesPerView: 1,
    allowTouchMove: true,
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
    },
});
