import "./style.css";
import { Key } from "./myKey";

async function apiRequest(location) {
  try {
    const request = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${Key}&q=${location}`,
      {
        mode: "cors",
      }
    );
    const response = await request.json();
    console.log(request);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
apiRequest("London");
