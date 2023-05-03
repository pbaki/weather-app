function buttons() {
  let buttonContainer = document.getElementById("upper-bar");

  let dailyButton = document.createElement("button");
  dailyButton.classList.add("dailyButton");
  dailyButton.innerHTML = "Daily";

  let hourlyButton = document.createElement("button");
  hourlyButton.classList.add("hourlyButton");
  hourlyButton.innerHTML = "Hourly";

  if (buttonContainer.childNodes.length == 0) {
    buttonContainer.appendChild(dailyButton);
    buttonContainer.appendChild(hourlyButton);
  } else {
    buttonContainer.replaceChild(dailyButton, buttonContainer.children[0]);
    buttonContainer.replaceChild(hourlyButton, buttonContainer.children[1]);
  }
}
buttons();

function daily(date, condition_icon, temp, conditionText) {
  let dailyDataContainer = document.getElementById("data-bar");

  let dailyDateHolder = document.createElement("p");
  dailyDateHolder.classList.add("dailyDateHolder");
  dailyDateHolder.innerHTML = date;

  let dailyConditionIcon = document.createElement("img");
  dailyConditionIcon.classList.add("dailyConditionIcon");
  dailyConditionIcon.setAttribute("src", condition_icon);
  dailyConditionIcon.setAttribute("alt", "Weather Condition Icon");

  let dailyConditionText = document.createElement("p");
  dailyConditionText.classList.add("dailyConditionText");
  dailyConditionText.innerHTML = conditionText;

  let dailyTemperatureHolder = document.createElement("h1");
  dailyTemperatureHolder.classList.add("dailyTemperatureHolder");
  dailyTemperatureHolder.innerHTML = temp + " °C";

  let Container = document.createElement("div");
  Container.classList.add("dailyContainer");
  Container.appendChild(dailyConditionIcon);
  Container.appendChild(dailyConditionText);
  Container.appendChild(dailyDateHolder);
  Container.appendChild(dailyTemperatureHolder);

  dailyDataContainer.appendChild(Container);
}

function hourly(date, condition_icon, temp, conditionText) {
  let hourlyDataContainer = document.getElementById("data-bar");

  let hourlyDateHolder = document.createElement("p");
  hourlyDateHolder.classList.add("hourlyDateHolder");
  hourlyDateHolder.innerHTML = date;

  let hourlyConditionIcon = document.createElement("img");
  hourlyConditionIcon.classList.add("hourlyConditionIcon");
  hourlyConditionIcon.setAttribute("src", condition_icon);
  hourlyConditionIcon.setAttribute("alt", "Weather Condition Icon");

  let hourlyConditionText = document.createElement("p");
  hourlyConditionText.classList.add("hourlyConditionText");
  hourlyConditionText.innerHTML = conditionText;

  let hourlyTemperatureHolder = document.createElement("h1");
  hourlyTemperatureHolder.classList.add("hourlyTemperatureHolder");
  hourlyTemperatureHolder.innerHTML = temp + " °C";

  let Container = document.createElement("div");
  Container.classList.add("hourlyContainer");
  Container.appendChild(hourlyConditionIcon);
  Container.appendChild(hourlyConditionText);
  Container.appendChild(hourlyDateHolder);
  Container.appendChild(hourlyTemperatureHolder);

  hourlyDataContainer.appendChild(Container);
}

function dailyButton() {}

function hourlyButton() {}

export { dailyButton, hourlyButton, daily, hourly };
