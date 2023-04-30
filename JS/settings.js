
document.addEventListener("DOMContentLoaded", function () {
  checkIfNightModeBoxShouldBeTicked();
});

function checkIfNightModeBoxShouldBeTicked() {
    const inputCheckbox = document.getElementById("inputCheckBoxSettings");
    const nightModeStorage = localStorage.getItem("nightMode");

    if (nightModeStorage === "true") {
        inputCheckbox.checked = true;
    } else {
        inputCheckbox.checked = false;
    }
    nightModeFunction();
}

function nightModeFunction() {
    const inputCheckbox = document.getElementById("inputCheckBoxSettings");

    if (inputCheckbox.checked) {
        localStorage.setItem("nightMode", true);
        checkUserPreferences();
    } else {
        localStorage.setItem("nightMode", false);
        checkUserPreferences();
    } 
}

document.getElementById("inputCheckBoxSettings").addEventListener("change", () => {
  nightModeFunction();
})


