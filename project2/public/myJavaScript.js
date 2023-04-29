"use script";
(function () {

    // Header Icon Menu (Hamburger) - index.html
    const headerBtnEl = document.querySelector(".header__icon");

    headerBtnEl.addEventListener("click", function () {
        const btnEl = document.querySelector(".header__nav-menu");
        btnEl.classList.toggle("header__nav-active");
    });

    // Subscribe - cats.html
    // Page pop up
    const modalEl = document.querySelector(".modal");
    const openEl = document.querySelector(".cards");
    const cancelEl = document.querySelector(".cancel");

    openEl.addEventListener("click", (e) => {
        if (e.target.classList.contains("open")) {
            modalEl.showModal();
        }
    });

    cancelEl.addEventListener("click", () => {
        modalEl.close();
    });

    // Check the validation of email and confirm
    const emailEl = document.querySelector(".subscribe__email");
    const emailElErr = document.querySelector(".subscribe__email--error");

    function isEmailInvalid(email) {
        if (email === "") {
            emailElErr.innerText = "This field is required";
            return true;
        }
        if (!email.includes("@")) {
            emailElErr.innerText = "This field be a valid email address including a @";
            return true;
        } else {
            emailElErr.innerText = "";
            return false;
        }
    }

    const confirmEl = document.querySelector(".subscribe__confirm");
    const confirmElErr = document.querySelector(".subscribe__confirm--error");

    function isConfirmInvalid(email, confirm) {
        if (isEmailInvalid(email)) {
            confirmElErr.innerText = "";
            return false;
        }
        if (confirm === emailEl.value && emailEl.value !== "" && confirm !== "") {
            confirmElErr.innerText = "";
            return false;
        } else {
            confirmElErr.innerText = "This field must match the provided email address";
            return true;
        }
    }

    // check the validation for all required fields
    const registerEl = document.querySelector(".subscribe");
    registerEl.addEventListener("submit", (event) => {
        let isInvalid = false;
        if (isEmailInvalid(emailEl.value)) {
            isInvalid = true;
        }
        if (isConfirmInvalid(emailEl.value, confirmEl.value)) {
            isInvalid = true;
        }
        if (isInvalid) {
            event.preventDefault();
        }
    });

})();
