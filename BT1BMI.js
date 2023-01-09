let button = document.getElementById("calculate");
button.addEventListener("click", function (){
    let height = parseInt(document.getElementById("height").value);
    let weight = parseInt(document.getElementById("weight").value);
    let thisbmi = bmi(height, weight).toFixed(2);
    document.getElementById("result").innerHTML = "BMI =" + thisbmi + " : " + bmiClassification(thisbmi);
})
function bmi(height, weight){
    return (weight/((height)/100)**2);
}
function bmiClassification(bmi){
    if (bmi < 18.5){
        return "Underweight";
    } else if (bmi < 25) {
        return "Normal"
    } else if (bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}