"use script";
(function () {
    const nameEl = document.querySelector(".register__name");
    const nameGroupEl = document.querySelector(".register__name-group");

    function isNameInvalid(name) {
        return name === "";
    }

    const emailEl = document.querySelector(".register__email");
    const emailElErr = document.querySelector(".register__email--error");

    function isEmailInvalid(email) {
        if (email === "" || !email.includes("@")) {
            emailElErr.innerText = " * Please enter a valid email";
            return true;
        } else {
            emailElErr.innerText = "";
            return false;
        }
    }

    const confirmEl = document.querySelector(".register__confirm");
    const confirmElErr = document.querySelector(".register__confirm--error");

    function isConfirmInvalid(email, confirm) {
        if (isEmailInvalid(email)) {
            confirmElErr.innerText = "";
            return false;
        }
        if (confirm === emailEl.value && emailEl.value !== "" && confirm !== "") {
            confirmElErr.innerText = "";
            return false;
        } else {
            confirmElErr.innerText = " * Please enter the same email address.";
            return true;
        }
    }

    const registerEl = document.querySelector(".register");
    registerEl.addEventListener("submit", (event) => {
        nameGroupEl.classList.remove("register__name-invalid");
        let isInvalid = false;
        if (isNameInvalid(nameEl.value)) {
            nameGroupEl.classList.add("register__name-invalid");
            isInvalid = true;
        }
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
