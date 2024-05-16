export default function changeTemp(celsius, fahrenheit, elementValue, celsiusBtn, fahrenBtn) {
  celsiusBtn.addEventListener("click", () => {
    elementValue.textContent = celsius;
  });
  fahrenBtn.addEventListener("click", () => {
    elementValue.textContent = fahrenheit;
  });
}
