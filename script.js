const myBmi = document.getElementById('btn');

myBmi.addEventListener('click', function () {
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  const bmi = weight / (height * 0.01)**2;
  const newBmi = bmi.toFixed(2);
  document.getElementById('result').innerHTML = "Your BMI is " + newBmi;
})