let imageElement = document.getElementById("image");
let wrngMsg = document.getElementById("warningMessage");
let originalImageWidth = 200;
let width = document.getElementById("imageWidth");

imageElement.style.width = originalImageWidth + "px";

function increse() {
    if (originalImageWidth > 295) {
        wrngMsg.textContent = "Too big.Decrease the size of Image";
    } else {
        originalImageWidth = originalImageWidth + 5;
        imageElement.style.width = originalImageWidth + "px";
        width.textContent = originalImageWidth + "px";
        wrngMsg.textContent = '';
    }
}

function decrment() {
    if (originalImageWidth < 105) {
        wrngMsg.textContent = "Can't visible.Increse the size of Image";
    } else {
        originalImageWidth = originalImageWidth - 5;
        imageElement.style.width = originalImageWidth + "px";
        width.textContent = originalImageWidth + "px";
        wrngMsg.textContent = "";
    }
}