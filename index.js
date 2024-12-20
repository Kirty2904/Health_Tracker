// JavaScript File: scripts.js

document.getElementById("bmiButton").addEventListener("click", function () {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    const resultDiv = document.getElementById('bmiResult');

    if (!weight || !height) {
        resultDiv.textContent = 'Please enter valid inputs.';
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let status;

    if (bmi < 18.5) status = 'Underweight';
    else if (bmi < 24.9) status = 'Normal weight';
    else if (bmi < 29.9) status = 'Overweight';
    else status = 'Obese';

    resultDiv.textContent = `Your BMI is ${bmi} (${status}).`;
});

document.getElementById("waterButton").addEventListener("click", function () {
    const weight = parseFloat(document.getElementById('weightWater').value);
    const activity = document.getElementById('activity').value;
    const resultDiv = document.getElementById('waterResult');

    if (!weight) {
        resultDiv.textContent = 'Please enter a valid weight.';
        return;
    }

    let multiplier;
    if (activity === 'low') multiplier = 30;
    else if (activity === 'moderate') multiplier = 35;
    else multiplier = 40;

    const waterIntake = ((weight * multiplier) / 1000).toFixed(2);
    resultDiv.textContent =` You should drink approximately ${waterIntake} liters of water daily.`;
});

function displayHealthTip() {
    const tips = [
        'Drink plenty of water throughout the day.',
        'Incorporate at least 30 minutes of exercise daily.',
        'Eat more fruits and vegetables.',
        'Get enough sleep every night.',
        'Practice mindfulness and stress management techniques.'
    ];

    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById('healthTip').textContent = randomTip;
}

// Display a tip on load
displayHealthTip();