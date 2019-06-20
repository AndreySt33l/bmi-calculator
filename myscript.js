function calculateBMI() {
    var height, weight, result, status;

    height = document.getElementById("height").value/100;
    weight = document.getElementById("weight").value;
    result = weight/(height*height);

    console.log("Height: " + height);
    console.log("Weight: " + weight);
    console.log("Result: " + result);

    if(result > 0.1 && result <= 18.5){
        console.log("Underweight");
        status = "Underweight";
    }
    else if (result > 18.5 && result <= 25){
        console.log("Normal weight");
        status = "Normal weight";
    }
    else if(result > 25 && result <= 30){
        console.log("Overweight");
        status = "Overweight";
    }
    else if(result > 30){
        console.log("Obese");
        status = "Obese";
    }
    else {
        status = "Unknown";
    }
    alert("Body Mass Index: " + result + ", status: " + status);
}