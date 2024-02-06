const lastNumberDelet = document.getElementById("lastRemove");
const clearInput = document.getElementById("remove");
const calc = document.getElementById("equal");
const keyInput = document.querySelectorAll(".keyNumber");

const changeTheme = document.getElementById('theme-change')


import { calculate } from "./math.js";
import { keyEvent } from "./keyEvent.js";
import { inputEvent, clearInputSection, clearLastElement } from "./inputEvents.js";
import { themeAuteration } from "./themeChange.js";


clearInput.addEventListener("click", clearInputSection);

lastNumberDelet.addEventListener("click", clearLastElement);

addEventListener("keydown", keyEvent);


keyInput.forEach((key) => {
    key.addEventListener("click", inputEvent)
});

calc.addEventListener("click", calculate);

changeTheme.addEventListener('click', themeAuteration)