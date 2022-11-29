// const cursor = document.querySelector(".pointed");
// const heroVideo = document.querySelector(".hero--video");

// const moveCursor = (e) => {
//     const mouseY = e.clientY - 350;
//     const mouseX = e.clientX - 50;
//     // const mouseY = e.clientY;
//     // const mouseX = e.clientX;

//     cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
// };

// heroVideo.addEventListener("mousemove", moveCursor);

const cursor = () => {
    gsap.set(".pointed", { xPercent: -50, yPercent: -50 });

    const ball = document.querySelector(".pointed");
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

cursor();

const hoverServices = () => {
    const itemsServices = document.querySelectorAll(".servicios__item");

    for (const itemsServicesElem of itemsServices) {
        itemsServicesElem.onmouseover = () => {
            for (const itemsServicesElem of itemsServices) {
                itemsServicesElem.classList.remove("active", "onactive");
            }
            itemsServicesElem.classList.add("active");
            // itemsServicesElem.classList.remove("onactive");
            // setTimeout(() => {
            //     itemsServicesElem.classList.add("active");
            // }, 1000);
        };

        //  itemsServicesElem.onmouseenter = () => {

        //  };
    }
};

hoverServices();
