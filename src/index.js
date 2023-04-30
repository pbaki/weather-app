import "./style.css";
import { Key } from "./myKey";

class Weather {
  constructor(
    city,
    condition,
    condition_icon,
    country,
    humidity,
    local_time,
    celsiusData,
    fahrenheitData
  ) {
    this.city = city;
    this.condition = condition;
    this.condition_icon = condition_icon;
    this.country = country;
    this.humidity = humidity;
    this.local_time = local_time;
    this.celsiusData = celsiusData;
    this.fahrenheitData = fahrenheitData;
  }

  test() {
    console.log(
      this.city + "\n",
      this.condition + "\n",
      this.condition_icon + "\n",
      this.country + "\n",
      this.humidity + "\n",
      this.local_time + "\n",
      this.celsiusData + "\n",
      this.fahrenheitData + "\n"
    );
  }
}

class dailyForecast {
  constructor(dailyForecast) {
    this.dailyForecast = dailyForecast;
  }
  test() {
    console.log(this.dailyForecast);
  }
}
class hourlyForecast {
  constructor(hourlyForecast) {
    this.hourlyForecast = hourlyForecast;
  }
  test() {
    console.log(this.hourlyForecast);
  }
}
const testinput = document.getElementById("location").value;
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(testinput);
});

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
        condition_icon: response.current.condition.icon,
        humidity: response.current.humidity,
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
        //For later deletion for Fahrenheit because temp will be converted in objects
        forecast_per_day_Celsius: {},
        forecast_per_day_Fahrenheit: {},
        forecast_per_hour: {},
      },
    };
    function forecastPerDayCelsius() {
      for (let i = 0; i < 3; i++) {
        DataObject.forecast.forecast_per_day_Celsius["day" + i] = {
          date: response.forecast.forecastday[i].date,
          min_temp: response.forecast.forecastday[i].day.mintemp_c,
          max_temp: response.forecast.forecastday[i].day.maxtemp_c,
        };
      }
    }

    function forecastPerDayFahrenheit() {
      for (let i = 0; i < 3; i++) {
        DataObject.forecast.forecast_per_day_Fahrenheit["day" + i] = {
          date: response.forecast.forecastday[i].date,
          min_temp: response.forecast.forecastday[i].day.mintemp_f,
          max_temp: response.forecast.forecastday[i].day.maxtemp_f,
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
            condition: response.forecast.forecastday[i].hour[k].condition.icon,
            temperatureC: response.forecast.forecastday[i].hour[k].temp_c,
            temperatureF: response.forecast.forecastday[i].hour[k].temp_f,
            humidity: response.forecast.forecastday[i].hour[k].humidity,
            will_rain: response.forecast.forecastday[i].hour[k].will_it_rain,
          };
        }
      }
    }

    forecastPerDayCelsius();
    forecastPerDayFahrenheit();
    forecastPerHour();
    return DataObject;
  } catch (error) {
    console.log(error);
  }
}
apiRequest("London").then((data) => {
  const { city, condition, condition_icon, country, humidity, local_time } =
    data.basic_data;
  const currentCelsiusData = data.celsius;
  const currentFahrenheitData = data.fahrenheit;
  const dailyForecastData = data.forecast.forecast_per_day_Celsius;
  const hourlyForecastData = data.forecast.forecast_per_hour;
  const currenWeather = new Weather(
    city,
    condition,
    condition_icon,
    country,
    humidity,
    local_time,
    currentCelsiusData,
    currentFahrenheitData
  );
  const dailyForecastObject = new dailyForecast(dailyForecastData);
  const hourlyForecastObject = new hourlyForecast(hourlyForecastData);
  currenWeather.test();
  dailyForecastObject.test();
  hourlyForecastObject.test();
  console.log(data);
});
