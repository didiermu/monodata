const btnRemove = () => {
    const mediaquery = window.matchMedia("(max-width: 1024px)");

    const btnSearch = document.querySelector(".icon-search");
    const headerRow = document.querySelector(".header--row");
    const headerTwo = document.querySelector(".header--two");

    const liSearch = document.querySelector("#li-search");

    if (mediaquery.matches) {
        headerRow.append(liSearch);
    } else {
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
    btnRemove();
};

btnRemove();
nav();

if (window.location.pathname.split("/")[1] == "en") {
    document.querySelector(".header").classList.add("header-en");
}
