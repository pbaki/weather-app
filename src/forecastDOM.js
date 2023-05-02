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
function daily(date, condition_icon, temp) {
  let dailyDataContainer = document.getElementById("data-bar");

  let dailyDateHolder = document.createElement("p");
  dailyDateHolder.classList.add("dailyDateHolder");
  dailyDateHolder.innerHTML = date;

  let dailyConditionIcon = document.createElement("img");
  dailyConditionIcon.classList.add("dailyConditionIcon");
  dailyConditionIcon.setAttribute("src", condition_icon);
  dailyConditionIcon.setAttribute("alt", "Weather Condition Icon");

  let dailyTemperatureHolder = document.createElement("h1");
  dailyTemperatureHolder.classList.add("dailyTemperatureHolder");
  dailyTemperatureHolder.innerHTML = temp + " °C";

  let Container = document.createElement("div");
  Container.classList.add("dailyContainer");
  Container.appendChild(dailyConditionIcon);
  Container.appendChild(dailyDateHolder);
  Container.appendChild(dailyTemperatureHolder);

  dailyDataContainer.appendChild(Container);
}

function hourly() {}

function dailyButton() {}

function hourlyButton() {}

export { dailyButton, hourlyButton, daily, hourly };
