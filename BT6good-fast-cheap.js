function countChecked(){
    let count = 0;
    for (let i = 0; i < 3; i++){
        if (document.getElementById("box"+i).checked === true){
            count ++;
        }
    }
    return count;
}
// console.log(countChecked());
document.addEventListener("click", function(event){
    let target = event.target;
    console.log(target);
    if (countChecked()===3) {
        let nextBox = "box"+(parseInt(target.id.slice(3))+1)%3;
        console.log(nextBox);
        document.getElementById(nextBox).checked = false;
    }
    // switch(target.id){
    //     case "box1":
    //
    //         break;
    //     case "box2":
    //         document.getElementById("no").style.left = Math.floor(Math.random() * width);
    //         break;
    //     //others?
    // }
});