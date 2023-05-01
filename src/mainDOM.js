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
    dataHolder.replaceChild(currentTemperature, dataHolder.children[4]);
  }
}

function additionalData(humidity, feelslike, windspeed) {}

export { basicData, additionalData };
