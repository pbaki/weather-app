import "./style.css";
import { Key } from "./myKey";
import { basicData, additionalData } from "./mainDOM";
import { dailyButton, hourlyButton, daily } from "./forecastDOM";

class Weather {
  constructor(
    country,
    city,
    local_time,
    condition,
    condition_icon,
    humidity,
    sunrise,
    sunset,
    celsiusData,
    fahrenheitData,
    hourlyForecastData
  ) {
    this.country = country;
    this.city = city;
    this.local_time = local_time;
    this.condition = condition;
    this.condition_icon = condition_icon;
    this.humidity = humidity;
    this.sunrise = sunrise;
    this.sunset = sunset;
    this.celsiusData = celsiusData;
    this.fahrenheitData = fahrenheitData;
    this.hourlyForecastData = hourlyForecastData;
  }
  basicDataDOM() {
    basicData(
      this.city,
      this.country,
      this.local_time,
      this.condition_icon,
      this.condition,
      this.celsiusData.temperature
    );
  }

  additionalDataDOM() {
    additionalData(
      this.humidity,
      this.celsiusData.feelslike,
      this.celsiusData.wind,
      this.sunrise,
      this.sunset,
      this.local_time,
      this.hourlyForecastData
    );
  }
}

class dailyForecast {
  constructor(dailyForecast) {
    this.dailyForecast = dailyForecast;
  }
  generateDailyData() {
    const dataContainerRemover = document.getElementById("data-bar");
    while (dataContainerRemover.firstChild) {
      dataContainerRemover.removeChild(dataContainerRemover.firstChild);
    }
    for (let i = 0; i < Object.keys(this.dailyForecast).length; i++) {
      let dateNow = this.dailyForecast["day" + i].date;
      let conditionIconNow = this.dailyForecast["day" + i].condition_icon;
      let temperatureNow = this.dailyForecast["day" + i].avg_tempC;
      let conditionText = this.dailyForecast["day" + i].condition;
      daily(dateNow, conditionIconNow, temperatureNow, conditionText);
    }
  }
  generateDailyDataButton() {
    const button = document.getElementsByClassName("dailyButton")[0];
    button.addEventListener("click", () => {
      this.generateDailyData();
    });
  }
}
class hourlyForecast {
  constructor(hourlyForecast) {
    this.hourlyForecast = hourlyForecast;
  }
  generateHourlyData() {
    const dataContainerRemover = document.getElementById("data-bar");
    while (dataContainerRemover.firstChild) {
      dataContainerRemover.removeChild(dataContainerRemover.firstChild);
    }
    for (let i = 0; i < Object.keys(this.hourlyForecast).length; i++) {
      for (let k = 0; k < 24; k++) {
        let dateNow = this.hourlyForecast["day" + i].hour["hour" + k].time;
        let conditionIconNow =
          this.hourlyForecast["day" + i].hour["hour" + k].condition_icon;
        let temperatureNow =
          this.hourlyForecast["day" + i].hour["hour" + k].temperatureC;
        let conditionText =
          this.hourlyForecast["day" + i].hour["hour" + k].condition;
        daily(dateNow, conditionIconNow, temperatureNow, conditionText);
      }
    }
  }
  generateHourlyDataButton() {
    const button = document.getElementsByClassName("hourlyButton")[0];
    button.addEventListener("click", () => {
      this.generateHourlyData();
    });
  }
}

//button taking location from input that fire api request and log data
function takeLocation() {
  const searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    let testinput = document.getElementById("location").value;
    fireRequest(testinput);
  });
}
takeLocation();

async function apiRequest(whatLocation) {
  try {
    const request = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${Key}&q=${whatLocation}&days=3`,
      {
        mode: "cors",
      }
    );
    const response = await request.json();
    console.log(response);
    const DataObject = {
      basic_data: {
        country: response.location.country,
        city: response.location.name,
        local_time: response.location.localtime,
        condition: response.current.condition.text,
        condition_icon: "https:" + response.current.condition.icon,
        humidity: response.current.humidity,
        sunrise: response.forecast.forecastday[0].astro.sunrise,
        sunset: response.forecast.forecastday[0].astro.sunset,
      },
      celsius: {
        feelslike: response.current.feelslike_c,
        temperature: response.current.temp_c,
        wind: response.current.wind_kph,
      },
      fahrenheit: {
        feelslike: response.current.feelslike_f,
        temperature: response.current.temp_f,
        wind: response.current.wind_mph,
      },
      forecast: {
        //Looping per days and hours in function forecastPerHourCelsius and forecast_per_hour_Fahrenheit
        forecast_per_day: {},
        forecast_per_hour: {},
      },
    };
    function forecastPerDay() {
      for (let i = 0; i < 3; i++) {
        DataObject.forecast.forecast_per_day["day" + i] = {
          date: response.forecast.forecastday[i].date,
          condition_icon:
            "https:" + response.forecast.forecastday[i].day.condition.icon,
          condition: response.forecast.forecastday[i].day.condition.text,
          avg_tempC: response.forecast.forecastday[i].day.avgtemp_c,
          avg_tempF: response.forecast.forecastday[i].day.avgtemp_f,
        };
      }
    }

    function forecastPerHour() {
      for (let i = 0; i < 3; i++) {
        DataObject.forecast.forecast_per_hour["day" + i] = {
          date: response.forecast.forecastday[i].date,
        };
        DataObject.forecast.forecast_per_hour["day" + i].hour = {};
        for (let k = 0; k < 24; k++) {
          DataObject.forecast.forecast_per_hour["day" + i].hour["hour" + k] = {
            condition_icon:
              "https:" +
              response.forecast.forecastday[i].hour[k].condition.icon,
            condition: response.forecast.forecastday[i].hour[k].condition.text,
            temperatureC: response.forecast.forecastday[i].hour[k].temp_c,
            temperatureF: response.forecast.forecastday[i].hour[k].temp_f,
            humidity: response.forecast.forecastday[i].hour[k].humidity,
            chance_of_rain:
              response.forecast.forecastday[i].hour[k].chance_of_rain,
            chance_of_snow:
              response.forecast.forecastday[i].hour[k].chance_of_snow,
            time: response.forecast.forecastday[i].hour[k].time,
          };
        }
      }
    }

    forecastPerDay();
    forecastPerHour();
    return DataObject;
  } catch (error) {
    console.log(error);
  }
}
function fireRequest(inputvalue) {
  apiRequest(inputvalue).then((data) => {
    const {
      country,
      city,
      local_time,
      condition,
      condition_icon,
      humidity,
      sunrise,
      sunset,
    } = data.basic_data;
    const currentCelsiusData = data.celsius;
    const currentFahrenheitData = data.fahrenheit;
    const dailyForecastData = data.forecast.forecast_per_day;
    const hourlyForecastData = data.forecast.forecast_per_hour;
    const currenWeather = new Weather(
      country,
      city,
      local_time,
      condition,
      condition_icon,
      humidity,
      sunrise,
      sunset,
      currentCelsiusData,
      currentFahrenheitData,
      hourlyForecastData
    );
    const dailyForecastObject = new dailyForecast(dailyForecastData);
    const hourlyForecastObject = new hourlyForecast(hourlyForecastData);
    dailyForecastObject.generateDailyData();
    dailyForecastObject.generateDailyDataButton();
    hourlyForecastObject.generateHourlyDataButton();
    console.log(data);
    currenWeather.basicDataDOM();
    currenWeather.additionalDataDOM();
  });
}
