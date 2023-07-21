const emailCodeInputList = document.querySelectorAll(".emailCodeNumb");
const burgerButton = document.getElementById("burgerButton");
const crossButton = document.getElementById("crossButton");
const navSmall = document.getElementById("navSmall");

burgerButton.addEventListener("click", () => {
    navSmall.classList.toggle("translate-x-[0px]")
})

crossButton.addEventListener("click", () => {
    navSmall.classList.toggle("translate-x-[0px]")
})


//Разрешает вводить только цифры и только по одной, также переключает на след поле после ввода в текущее
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
