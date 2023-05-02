//Returning chance of rain for the rest of the day local date to midnight
function chanceOfRain(hourlyForecastData, local_time) {
  let chanceOfRaincounter = 0;
  let counter = 0;
  let chanceArray = [];
  for (let i = 0; i < Object.keys(hourlyForecastData.day0.hour).length; i++) {
    let timeSlicer = hourlyForecastData.day0.hour[`hour${i}`].time;
    if (new Date(timeSlicer).getTime() > new Date(local_time).getTime()) {
      if (hourlyForecastData.day0.hour[`hour${i}`].chance_of_rain > 0) {
        counter += 1;
        if (counter > 1) {
          chanceArray[1] =
            hourlyForecastData.day0.hour[`hour${i}`].chance_of_rain;
          let initialChance = chanceArray[0] / 100;
          let increase =
            initialChance + (chanceArray[1] / 100) * (1 - initialChance);
          chanceArray[0] = increase * 100;
        } else {
          chanceArray.push(
            hourlyForecastData.day0.hour[`hour${i}`].chance_of_rain
          );
        }
        chanceOfRaincounter +=
          hourlyForecastData.day0.hour[`hour${i}`].chance_of_rain;
      }
    }
  }
  if (counter == 0) {
    return 0;
  } else if (counter == 1) {
    return chanceOfRaincounter;
  }

  return Math.round(chanceArray[0] * 100) / 100;
}

//Returning chance of snow for the rest of the day local date to midnight
function chanceOfSnow(hourlyForecastData, local_time) {
  let chanceOfSnowcounter = 0;
  let counter = 0;
  let chanceArray = [];
  for (let i = 0; i < Object.keys(hourlyForecastData.day0.hour).length; i++) {
    let timeSlicer = hourlyForecastData.day0.hour[`hour${i}`].time;
    if (new Date(timeSlicer).getTime() > new Date(local_time).getTime()) {
      if (hourlyForecastData.day0.hour[`hour${i}`].chance_of_snow > 0) {
        counter += 1;
        if (counter > 1) {
          chanceArray[1] =
            hourlyForecastData.day0.hour[`hour${i}`].chance_of_snow;
          let initialChance = chanceArray[0] / 100;
          let increase =
            initialChance + (chanceArray[1] / 100) * (1 - initialChance);
          chanceArray[0] = increase * 100;
        } else {
          chanceArray.push(
            hourlyForecastData.day0.hour[`hour${i}`].chance_of_snow
          );
        }
        chanceOfSnowcounter +=
          hourlyForecastData.day0.hour[`hour${i}`].chance_of_snow;
      }
    }
  }
  if (counter == 0) {
    return 0;
  } else if (counter == 1) {
    return chanceOfSnowcounter;
  }

  return Math.round(chanceArray[0] * 100) / 100;
}

export { chanceOfRain, chanceOfSnow };
