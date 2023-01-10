let width = window.innerWidth * 0.9;
let height = window.innerHeight * 0.9;
document.addEventListener("click", function(event){
    let target = event.target;
    console.log(target);
    switch(target.id){
        case "yes":
            alert("<3");
            break;
        case "no":
            document.getElementById("no").style.left = Math.floor(Math.random() * width);
            break;
        //others?
    }
});
let moving = document.getElementById("no");
moving.style.position = "relative";
moving.addEventListener("mouseover", function (){
    moving.style.left = Math.floor(Math.random() * width) + "px";
    moving.style.top = Math.floor(Math.random() * height) + "px";
});