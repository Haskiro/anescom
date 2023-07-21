const loginForm = document.getElementById("loginForm");
const regForm = document.getElementById("regForm");
const switchFormButtonLogin = document.getElementById("switchFormButtonLogin");
const switchFormButtonReg = document.getElementById("switchFormButtonReg");

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