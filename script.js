//Circle
const circle = document.getElementById("circle");
const circlesm = document.getElementById("circlesm");
const APIkey = 

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  setTimeout(() => {
    circlesm.style.left = `${x - 20}px`;
    circlesm.style.top = `${y - 20}px`;
  }, 30);
  setTimeout(() => {
    circle.style.left = `${x - 7}px`;
    circle.style.top = `${y - 7}px`;
  }, 10);
});
///////////////////
const cityInput = document.querySelector(".city-input");
const searchBtn = document.querySelector(".search-btn");

const getCityCoordinates = () => {
  const cityName = cityInput.value.trim();
  if (!cityName) return;
  const GEOCODING_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${APIkey}`
  console.log(cityName);
};

searchBtn.addEventListener("click", getCityCoordinates);
