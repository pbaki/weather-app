import { chanceOfRain, chanceOfSnow } from "./weatherChance";

function basicData(city, country, time, conditionIcon, condition, temperature) {
  const dataHolder = document.getElementById("basic-data");

  let cityCountryName = document.createElement("h2");
  cityCountryName.classList.add("cityCountryNameName");
  cityCountryName.innerHTML = city + ", " + country;

  let timeDate = document.createElement("p");
  timeDate.classList.add("timeDate");
  timeDate.innerHTML = time;

  let conditionContainer = document.createElement("div");
  conditionContainer.classList.add("conditionContainer");

  let conditionIconContainer = document.createElement("img");
  conditionIconContainer.setAttribute("src", conditionIcon);
  conditionIconContainer.setAttribute("alt", "Weather Condition Icon");

  let weatherCondition = document.createElement("h2");
  weatherCondition.classList.add("whetherCondition");
  weatherCondition.innerHTML = condition;
  conditionContainer.appendChild(weatherCondition);
  conditionContainer.appendChild(conditionIconContainer);

  let currentTemperature = document.createElement("h1");
  currentTemperature.classList.add("currentTemperature");
  currentTemperature.innerHTML = temperature + " °C";

  if (dataHolder.childNodes.length == 0) {
    dataHolder.appendChild(cityCountryName);
    dataHolder.appendChild(timeDate);
    dataHolder.appendChild(conditionContainer);
    dataHolder.appendChild(currentTemperature);
  } else {
    dataHolder.replaceChild(cityCountryName, dataHolder.children[0]);
    dataHolder.replaceChild(timeDate, dataHolder.children[1]);
    dataHolder.replaceChild(conditionContainer, dataHolder.children[2]);
    dataHolder.replaceChild(currentTemperature, dataHolder.children[3]);
  }
}

function additionalData(
  humidity,
  feelslike,
  windspeed,
  sunrise,
  sunset,
  local_time,
  hourlyForecastData
) {
  const additionalDataHolder = document.getElementById("additional-data");

  let humidityData = document.createElement("p");
  humidityData.classList.add("humidityData");
  humidityData.innerHTML = "Humidity" + "<br>" + humidity + " %";

  let feelslikeData = document.createElement("p");
  feelslikeData.classList.add("feelslikeData");
  feelslikeData.innerHTML = "Feels Like" + "<br>" + feelslike + " °C";

  let windspeedData = document.createElement("p");
  windspeedData.classList.add("windspeedData");
  windspeedData.innerHTML = "Wind Speed" + "<br>" + windspeed + " kph";

  let chanceRainData = document.createElement("p");
  chanceRainData.classList.add("chanceRainData");
  chanceRainData.innerHTML =
    "Chance Of Rain" +
    "<br>" +
    chanceOfRain(hourlyForecastData, local_time) +
    " %";

  // let chanceSnowData = document.createElement("p");
  // chanceSnowData.classList.add("chanceSnowData");
  // chanceSnowData.innerHTML =
  //   "Chance Of Snow" + "<br>" + chanceOfSnow(hourlyForecastData, local_time) + " %";

  if (sunrise[0] == 0) {
    sunrise = sunrise.split("");
    sunrise.shift();
    sunrise = sunrise.join("");
  }
  let sunriseData = document.createElement("p");
  sunriseData.classList.add("sunriseData");
  sunriseData.innerHTML = "Sunrise" + "<br>" + sunrise;

  if (sunset[0] == 0) {
    sunset = sunset.split("");
    sunset.shift();
    sunset = sunset.join("");
  }
  let sunsetData = document.createElement("p");
  sunsetData.classList.add("sunsetData");
  sunsetData.innerHTML = "Sunset" + "<br>" + sunset;

  if (additionalDataHolder.childNodes.length == 0) {
    additionalDataHolder.appendChild(humidityData);
    additionalDataHolder.appendChild(feelslikeData);
    additionalDataHolder.appendChild(windspeedData);
    additionalDataHolder.appendChild(sunriseData);
    additionalDataHolder.appendChild(sunsetData);
    additionalDataHolder.appendChild(chanceRainData);
    // additionalDataHolder.appendChild(chanceSnowData);
  } else {
    additionalDataHolder.replaceChild(
      humidityData,
      additionalDataHolder.children[0]
    );
    additionalDataHolder.replaceChild(
      feelslikeData,
      additionalDataHolder.children[1]
    );
    additionalDataHolder.replaceChild(
      windspeedData,
      additionalDataHolder.children[2]
    );
    additionalDataHolder.replaceChild(
      sunriseData,
      additionalDataHolder.children[3]
    );
    additionalDataHolder.replaceChild(
      sunsetData,
      additionalDataHolder.children[4]
    );
    additionalDataHolder.replaceChild(
      chanceRainData,
      additionalDataHolder.children[5]
    );
    // additionalDataHolder.replaceChild(
    //   chanceSnowData,
    //   additionalDataHolder.children[6]
    // );
  }
}
function errorMsg() {
  const form = document.getElementsByClassName("form")[0];
  if (form.childNodes.length == 2) {
    return;
  }
  const wrongInput = document.createElement("div");
  wrongInput.classList.add("wrongInput");
  wrongInput.innerHTML =
    'Location not found. Try "City", "City, State" or "City, Country".';
  form.appendChild(wrongInput);
}
function errorClean() {
  const form = document.getElementsByClassName("form")[0];
  if (form.childNodes.length == 2) {
    form.lastChild.remove();
  }
}
function convertToFahrenheit() {
  const container = document.getElementById("basic-data");
  const button = document.createElement("button");
  button.classList.add("convertToFahrenheit");
  button.innerHTML = "Convert to °F";
  if (
    container.contains(
      document.getElementsByClassName("convertToFahrenheit")[0]
    )
  ) {
    return;
  }
  container.appendChild(button);
  return button;
}
function convertToCelsius() {
  const container = document.getElementById("basic-data");
  const button = document.createElement("button");
  button.classList.add("convertToCelsius");
  button.innerHTML = "Convert to °C";
  if (
    container.contains(document.getElementsByClassName("convertToCelsius")[0])
  ) {
    return;
  }
  container.appendChild(button);
  return button;
}

function mainConverterF(tempF, feelslikeF, windspeedM) {
  const temperatureToF =
    document.getElementsByClassName("currentTemperature")[0];
  temperatureToF.innerHTML = tempF + " °F";
  const feelslikeToF = document.getElementsByClassName("feelslikeData")[0];
  feelslikeToF.innerHTML = "Feels Like" + "<br>" + feelslikeF + " °F";
  const windspeedToM = document.getElementsByClassName("windspeedData")[0];
  windspeedToM.innerHTML = "Wind Speed" + "<br>" + windspeedM + " mph";
}
function mainConverterC(tempC, feelslikeC, windspeedK) {
  const temperatureToC =
    document.getElementsByClassName("currentTemperature")[0];
  temperatureToC.innerHTML = tempC + " °C";
  const feelslikeToC = document.getElementsByClassName("feelslikeData")[0];
  feelslikeToC.innerHTML = "Feels Like" + "<br>" + feelslikeC + " °C";
  const windspeedToK = document.getElementsByClassName("windspeedData")[0];
  windspeedToK.innerHTML = "Wind Speed" + "<br>" + windspeedK + " kph";
}

export {
  basicData,
  additionalData,
  errorMsg,
  errorClean,
  convertToCelsius,
  convertToFahrenheit,
  mainConverterF,
  mainConverterC,
};
