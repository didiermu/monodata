const btnRemove = () => {
    const mediaquery = window.matchMedia("(max-width: 1024px)");

    const btnSearch = document.querySelector(".icon-search");
    const headerRow = document.querySelector(".header--row");
    const headerTwo = document.querySelector(".header--two");

    const liSearch = document.querySelector("#li-search");

    // const navbarNav = document.querySelector("nav");
    // const navbarNavDesk = document.querySelector(".header--navegacion ul");
    // const botonHeader = document.querySelector("#link-btn-header");

    if (mediaquery.matches) {
        // headerRow.append(btnSearch);
        headerRow.append(liSearch);
    } else {
        // headerTwo.append(btnSearch);
        headerTwo.append(liSearch);
    }
};

const nav = () => {
    btnHam = document.querySelector(".btn-ham");
    btnHam.onclick = function () {
        document.querySelector("body").classList.toggle("nav-on");
        document.querySelector(".header").classList.toggle("open");
        btnHam.classList.toggle("ham-on");
    };
};

window.onresize = () => {
    console.log("resize");
    btnRemove();
};

btnRemove();
nav();
