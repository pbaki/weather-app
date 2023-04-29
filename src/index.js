import "./style.css";
import { Key } from "./myKey";

class Weather {
  constructor(name) {
    this.name = name;
  }

  test() {
    console.log(this.name);
  }
}

let user1 = new Weather("qwe");
user1.test();

//Weather in celsius
class CelsiusWeather extends Weather {
  constructor(name) {
    super(name);
  }

  // test() {
  //   console.log(this.name);
  // }
}

let user2 = new CelsiusWeather("asd");
user2.test();

//Weather in Fahrenheit
class FahrenheitWeather extends Weather {
  constructor(name) {
    super(name);
  }

  // test() {
  //   console.log(this.name);
  // }
}

let user3 = new FahrenheitWeather("zxc");
user3.test();

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
        forecast_per_hour_Celsius: {},
        forecast_per_hour_Fahrenheit: {},
      },
    };
    for (let i = 0; i < 3; i++) {
      DataObject.forecast.forecast_per_day_Celsius["day" + i] = {
        date: response.forecast.forecastday[i].date,
        min_temp: response.forecast.forecastday[i].day.mintemp_c,
        max_temp: response.forecast.forecastday[i].day.maxtemp_c,
      };
    }
    for (let i = 0; i < 3; i++) {
      DataObject.forecast.forecast_per_day_Fahrenheit["day" + i] = {
        date: response.forecast.forecastday[i].date,
        min_temp: response.forecast.forecastday[i].day.mintemp_f,
        max_temp: response.forecast.forecastday[i].day.maxtemp_f,
      };
    }
    function forecastPerHourCelsius() {
      for (let i = 0; i < 3; i++) {
        DataObject.forecast.forecast_per_hour_Celsius["day" + i] = {
          date: response.forecast.forecastday[i].date,
        };
        DataObject.forecast.forecast_per_hour_Celsius["day" + i].hour = {};
        for (let k = 0; k < 24; k++) {
          DataObject.forecast.forecast_per_hour_Celsius["day" + i].hour[
            "hour" + k
          ] = {
            condition: response.forecast.forecastday[i].hour[k].condition.icon,
            temperature: response.forecast.forecastday[i].hour[k].temp_c,
            humidity: response.forecast.forecastday[i].hour[k].humidity,
            will_rain: response.forecast.forecastday[i].hour[k].will_it_rain,
          };
        }
      }
    }
    function forecast_per_hour_Fahrenheit() {
      for (let i = 0; i < 3; i++) {
        DataObject.forecast.forecast_per_hour_Fahrenheit["day" + i] = {
          date: response.forecast.forecastday[i].date,
        };
        DataObject.forecast.forecast_per_hour_Fahrenheit["day" + i].hour = {};
        for (let k = 0; k < 24; k++) {
          DataObject.forecast.forecast_per_hour_Fahrenheit["day" + i].hour[
            "hour" + k
          ] = {
            condition: response.forecast.forecastday[i].hour[k].condition.icon,
            temperature: response.forecast.forecastday[i].hour[k].temp_f,
            humidity: response.forecast.forecastday[i].hour[k].humidity,
            will_rain: response.forecast.forecastday[i].hour[k].will_it_rain,
          };
        }
      }
    }
    forecast_per_hour_Fahrenheit();
    forecastPerHourCelsius();
    return DataObject;
  } catch (error) {
    console.log(error);
  }
}
apiRequest("London").then((data) => {
  user2.test();
  console.log(data);
});
