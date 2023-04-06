"use strict";

var btnRemove = function btnRemove() {
  var mediaquery = window.matchMedia("(max-width: 1024px)");
  var btnSearch = document.querySelector(".icon-search");
  var headerRow = document.querySelector(".header--row");
  var headerTwo = document.querySelector(".header--two");
  var liSearch = document.querySelector("#li-search");

  if (mediaquery.matches) {
    headerRow.append(liSearch);
  } else {
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
  btnRemove();
};

btnRemove();
nav();

if (window.location.pathname.split("/")[1] == "en") {
  document.querySelector(".header").classList.add("header-en");
}
//# sourceMappingURL=nav.dev.js.map
