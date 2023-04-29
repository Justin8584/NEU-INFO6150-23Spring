"use strict";
(function () {
    const buttonEl = document.querySelector("button");

    buttonEl.addEventListener("click", function () {
        const btnEl = document.querySelector(".header-nav__list");
        btnEl.classList.toggle("active");
    });
})();
