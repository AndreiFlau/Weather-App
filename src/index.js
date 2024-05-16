import "./styles.css";
import weatherApi from "./weatherApi";

const weather = await weatherApi("Milan");
console.log(weather);

async function userInput() {
  const locationBtn = document.querySelector("#locationBtn");

  locationBtn.addEventListener("click", async () => {
    const userInput = document.querySelector("#location").value;
    console.log(await weatherApi(userInput));
  });
}

userInput();
