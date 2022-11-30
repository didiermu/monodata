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

smoothScroll("main");

function smoothScroll(content, viewport, smoothness) {
    content = gsap.utils.toArray(content)[0];
    smoothness = smoothness || 1;

    gsap.set(viewport || content.parentNode, {
        overflow: "hidden",
        position: "fixed",
        height: "100%",
        width: "100%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    });
    gsap.set(content, { overflow: "visible", width: "100%" });

    let getProp = gsap.getProperty(content),
        setProp = gsap.quickSetter(content, "y", "px"),
        setScroll = ScrollTrigger.getScrollFunc(window),
        removeScroll = () => (content.style.overflow = "visible"),
        killScrub = (trigger) => {
            let scrub = trigger.getTween
                ? trigger.getTween()
                : gsap.getTweensOf(trigger.animation)[0]; // getTween() was added in 3.6.2
            scrub && scrub.pause();
            trigger.animation.progress(trigger.progress);
        },
        height,
        isProxyScrolling;

    function refreshHeight() {
        height = content.clientHeight;
        content.style.overflow = "visible";
        document.body.style.height = height + "px";
        return height - document.documentElement.clientHeight;
    }

    ScrollTrigger.addEventListener("refresh", () => {
        removeScroll();
        requestAnimationFrame(removeScroll);
    });
    ScrollTrigger.defaults({ scroller: content });
    ScrollTrigger.prototype.update = (p) => p; // works around an issue in ScrollTrigger 3.6.1 and earlier (fixed in 3.6.2, so this line could be deleted if you're using 3.6.2 or later)

    ScrollTrigger.scrollerProxy(content, {
        scrollTop(value) {
            if (arguments.length) {
                isProxyScrolling = true; // otherwise, if snapping was applied (or anything that attempted to SET the scroll proxy's scroll position), we'd set the scroll here which would then (on the next tick) update the content tween/ScrollTrigger which would try to smoothly animate to that new value, thus the scrub tween would impede the progress. So we use this flag to respond accordingly in the ScrollTrigger's onUpdate and effectively force the scrub to its end immediately.
                setProp(-value);
                setScroll(value);
                return;
            }
            return -getProp("y");
        },
        scrollHeight: () => document.body.scrollHeight,
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
    });

    return ScrollTrigger.create({
        animation: gsap.fromTo(
            content,
            { y: 0 },
            {
                y: () => document.documentElement.clientHeight - height,
                ease: "none",
                onUpdate: ScrollTrigger.update,
            }
        ),
        scroller: window,
        invalidateOnRefresh: true,
        start: 0,
        end: refreshHeight,
        refreshPriority: -999,
        scrub: smoothness,
        onUpdate: (self) => {
            if (isProxyScrolling) {
                killScrub(self);
                isProxyScrolling = false;
            }
        },
        onRefresh: killScrub, // when the screen resizes, we just want the animation to immediately go to the appropriate spot rather than animating there, so basically kill the scrub.
    });
}
