const objParallaxArray = (trigger, elem) => {
    let boletosArr = gsap.utils.toArray(elem);

    boletosArr.forEach((target) => {
        gsap.fromTo(
            boletosArr,
            {
                opacity: 0,
                yPercent: 10,
            },
            {
                duration: 2,
                opacity: 1,
                yPercent: 0,
                stagger: 0.3,
                ease: "ease",
                delay: 1,
                scrollTrigger: {
                    trigger: target,
                    scrub: 1,
                    start: "-=200 center",
                    end: "top center",
                    // toggleActions: "restart pause reverse pause",
                    immediateRender: true,
                    markers: true,
                },
            }
        );
    });
};

// objParallaxArray(".grid__item", ".grid__item img");

const objParallaxText = (trigger, elem, posicion) => {
    gsap.utils.toArray(elem).forEach(function (elem) {
        gsap.from(elem, {
            yPercent: 0,
            opacity: 0,
        });

        gsap.to(elem, {
            yPercent: posicion,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                trigger: elem,
                start: "top center",
                end: "+=600",
                scrub: 1,
                toggleActions: "restart pause reverse pause",
                // markers: true,
                immediateRender: false,
            },
        });
    });
};

objParallaxText(".grid__item", ".grid__item .col-lg-5", -10);
objParallaxText(".grid__item", ".grid__item .col-lg-6", -20);

//////////////////////// CLASS BODY

if (window.location.pathname.includes("noticias")) {
    document.querySelector("body").classList.add("body-news");
}
