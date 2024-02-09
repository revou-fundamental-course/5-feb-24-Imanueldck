const convertButton = document.getElementById("convert");
const resetButton = document.getElementById("reset");
const reverseButton = document.getElementById("reverse");
const celsiusInput = document.getElementById("celsius");
const result = document.getElementById("result");
const formula = document.getElementById("formula-value");

convertButton.addEventListener("click", () => {
  const celsius = parseFloat(celsiusInput.value);
  if (isNaN(celsius)) {
    alert("Masukkan suhu dalam bentuk angka.");
    return;
  }
  const fahrenheit = (celsius * 9) / 5 + 32;
  result.textContent = `Hasil: ${fahrenheit}°F`;
  formula.textContent = `C(°F) = (${celsius}°C x 9/5) + 32`;
});

resetButton.addEventListener("click", () => {
  celsiusInput.value = "";
  result.textContent = "Hasil: ";
  formula.textContent = "C(°F) = (C(°C) x 9/5) + 32";
});

reverseButton.addEventListener("click", () => {
  const temp = result.textContent.split(" ")[1];
  const celsius = ((temp - 32) * 5) / 9;
  result.textContent = `Hasil: ${celsius.toFixed(2)}°C`;
  formula.textContent = `C(°C) = (${temp}°F - 32) x 5/9`;
});
