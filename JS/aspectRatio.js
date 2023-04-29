
function newWidth() {

    var ogWidthInput = document.getElementById("initial-width").value;
    var ogHeightInput = document.getElementById("initial-height").value;
    var newWidthInput = document.getElementById("new-width");
    var newHeightInput = document.getElementById("new-height").value;
    var aspectRatio = ogWidthInput / ogHeightInput;

    newWidthValue = Math.round(newHeightInput * aspectRatio);
    newWidthInput.value = newWidthValue;
}

function newHeight() {

    var ogWidthInput = document.getElementById("initial-width").value;
    var ogHeightInput = document.getElementById("initial-height").value;
    var newWidthInput = document.getElementById("new-width").value;
    var newHeightInput = document.getElementById("new-height");
    var aspectRatio = ogWidthInput / ogHeightInput;

    newHeightValue = Math.round(newWidthInput/aspectRatio);
    newHeightInput.value = newHeightValue;
}

function newWidth2() {

    var ogWidthInput = document.getElementById("initial-width").value;
    var ogHeightInput = document.getElementById("initial-height").value;
    var newWidthInput = document.getElementById("new-width");
    var newHeightInput = document.getElementById("new-height").value;
    var aspectRatio = ogWidthInput / ogHeightInput;

    if (ogWidthInput != "" && ogHeightInput != "") {
        newWidthValue = Math.round(newHeightInput * aspectRatio);
        if (newWidthValue != "0") {
            console.log(newWidthValue);
            newWidthInput.value = newWidthValue;
        }
    }
}


function newHeight2() {

    var ogWidthInput = document.getElementById("initial-width").value;
    var ogHeightInput = document.getElementById("initial-height").value;
    var newWidthInput = document.getElementById("new-width").value;
    var newHeightInput = document.getElementById("new-height");
    var aspectRatio = ogWidthInput / ogHeightInput;

    if (ogWidthInput != "" && ogHeightInput != "") {
            newHeightValue = Math.round(newWidthInput / aspectRatio);
            if (newHeightValue != "0") {
                console.log(newHeightValue);
                newHeightInput.value = newHeightValue;
            }
    }
}


document.getElementById("initial-width").addEventListener("keyup", () => {
    newHeight2();
})
document.getElementById("initial-height").addEventListener("keyup", () => {
    newHeight2();
})


document.getElementById("new-width").addEventListener("keyup", () => {
    newHeight();
})
document.getElementById("new-height").addEventListener("keyup", () => {
    newWidth();
})

