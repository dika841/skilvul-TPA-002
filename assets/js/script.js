const getWeight = document.getElementById("weight");
const getHeight = document.getElementById("height");
const bmi = document.getElementById("results");
const formSubmit = document.getElementById("bmiform");

const calculateBMI = (e) => {
  e.preventDefault();

  let results = (getWeight.value / (getHeight.value / 100) ** 2).toFixed(1);

  if (results < 18.5) {
    bmi.innerHTML = `<p>
    Your BMI is <strong>${results}</strong> which means You are
    <strong>Underweight</strong>
  </p>`;
  } else if (results >= 18.5 && results <= 24.9) {
    bmi.innerHTML = `<p>
    Your BMI is <strong>${results}</strong> which means You are
    <strong>Normal Weight</strong>
  </p>`;
  } else if (results >= 25 && results <= 29.9) {
    bmi.innerHTML = `<p>
    Your BMI is <strong>${results}</strong> which means You are
    <strong>Overweight</strong>
  </p>`;
  } else {
    bmi.innerHTML = `<p>
    Your BMI is <strong>${results}</strong> which means You are
    <strong>Obesity</strong>
  </p>`;
  }
  formSubmit.reset();
};

formSubmit.addEventListener("submit", calculateBMI);
