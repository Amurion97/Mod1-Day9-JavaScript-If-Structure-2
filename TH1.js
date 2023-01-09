let image1 = document.getElementById("image1");
window.onload = function () {
    init(image1);
};
function init(image) {
    image.style.position = "relative";
    image.style.left = "0";
}

let button = document.getElementById("move-right");
button.addEventListener("click", function () {
    moveRight(image1)
});

function moveRight(image) {
    image.style.left = parseInt(image.style.left) + 10 + "px";
    console.log(image.style.left);
}

window.onload = function () {
    init(image1)
};