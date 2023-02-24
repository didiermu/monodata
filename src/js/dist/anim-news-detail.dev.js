"use strict";

var swipOp = {
  // const swiper = new Swiper(slider, {
  direction: "horizontal",
  slidesPerView: 1,
  // allowTouchMove: true,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    // type: "bullets",
    clickable: true,
    enabled: true,
    renderBullet: function renderBullet(index, className) {
      return '<div class="' + className + '">0' + (index + 1) + "</div>";
    }
  }
};
var mySwiper = new Swiper(document.querySelector(".swiper"), swipOp);

if (window.location.pathname.includes("noticias")) {
  document.querySelector("body").classList.add("body-news");
}
//# sourceMappingURL=anim-news-detail.dev.js.map
