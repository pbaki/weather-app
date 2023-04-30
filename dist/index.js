(()=>{"use strict";var t={304:(t,e,a)=>{a.d(e,{s:()=>o});const o="f06d23d621c748f1aed94259232004"}},e={};function a(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,a),i.exports}a.d=(t,e)=>{for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=a(304);class e{constructor(t,e,a,o,r,i,c,s){this.city=t,this.condition=e,this.condition_icon=a,this.country=o,this.humidity=r,this.local_time=i,this.celsiusData=c,this.fahrenheitData=s}celsiusDataLog(){console.log("Feels Like: "+this.celsiusData.feelslike+" C\n","Temperature: "+this.celsiusData.temperature+" C\n","Wind Speed: "+this.celsiusData.wind+" kph\n")}fahrenheitDataLog(){console.log("Feels Like: "+this.fahrenheitData.feelslike+" F\n","Temperature: "+this.fahrenheitData.temperature+" F\n","Wind Speed: "+this.fahrenheitData.wind+" mph\n")}basicDataLog(){console.log(this.city+"\n",this.condition+"\n",this.condition_icon+"\n",this.country+"\n",this.humidity+"\n",this.local_time+"\n")}}class o{constructor(t){this.dailyForecast=t}test(){console.log(this.dailyForecast)}}class r{constructor(t){this.hourlyForecast=t}test(){console.log(this.hourlyForecast)}}document.getElementById("searchButton").addEventListener("click",(a=>{a.preventDefault(),async function(e){try{const a=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${t.s}&q=${e}&days=3`,{mode:"cors"}),o=await a.json(),r={basic_data:{country:o.location.country,city:o.location.name,local_time:o.location.localtime,condition:o.current.condition.text,condition_icon:o.current.condition.icon,humidity:o.current.humidity},celsius:{feelslike:o.current.feelslike_c,temperature:o.current.temp_c,wind:o.current.wind_kph},fahrenheit:{feelslike:o.current.feelslike_f,temperature:o.current.temp_f,wind:o.current.wind_mph},forecast:{forecast_per_day_Celsius:{},forecast_per_day_Fahrenheit:{},forecast_per_hour:{}}};function i(){for(let t=0;t<3;t++)r.forecast.forecast_per_day_Celsius["day"+t]={date:o.forecast.forecastday[t].date,min_temp:o.forecast.forecastday[t].day.mintemp_c,max_temp:o.forecast.forecastday[t].day.maxtemp_c}}function c(){for(let t=0;t<3;t++)r.forecast.forecast_per_day_Fahrenheit["day"+t]={date:o.forecast.forecastday[t].date,min_temp:o.forecast.forecastday[t].day.mintemp_f,max_temp:o.forecast.forecastday[t].day.maxtemp_f}}function s(){for(let t=0;t<3;t++){r.forecast.forecast_per_hour["day"+t]={date:o.forecast.forecastday[t].date},r.forecast.forecast_per_hour["day"+t].hour={};for(let e=0;e<24;e++)r.forecast.forecast_per_hour["day"+t].hour["hour"+e]={condition:o.forecast.forecastday[t].hour[e].condition.icon,temperatureC:o.forecast.forecastday[t].hour[e].temp_c,temperatureF:o.forecast.forecastday[t].hour[e].temp_f,humidity:o.forecast.forecastday[t].hour[e].humidity,will_rain:o.forecast.forecastday[t].hour[e].will_it_rain}}}return i(),c(),s(),r}catch(n){console.log(n)}}(document.getElementById("location").value).then((t=>{const{city:a,condition:i,condition_icon:c,country:s,humidity:n,local_time:d}=t.basic_data,f=t.celsius,h=t.fahrenheit,l=t.forecast.forecast_per_day_Celsius,u=t.forecast.forecast_per_hour,y=new e(a,i,c,s,n,d,f,h);new o(l),new r(u),y.basicDataLog(),y.celsiusDataLog(),y.fahrenheitDataLog()}))}))})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN2RDBCLGFBQWN0QyxFQUFTa0IsU0FBU08sWUFBWUYsR0FBR1ksS0FBS0MsR0FBR3BCLE9BQ3ZEMUMsU0FBVTBCLEVBQVNrQixTQUFTTyxZQUFZRixHQUFHWSxLQUFLQyxHQUFHOUQsU0FDbkRpRSxVQUFXdkMsRUFBU2tCLFNBQVNPLFlBQVlGLEdBQUdZLEtBQUtDLEdBQUdJLGFBRzFELENBQ0YsQ0FLQSxPQUhBbEIsSUFDQVMsSUFDQUcsSUFDT2hDLENBQ1QsQ0FBRSxNQUFPdUMsR0FDUDdELFFBQVFDLElBQUk0RCxFQUNkLENBQ0YsQ0FFRUMsQ0F4RmtCcEQsU0FBU0MsZUFBZSxZQUFZb0QsT0F3Ri9CQyxNQUFNQyxJQUMzQixNQUFNLEtBQUUzRSxFQUFJLFVBQUVDLEVBQVMsZUFBRUMsRUFBYyxRQUFFQyxFQUFPLFNBQUVDLEVBQVEsV0FBRUMsR0FDMURzRSxFQUFLMUMsV0FDRDJDLEVBQXFCRCxFQUFLbkMsUUFDMUJxQyxFQUF3QkYsRUFBSy9CLFdBQzdCa0MsRUFBb0JILEVBQUszQixTQUFTQyx5QkFDbEM4QixFQUFxQkosRUFBSzNCLFNBQVNHLGtCQUNuQzZCLEVBQWdCLElBQUlsRixFQUN4QkUsRUFDQUMsRUFDQUMsRUFDQUMsRUFDQUMsRUFDQUMsRUFDQXVFLEVBQ0FDLEdBRTBCLElBQUk1RCxFQUFjNkQsR0FDakIsSUFBSTNELEVBQWU0RCxHQUloREMsRUFBY2hFLGVBQ2RnRSxFQUFjdkUsaUJBQ2R1RSxFQUFjakUsbUJBQW1CLEdBL0dYLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9teUtleS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgS2V5ID0gXCJmMDZkMjNkNjIxYzc0OGYxYWVkOTQyNTkyMzIwMDRcIjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IEtleSB9IGZyb20gXCIuL215S2V5XCI7XG5cbmNsYXNzIFdlYXRoZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBjaXR5LFxuICAgIGNvbmRpdGlvbixcbiAgICBjb25kaXRpb25faWNvbixcbiAgICBjb3VudHJ5LFxuICAgIGh1bWlkaXR5LFxuICAgIGxvY2FsX3RpbWUsXG4gICAgY2Vsc2l1c0RhdGEsXG4gICAgZmFocmVuaGVpdERhdGFcbiAgKSB7XG4gICAgdGhpcy5jaXR5ID0gY2l0eTtcbiAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICB0aGlzLmNvbmRpdGlvbl9pY29uID0gY29uZGl0aW9uX2ljb247XG4gICAgdGhpcy5jb3VudHJ5ID0gY291bnRyeTtcbiAgICB0aGlzLmh1bWlkaXR5ID0gaHVtaWRpdHk7XG4gICAgdGhpcy5sb2NhbF90aW1lID0gbG9jYWxfdGltZTtcbiAgICB0aGlzLmNlbHNpdXNEYXRhID0gY2Vsc2l1c0RhdGE7XG4gICAgdGhpcy5mYWhyZW5oZWl0RGF0YSA9IGZhaHJlbmhlaXREYXRhO1xuICB9XG4gIGNlbHNpdXNEYXRhTG9nKCkge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgXCJGZWVscyBMaWtlOiBcIiArIHRoaXMuY2Vsc2l1c0RhdGEuZmVlbHNsaWtlICsgXCIgQ1wiICsgXCJcXG5cIixcbiAgICAgIFwiVGVtcGVyYXR1cmU6IFwiICsgdGhpcy5jZWxzaXVzRGF0YS50ZW1wZXJhdHVyZSArIFwiIENcIiArIFwiXFxuXCIsXG4gICAgICBcIldpbmQgU3BlZWQ6IFwiICsgdGhpcy5jZWxzaXVzRGF0YS53aW5kICsgXCIga3BoXCIgKyBcIlxcblwiXG4gICAgKTtcbiAgfVxuICBmYWhyZW5oZWl0RGF0YUxvZygpIHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIFwiRmVlbHMgTGlrZTogXCIgKyB0aGlzLmZhaHJlbmhlaXREYXRhLmZlZWxzbGlrZSArIFwiIEZcIiArIFwiXFxuXCIsXG4gICAgICBcIlRlbXBlcmF0dXJlOiBcIiArIHRoaXMuZmFocmVuaGVpdERhdGEudGVtcGVyYXR1cmUgKyBcIiBGXCIgKyBcIlxcblwiLFxuICAgICAgXCJXaW5kIFNwZWVkOiBcIiArIHRoaXMuZmFocmVuaGVpdERhdGEud2luZCArIFwiIG1waFwiICsgXCJcXG5cIlxuICAgICk7XG4gIH1cblxuICBiYXNpY0RhdGFMb2coKSB7XG4gICAgY29uc29sZS5sb2coXG4gICAgICB0aGlzLmNpdHkgKyBcIlxcblwiLFxuICAgICAgdGhpcy5jb25kaXRpb24gKyBcIlxcblwiLFxuICAgICAgdGhpcy5jb25kaXRpb25faWNvbiArIFwiXFxuXCIsXG4gICAgICB0aGlzLmNvdW50cnkgKyBcIlxcblwiLFxuICAgICAgdGhpcy5odW1pZGl0eSArIFwiXFxuXCIsXG4gICAgICB0aGlzLmxvY2FsX3RpbWUgKyBcIlxcblwiXG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBkYWlseUZvcmVjYXN0IHtcbiAgY29uc3RydWN0b3IoZGFpbHlGb3JlY2FzdCkge1xuICAgIHRoaXMuZGFpbHlGb3JlY2FzdCA9IGRhaWx5Rm9yZWNhc3Q7XG4gIH1cbiAgdGVzdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhaWx5Rm9yZWNhc3QpO1xuICB9XG59XG5jbGFzcyBob3VybHlGb3JlY2FzdCB7XG4gIGNvbnN0cnVjdG9yKGhvdXJseUZvcmVjYXN0KSB7XG4gICAgdGhpcy5ob3VybHlGb3JlY2FzdCA9IGhvdXJseUZvcmVjYXN0O1xuICB9XG4gIHRlc3QoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5ob3VybHlGb3JlY2FzdCk7XG4gIH1cbn1cblxuLy9idXR0b24gdGFraW5nIGxvY2F0aW9uIGZyb20gaW5wdXQgdGhhdCBmaXJlIGFwaSByZXF1ZXN0IGFuZCBsb2cgZGF0YVxuZnVuY3Rpb24gdGFrZUxvY2F0aW9uKCkge1xuICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJ1dHRvblwiKTtcbiAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCB0ZXN0aW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uXCIpLnZhbHVlO1xuICAgIGZpcmVSZXF1ZXN0KHRlc3RpbnB1dCk7XG4gIH0pO1xufVxudGFrZUxvY2F0aW9uKCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGFwaVJlcXVlc3Qod2hhdExvY2F0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7S2V5fSZxPSR7d2hhdExvY2F0aW9ufSZkYXlzPTNgLFxuICAgICAge1xuICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgY29uc3QgRGF0YU9iamVjdCA9IHtcbiAgICAgIGJhc2ljX2RhdGE6IHtcbiAgICAgICAgY291bnRyeTogcmVzcG9uc2UubG9jYXRpb24uY291bnRyeSxcbiAgICAgICAgY2l0eTogcmVzcG9uc2UubG9jYXRpb24ubmFtZSxcbiAgICAgICAgbG9jYWxfdGltZTogcmVzcG9uc2UubG9jYXRpb24ubG9jYWx0aW1lLFxuICAgICAgICBjb25kaXRpb246IHJlc3BvbnNlLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXG4gICAgICAgIGNvbmRpdGlvbl9pY29uOiByZXNwb25zZS5jdXJyZW50LmNvbmRpdGlvbi5pY29uLFxuICAgICAgICBodW1pZGl0eTogcmVzcG9uc2UuY3VycmVudC5odW1pZGl0eSxcbiAgICAgIH0sXG4gICAgICBjZWxzaXVzOiB7XG4gICAgICAgIGZlZWxzbGlrZTogcmVzcG9uc2UuY3VycmVudC5mZWVsc2xpa2VfYyxcbiAgICAgICAgdGVtcGVyYXR1cmU6IHJlc3BvbnNlLmN1cnJlbnQudGVtcF9jLFxuICAgICAgICB3aW5kOiByZXNwb25zZS5jdXJyZW50LndpbmRfa3BoLFxuICAgICAgfSxcbiAgICAgIGZhaHJlbmhlaXQ6IHtcbiAgICAgICAgZmVlbHNsaWtlOiByZXNwb25zZS5jdXJyZW50LmZlZWxzbGlrZV9mLFxuICAgICAgICB0ZW1wZXJhdHVyZTogcmVzcG9uc2UuY3VycmVudC50ZW1wX2YsXG4gICAgICAgIHdpbmQ6IHJlc3BvbnNlLmN1cnJlbnQud2luZF9tcGgsXG4gICAgICB9LFxuICAgICAgZm9yZWNhc3Q6IHtcbiAgICAgICAgLy9Mb29waW5nIHBlciBkYXlzIGFuZCBob3VycyBpbiBmdW5jdGlvbiBmb3JlY2FzdFBlckhvdXJDZWxzaXVzIGFuZCBmb3JlY2FzdF9wZXJfaG91cl9GYWhyZW5oZWl0XG4gICAgICAgIC8vRm9yIGxhdGVyIGRlbGV0aW9uIGZvciBGYWhyZW5oZWl0IGJlY2F1c2UgdGVtcCB3aWxsIGJlIGNvbnZlcnRlZCBpbiBvYmplY3RzXG4gICAgICAgIGZvcmVjYXN0X3Blcl9kYXlfQ2Vsc2l1czoge30sXG4gICAgICAgIGZvcmVjYXN0X3Blcl9kYXlfRmFocmVuaGVpdDoge30sXG4gICAgICAgIGZvcmVjYXN0X3Blcl9ob3VyOiB7fSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBmdW5jdGlvbiBmb3JlY2FzdFBlckRheUNlbHNpdXMoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICBEYXRhT2JqZWN0LmZvcmVjYXN0LmZvcmVjYXN0X3Blcl9kYXlfQ2Vsc2l1c1tcImRheVwiICsgaV0gPSB7XG4gICAgICAgICAgZGF0ZTogcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF0ZSxcbiAgICAgICAgICBtaW5fdGVtcDogcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1pbnRlbXBfYyxcbiAgICAgICAgICBtYXhfdGVtcDogcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1heHRlbXBfYyxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmb3JlY2FzdFBlckRheUZhaHJlbmhlaXQoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICBEYXRhT2JqZWN0LmZvcmVjYXN0LmZvcmVjYXN0X3Blcl9kYXlfRmFocmVuaGVpdFtcImRheVwiICsgaV0gPSB7XG4gICAgICAgICAgZGF0ZTogcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF0ZSxcbiAgICAgICAgICBtaW5fdGVtcDogcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1pbnRlbXBfZixcbiAgICAgICAgICBtYXhfdGVtcDogcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1heHRlbXBfZixcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZm9yZWNhc3RQZXJIb3VyKCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgRGF0YU9iamVjdC5mb3JlY2FzdC5mb3JlY2FzdF9wZXJfaG91cltcImRheVwiICsgaV0gPSB7XG4gICAgICAgICAgZGF0ZTogcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF0ZSxcbiAgICAgICAgfTtcbiAgICAgICAgRGF0YU9iamVjdC5mb3JlY2FzdC5mb3JlY2FzdF9wZXJfaG91cltcImRheVwiICsgaV0uaG91ciA9IHt9O1xuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IDI0OyBrKyspIHtcbiAgICAgICAgICBEYXRhT2JqZWN0LmZvcmVjYXN0LmZvcmVjYXN0X3Blcl9ob3VyW1wiZGF5XCIgKyBpXS5ob3VyW1wiaG91clwiICsga10gPSB7XG4gICAgICAgICAgICBjb25kaXRpb246IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmhvdXJba10uY29uZGl0aW9uLmljb24sXG4gICAgICAgICAgICB0ZW1wZXJhdHVyZUM6IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmhvdXJba10udGVtcF9jLFxuICAgICAgICAgICAgdGVtcGVyYXR1cmVGOiByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5ob3VyW2tdLnRlbXBfZixcbiAgICAgICAgICAgIGh1bWlkaXR5OiByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5ob3VyW2tdLmh1bWlkaXR5LFxuICAgICAgICAgICAgd2lsbF9yYWluOiByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5ob3VyW2tdLndpbGxfaXRfcmFpbixcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yZWNhc3RQZXJEYXlDZWxzaXVzKCk7XG4gICAgZm9yZWNhc3RQZXJEYXlGYWhyZW5oZWl0KCk7XG4gICAgZm9yZWNhc3RQZXJIb3VyKCk7XG4gICAgcmV0dXJuIERhdGFPYmplY3Q7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG5mdW5jdGlvbiBmaXJlUmVxdWVzdChpbnB1dHZhbHVlKSB7XG4gIGFwaVJlcXVlc3QoaW5wdXR2YWx1ZSkudGhlbigoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHsgY2l0eSwgY29uZGl0aW9uLCBjb25kaXRpb25faWNvbiwgY291bnRyeSwgaHVtaWRpdHksIGxvY2FsX3RpbWUgfSA9XG4gICAgICBkYXRhLmJhc2ljX2RhdGE7XG4gICAgY29uc3QgY3VycmVudENlbHNpdXNEYXRhID0gZGF0YS5jZWxzaXVzO1xuICAgIGNvbnN0IGN1cnJlbnRGYWhyZW5oZWl0RGF0YSA9IGRhdGEuZmFocmVuaGVpdDtcbiAgICBjb25zdCBkYWlseUZvcmVjYXN0RGF0YSA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RfcGVyX2RheV9DZWxzaXVzO1xuICAgIGNvbnN0IGhvdXJseUZvcmVjYXN0RGF0YSA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RfcGVyX2hvdXI7XG4gICAgY29uc3QgY3VycmVuV2VhdGhlciA9IG5ldyBXZWF0aGVyKFxuICAgICAgY2l0eSxcbiAgICAgIGNvbmRpdGlvbixcbiAgICAgIGNvbmRpdGlvbl9pY29uLFxuICAgICAgY291bnRyeSxcbiAgICAgIGh1bWlkaXR5LFxuICAgICAgbG9jYWxfdGltZSxcbiAgICAgIGN1cnJlbnRDZWxzaXVzRGF0YSxcbiAgICAgIGN1cnJlbnRGYWhyZW5oZWl0RGF0YVxuICAgICk7XG4gICAgY29uc3QgZGFpbHlGb3JlY2FzdE9iamVjdCA9IG5ldyBkYWlseUZvcmVjYXN0KGRhaWx5Rm9yZWNhc3REYXRhKTtcbiAgICBjb25zdCBob3VybHlGb3JlY2FzdE9iamVjdCA9IG5ldyBob3VybHlGb3JlY2FzdChob3VybHlGb3JlY2FzdERhdGEpO1xuICAgIC8vZGFpbHlGb3JlY2FzdE9iamVjdC50ZXN0KCk7XG4gICAgLy9ob3VybHlGb3JlY2FzdE9iamVjdC50ZXN0KCk7XG4gICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgICBjdXJyZW5XZWF0aGVyLmJhc2ljRGF0YUxvZygpO1xuICAgIGN1cnJlbldlYXRoZXIuY2Vsc2l1c0RhdGFMb2coKTtcbiAgICBjdXJyZW5XZWF0aGVyLmZhaHJlbmhlaXREYXRhTG9nKCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIktleSIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiZCIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIldlYXRoZXIiLCJjb25zdHJ1Y3RvciIsImNpdHkiLCJjb25kaXRpb24iLCJjb25kaXRpb25faWNvbiIsImNvdW50cnkiLCJodW1pZGl0eSIsImxvY2FsX3RpbWUiLCJjZWxzaXVzRGF0YSIsImZhaHJlbmhlaXREYXRhIiwidGhpcyIsImNlbHNpdXNEYXRhTG9nIiwiY29uc29sZSIsImxvZyIsImZlZWxzbGlrZSIsInRlbXBlcmF0dXJlIiwid2luZCIsImZhaHJlbmhlaXREYXRhTG9nIiwiYmFzaWNEYXRhTG9nIiwiZGFpbHlGb3JlY2FzdCIsInRlc3QiLCJob3VybHlGb3JlY2FzdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFzeW5jIiwid2hhdExvY2F0aW9uIiwicmVxdWVzdCIsImZldGNoIiwibW9kZSIsInJlc3BvbnNlIiwianNvbiIsIkRhdGFPYmplY3QiLCJiYXNpY19kYXRhIiwibG9jYXRpb24iLCJuYW1lIiwibG9jYWx0aW1lIiwiY3VycmVudCIsInRleHQiLCJpY29uIiwiY2Vsc2l1cyIsImZlZWxzbGlrZV9jIiwidGVtcF9jIiwid2luZF9rcGgiLCJmYWhyZW5oZWl0IiwiZmVlbHNsaWtlX2YiLCJ0ZW1wX2YiLCJ3aW5kX21waCIsImZvcmVjYXN0IiwiZm9yZWNhc3RfcGVyX2RheV9DZWxzaXVzIiwiZm9yZWNhc3RfcGVyX2RheV9GYWhyZW5oZWl0IiwiZm9yZWNhc3RfcGVyX2hvdXIiLCJmb3JlY2FzdFBlckRheUNlbHNpdXMiLCJpIiwiZGF0ZSIsImZvcmVjYXN0ZGF5IiwibWluX3RlbXAiLCJkYXkiLCJtaW50ZW1wX2MiLCJtYXhfdGVtcCIsIm1heHRlbXBfYyIsImZvcmVjYXN0UGVyRGF5RmFocmVuaGVpdCIsIm1pbnRlbXBfZiIsIm1heHRlbXBfZiIsImZvcmVjYXN0UGVySG91ciIsImhvdXIiLCJrIiwidGVtcGVyYXR1cmVDIiwidGVtcGVyYXR1cmVGIiwid2lsbF9yYWluIiwid2lsbF9pdF9yYWluIiwiZXJyb3IiLCJhcGlSZXF1ZXN0IiwidmFsdWUiLCJ0aGVuIiwiZGF0YSIsImN1cnJlbnRDZWxzaXVzRGF0YSIsImN1cnJlbnRGYWhyZW5oZWl0RGF0YSIsImRhaWx5Rm9yZWNhc3REYXRhIiwiaG91cmx5Rm9yZWNhc3REYXRhIiwiY3VycmVuV2VhdGhlciJdLCJzb3VyY2VSb290IjoiIn0=