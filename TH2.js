let manPic = document.getElementById("walking-man");
window.onload = function () {
    init(manPic);
};
function init(image) {
    image.style.position = "relative";
    image.style.left = "0";
    // image.style.right = "0";
    image.style.top = "0";
    // image.style.bottom = "0";

}
function moveUp(object){
    console.log(object);
    object.style.top = parseInt(object.style.top) - 10 + "px";
}
function moveDown(object){
    console.log(object);
    object.style.top = parseInt(object.style.top) + 10 + "px";
}
function moveLeft(object){
    console.log(object);
    object.style.left = parseInt(object.style.left) - 10 + "px";
}
function moveRight(object){
    console.log(object);
    object.style.left = parseInt(object.style.left) + 10 + "px";
}
function move(event){
    console.log(event.keyCode);
    switch (event.keyCode){
        case 37:
            moveLeft(manPic);
            break;
        case 39:
            moveRight(manPic);
            break;
        case 38:
            moveUp(manPic);
            break;
        case 40:
            moveDown(manPic);
            break;
    }
}
window.addEventListener("keydown",move);