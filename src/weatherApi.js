export default async function weatherApi(location) {
  const response = await fetch(
    "http://api.weatherapi.com/v1/current.json?key=14d573de68f64a588bf221634241505&q=" + location,
    {
      mode: "cors",
    }
  );
  const weatherData = await response.json();
  const processedData = processApiData(weatherData);
  return processedData;
}

function processApiData(data) {
  const conditionText = data.current.condition.text;
  const conditionIcon = data.current.condition.icon;
  const celsius = "ºC " + data.current.temp_c;
  const fahrenheit = "ºF " + data.current.temp_f;
  const location = data.location.name;
  const date = data.location.localtime;
  return { conditionText, conditionIcon, celsius, fahrenheit, location, date };
}
