let num1 = 0;
let num2 = 0;
let view = "";
let done = false;
let operator = null;

console.log(parseInt("row-1-column-1"));
document.addEventListener("click", function(event){
    let target = event.target;
    console.log(target);
    switch(target.id){
        case "but10":
            console.log(view);
            num2 = parseFloat(view);
            num1 = calculator(num1, num2, operator);
            printResult(num1);
            view = "";
            break;
        case "but11":
        case "but12":
        case "but13":
        case "but14":
            operator = target.value;
            done = (!done)? true : true;
            num1 = (done && !num1)? parseFloat(view):num1;
            break;
        case "but15":
            view = "";
            printResult(view);
            done = false;
            num1 = "";
            num2 = "";
            break;
        case "but20":
        case "but21":
        case "but22":
        case "but23":
        case "but24":
        case "but25":
        case "but26":
        case "but27":
        case "but28":
        case "but29":
            view = (done)? "": view;
            done = (done)? false : done;
            view += target.value;
            printResult(view);
            break;

        //others?
    }
});
function digitCount(text){
    // console.log(text.toString().length);
    if (text.toString().indexOf(".") < 0) {
        return 0;
    }
    else {
        return text.toString().length - text.toString().indexOf(".") - 1;
    }

}
function calculator(num1, num2, operatorNo) {
   // let num1 = parseFloat(document.getElementById("num1").value);
   let num1digit = digitCount(num1.toString());
   console.log("num1: "+num1 +" "+num1digit);

   // let num2 = parseFloat(document.getElementById("num2").value);
   let num2digit = digitCount(num2.toString());
   console.log("num2: "+num2 +" "+num2digit);

   let result;
   let resultDigit = num1digit+num2digit;
   // console.log(operatorNo);
   switch (operatorNo){
       case "+":
           result = num1+num2;
           break;
       case "-":
           result = num1-num2;
           break;
       case "*":
           result = num1*num2;
           break;
       case "/":
           result = num1/num2;
           resultDigit = num1digit + digitCount((1/num2).toString());
           break;
   }
   // console.log(result);

   result = parseFloat(result.toFixed(resultDigit));
   console.log(typeof result);
   return result;
}
function printResult(result) {
    document.getElementById("result").innerHTML = result;
    return 1;
}


// let additionID = buttons.get("addition");
// let addition = document.getElementById("but"+additionID.toString());
// addition.addEventListener("click", function (){
//     printResult(calculator(additionID))
// });
//
// let subtractionID = buttons.get("subtraction");
// let subtraction = document.getElementById("but"+subtractionID.toString());
// subtraction.addEventListener("click", function (){
//     printResult(calculator(subtractionID))
// });
//
// let multiplicationID = buttons.get("multiplication");
// let multiplication = document.getElementById("but"+multiplicationID.toString());
// multiplication.addEventListener("click", function (){
//     printResult(calculator(multiplicationID))
// });
//
// let divisionID = buttons.get("division");
// let division = document.getElementById("but"+divisionID.toString());
// division.addEventListener("click", function (){
//     printResult(calculator(divisionID))
// });
//
// let divisionID = buttons.get("division");
// let division = document.getElementById("but"+divisionID.toString());
// division.addEventListener("click", function (){
//     printResult(calculator(divisionID))
// });
//
// const buttons = new Map([
//     ["num0", 20],
//     ["num1", 21],
//     ["num2", 22],
//     ["num3", 23],
//     ["num4", 24],
//     ["num5", 25],
//     ["num6", 26],
//     ["num7", 27],
//     ["num8", 28],
//     ["num9", 29],
//     ["equal", 10],
//     ["addition", 11],
//     ["subtraction", 12],
//     ["multiplication", 13],
//     ["division", 14],
//     ["clear", 15],
// ]);