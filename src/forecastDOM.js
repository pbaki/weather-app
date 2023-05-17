function buttons() {
  let buttonContainer = document.getElementById("upper-bar");

  let dailyButton = document.createElement("button");
  dailyButton.classList.add("dailyButton");
  dailyButton.innerHTML = "Daily";

  let hourlyButton = document.createElement("button");
  hourlyButton.classList.add("hourlyButton");
  hourlyButton.innerHTML = "Hourly";

  let arrowContainer = document.createElement("div");
  arrowContainer.classList.add("arrowContainer");

  let leftArrow = document.createElement("p");
  leftArrow.classList.add("leftArrow");

  let rightArrow = document.createElement("p");
  rightArrow.classList.add("rightArrow");

  arrowContainer.appendChild(leftArrow);
  arrowContainer.appendChild(rightArrow);

  if (buttonContainer.childNodes.length == 0) {
    buttonContainer.appendChild(dailyButton);
    buttonContainer.appendChild(hourlyButton);
    buttonContainer.appendChild(arrowContainer);
  } else {
    buttonContainer.replaceChild(dailyButton, buttonContainer.children[0]);
    buttonContainer.replaceChild(hourlyButton, buttonContainer.children[1]);
    buttonContainer.replaceChild(arrowContainer, buttonContainer.children[2]);
  }
}
buttons();

function daily(date, condition_icon, temp, conditionText) {
  let dailyDataContainer = document.getElementById("data-bar");

  let dailyDateHolder = document.createElement("p");
  dailyDateHolder.classList.add("dailyDateHolder");
  let cutYear = date.split("-").slice(1, 3);
  let result = cutYear.join("/");
  if (result.split("")[6] == 0) {
    result = result.split("");
    let temp = result.splice(6, 1);
    result = result.join("");
  }
  if (result) dailyDateHolder.innerHTML = result;

  let dailyConditionIcon = document.createElement("img");
  dailyConditionIcon.classList.add("dailyConditionIcon");
  dailyConditionIcon.setAttribute("src", condition_icon);
  dailyConditionIcon.setAttribute("alt", "Weather Condition Icon");

  let dailyConditionText = document.createElement("p");
  dailyConditionText.classList.add("dailyConditionText");
  dailyConditionText.innerHTML = conditionText;

  let dailyTemperatureHolder = document.createElement("h2");
  dailyTemperatureHolder.classList.add("dailyTemperatureHolder");
  let moreText = document.createElement("p");
  moreText.classList.add("moreText");
  moreText.innerHTML = "Avg temp: " + "<br>";
  dailyTemperatureHolder.innerHTML = temp + " °C";

  let Container = document.createElement("div");
  Container.classList.add("dailyContainer");
  Container.appendChild(dailyConditionIcon);
  Container.appendChild(dailyConditionText);
  Container.appendChild(dailyDateHolder);
  Container.appendChild(moreText);
  Container.appendChild(dailyTemperatureHolder);

  dailyDataContainer.appendChild(Container);
}

function hourly(date, condition_icon, temp, conditionText) {
  let hourlyDataContainer = document.getElementById("data-bar");

  let hourlyDateHolder = document.createElement("p");
  hourlyDateHolder.classList.add("hourlyDateHolder");
  let cutYear = date.split("-").slice(1, 3);
  let result = cutYear.join("/");
  if (result.split("")[6] == 0) {
    result = result.split("");
    let temp = result.splice(6, 1);
    result = result.join("");
  }
  if (result) hourlyDateHolder.innerHTML = result;

  let hourlyConditionIcon = document.createElement("img");
  hourlyConditionIcon.classList.add("hourlyConditionIcon");
  hourlyConditionIcon.setAttribute("src", condition_icon);
  hourlyConditionIcon.setAttribute("alt", "Weather Condition Icon");

  let hourlyConditionText = document.createElement("p");
  hourlyConditionText.classList.add("hourlyConditionText");
  hourlyConditionText.innerHTML = conditionText;

  let hourlyTemperatureHolder = document.createElement("h2");
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

function dataBarScroll() {
  const scrollContainer = document.getElementById("data-bar");

  scrollContainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    scrollContainer.scrollBy({
      left: event.deltaY < 0 ? -30 : 30,
    });
  });
}
dataBarScroll();

