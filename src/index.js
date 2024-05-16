import changeTemp from "./changeTemp";
import "./styles.css";
import weatherApi from "./weatherApi";

const locationElement = document.querySelector(".location");
const conditionElement = document.querySelector(".condition");
const imageElement = document.querySelector("img");
const tempElement = document.querySelector(".temp");
const dateElement = document.querySelector(".date");
const celsiusBtn = document.querySelector(".celsius");
const fahrenBtn = document.querySelector(".fahren");

async function initialState() {
  const weather = await weatherApi("Milan");
  locationElement.textContent = weather.location;
  conditionElement.textContent = weather.conditionText;
  imageElement.src = "https:" + weather.conditionIcon;
  tempElement.textContent = weather.celsius;
  dateElement.textContent = weather.date;

  changeTemp(weather.celsius, weather.fahrenheit, tempElement, celsiusBtn, fahrenBtn);
}

async function userInput() {
  const locationBtn = document.querySelector("#locationBtn");

  locationBtn.addEventListener("click", async () => {
    const userInput = document.querySelector("#location").value;
    const data = await weatherApi(userInput);
    console.log(data);

    const celsius = data.celsius;
    const conditionText = data.conditionText;
    const conditionIcon = "https:" + data.conditionIcon;
    const fahrenheit = data.fahrenheit;
    const location = data.location;
    const date = data.date;

    locationElement.textContent = location;
    conditionElement.textContent = conditionText;
    imageElement.src = conditionIcon;
    if (tempElement.textContent.includes("ºC")) {
      tempElement.textContent = celsius;
    } else {
      tempElement.textContent = fahrenheit;
    }
    dateElement.textContent = date;

    console.log(celsius, conditionText, conditionIcon, fahrenheit, location, date);
    changeTemp(celsius, fahrenheit, tempElement, celsiusBtn, fahrenBtn);
  });
}

initialState();
userInput();
