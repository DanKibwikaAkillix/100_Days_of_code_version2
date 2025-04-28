function bmiCalculator (weight, height) {
    bmi = weight/(height**2);
    if (bmi < 18.5) {
        interpretation = "Your BMI is "+bmi+", so you are underweight.";
    }
    else if (bmi >= 18.5 || bmi <= 24.9) {
        interpretation  = "Your BMI is "+bmi+", so you have a normal weight."
    }
    else {
        interpretation = "Your BMI is "+bmi+", so you are overweight."
    }
    return interpretation;
}
bmiCalculator(4,5)