function dailyConverterF(dailyForecast) {
  const temperatureToF = document.getElementsByClassName(
    "dailyTemperatureHolder"
  );
  if (temperatureToF[0]) {
    for (let i = 0; i < Object.keys(dailyForecast).length; i++) {
      let temperatureNow = dailyForecast["day" + i].avg_tempF;
      temperatureToF[i].innerHTML = temperatureNow + " °F";
    }
  }
}
function dailyConverterC(dailyForecast) {
  const temperatureToC = document.getElementsByClassName(
    "dailyTemperatureHolder"
  );
  if (temperatureToC[0]) {
    for (let i = 0; i < Object.keys(dailyForecast).length; i++) {
      let temperatureNow = dailyForecast["day" + i].avg_tempC;
      temperatureToC[i].innerHTML = temperatureNow + " °C";
    }
  }
}

function hourlyConverterF(hourlyForecast) {
  const temperatureToFHourly = document.getElementsByClassName(
    "hourlyTemperatureHolder"
  );
  if (temperatureToFHourly[0]) {
    for (let i = 0; i < Object.keys(hourlyForecast).length; i++) {
      for (let k = 0; k < 24; k++) {
        let temperature =
          hourlyForecast["day" + i].hour["hour" + k].temperatureF;
        if (i == 0) {
          temperatureToFHourly[k].innerHTML = temperature + " °F";
        } else if (i == 1) {
          temperatureToFHourly[24 + k].innerHTML = temperature + " °F";
        } else {
          temperatureToFHourly[48 + k].innerHTML = temperature + " °F";
        }
      }
    }
  }
}

function hourlyConverterC(hourlyForecast) {
  const temperatureToCHourly = document.getElementsByClassName(
    "hourlyTemperatureHolder"
  );
  if (temperatureToCHourly[0]) {
    for (let i = 0; i < Object.keys(hourlyForecast).length; i++) {
      for (let k = 0; k < 24; k++) {
        let temperature =
          hourlyForecast["day" + i].hour["hour" + k].temperatureC;
        if (i == 0) {
          temperatureToCHourly[k].innerHTML = temperature + " °C";
        } else if (i == 1) {
          temperatureToCHourly[24 + k].innerHTML = temperature + " °C";
        } else {
          temperatureToCHourly[48 + k].innerHTML = temperature + " °C";
        }
      }
    }
  }
}
function dataBarSlider() {
  const slidingContainer = document.getElementById("data-bar");
  let isMouseDown = false;
  let startX = 0;

  slidingContainer.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    startX = e.pageX;
  });

  slidingContainer.addEventListener("mousemove", (e) => {
    if (!isMouseDown) {
      return;
    }
    e.preventDefault();
    const currentX = e.pageX;
    const distance = startX - currentX;
    slidingContainer.scrollLeft += distance;
    startX = currentX;
  });

  slidingContainer.addEventListener("mouseup", (e) => {
    isMouseDown = false;
    startX = 0;
  });
  slidingContainer.addEventListener("touchstart", (e) => {
    startX = e.touches[0].pageX;
  });

  slidingContainer.addEventListener("touchmove", (e) => {
    e.preventDefault();
    const currentX = e.touches[0].pageX;
    const distance = (startX - currentX) * 0.5;
    slidingContainer.scrollLeft += distance;
  });

  slidingContainer.addEventListener("touchend", (e) => {
    startX = 0;
  });
}
dataBarSlider();

function arrowsFunctionality() {
  const slidingContainer = document.getElementById("data-bar");
  const leftButton = document.getElementsByClassName("leftArrow")[0];
  const rightButton = document.getElementsByClassName("rightArrow")[0];
  const elementWidth =
    slidingContainer.querySelector(".dailyContainer").offsetWidth;
  console.log(elementWidth);
  leftButton.addEventListener("click", () => {
    slidingContainer.scrollLeft -= 3 * elementWidth;
  });

  rightButton.addEventListener("click", () => {
    slidingContainer.scrollLeft += 3 * elementWidth;
  });
}

export {
  daily,
  hourly,
  dailyConverterF,
  dailyConverterC,
  hourlyConverterF,
  hourlyConverterC,
  arrowsFunctionality,
};
