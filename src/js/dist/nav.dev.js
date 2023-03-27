"use strict";

var btnRemove = function btnRemove() {
  var mediaquery = window.matchMedia("(max-width: 1024px)");
  var btnSearch = document.querySelector(".icon-search");
  var headerRow = document.querySelector(".header--row");
  var headerTwo = document.querySelector(".header--two");
  var liSearch = document.querySelector("#li-search"); // const navbarNav = document.querySelector("nav");
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

var nav = function nav() {
  btnHam = document.querySelector(".btn-ham");

  btnHam.onclick = function () {
    document.querySelector("body").classList.toggle("nav-on");
    document.querySelector(".header").classList.toggle("open");
    btnHam.classList.toggle("ham-on");
  };
};

window.onresize = function () {
  console.log("resize");
  btnRemove();
};

btnRemove();
nav();
//# sourceMappingURL=nav.dev.js.map
