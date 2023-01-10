let imgsDB = [
        ['img/cat-pic-1/row-1-column-1.jpg',
            'img/cat-pic-1/row-2-column-1.jpg',
            'img/cat-pic-1/row-3-column-1.jpg'],
        ['img/cat-pic-2/row-1-column-1.jpg',
            'img/cat-pic-2/row-2-column-1.jpg',
            'img/cat-pic-2/row-3-column-1.jpg'],
        ['img/cat-pic-3/row-1-column-1.jpg',
            'img/cat-pic-3/row-2-column-1.jpg',
            'img/cat-pic-3/row-3-column-1.jpg'],
    ];
let pic = [];
let boxNumber = 3;
function changePic(boxID, picID){
    let box = "row-"+(boxID+1)+"-column-1";
    // console.log(box);
    document.getElementById(box).setAttribute("src",imgsDB[picID][boxID]);
}
document.addEventListener("click", function(event){
    let target = event.target;
    console.log(target);
    let box = null;
    switch(target.id){
        case "row-1-column-1":
            pic[0] = (pic[0]+1)%3;
            box = 0;
            break;
        case "row-2-column-1":
            pic[1] = (pic[1]+1)%3;
            box = 1;
            break;
        case "row-3-column-1":
            pic[2] = (pic[2]+1)%3;
            box = 2;
            break;
        //others?
    }
    // console.log("box: ",box, " pic: ",pic[box]);
    changePic(box,pic[box]);
    // console.log(pic);
    // console.log(checkMatch());
    // target.onload = function (){
    if (checkMatch()) {
        alert("You win!");
    }
});
function init(){
    for (let i = 0; i < boxNumber; i++ ){
        let picID = parseInt(Math.floor(Math.random() * 3));
        pic[i] = picID;
        changePic(i, picID);
    }
}
window.onload = init;
function checkMatch (){
    let match = true;
    for (let i = 0; i < boxNumber-1; i++ ){
        // console.log("i: ",i,pic[i], pic[++i]);
        if (pic[i] !== pic[i+1]) {
            match = false;
            break;
        }
    }
    // console.log(match);
    return match;
}