const loginForm = document.getElementById("loginForm");
const regForm = document.getElementById("regForm");
const switchFormButtonLogin = document.getElementById("switchFormButtonLogin");
const switchFormButtonReg = document.getElementById("switchFormButtonReg");
const emailCodeInputList = document.querySelectorAll(".emailCodeNumb");

emailCodeInputList.forEach((input, idx) => {
    input.addEventListener("input", (e) => {
        const { target } = e;
        const { value } = target;
        const last = value.slice(-1);
        target.value = last.match(/[0-9]/) ? last : '';
        if (idx + 1 < emailCodeInputList.length && target.value.length === 1) {
            emailCodeInputList[idx + 1].focus();
        }
    })
})

switchFormButtonLogin.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.toggle("hidden");
    regForm.classList.toggle("hidden");
})

switchFormButtonReg.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.toggle("hidden");
    regForm.classList.toggle("hidden");
})