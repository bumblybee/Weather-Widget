let button = document.querySelector("#button");
let cityValue = document.querySelector("#city");
let name = document.querySelector("#name");
let description = document.querySelector("#description");
let temp = document.querySelector("#temp");
let image = document.querySelector("#image");
let weatherCard = document.querySelector("#weather-card");
let dateTime = document.querySelector("#date-time");

button.addEventListener("click", function() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityValue.value +
      "&units=imperial&appid=0cba1a3ec991c8ed209a8252206e0f7f"
  )
    .then(response => response.json())
    .then(data => {
      let nameValue = data["name"];
      let tempValue = data["main"]["temp"];
      let descValue = data["weather"][0]["description"];

      name.innerHTML = nameValue;
      temp.innerHTML = Math.round(tempValue) + "°F";
      description.innerHTML = descValue.toUpperCase();
      if (descValue.includes("rain")) {
        image.src = "img/rain.png";
      } else if (descValue.includes("cloud")) {
        image.src = "img/wind.png";
      } else if (descValue.includes("clear")) {
        image.src = "img/day.png";
      } else if (descValue.includes("fog")) {
        image.src = "img/haze.png";
      }
    })

    .catch(err => alert("Wrong city name!"));
});

weatherCard.addEventListener("keypress", function(e) {
  if (e.keyCode === 13) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        cityValue.value +
        "&units=imperial&appid=0cba1a3ec991c8ed209a8252206e0f7f"
    )
      .then(response => response.json())
      .then(data => {
        let nameValue = data["name"];
        let tempValue = data["main"]["temp"];
        let descValue = data["weather"][0]["description"];

        name.innerHTML = nameValue;
        temp.innerHTML = Math.round(tempValue) + "°F";
        description.innerHTML = descValue.toUpperCase();
        if (descValue.includes("rain")) {
          image.src = "img/rain.png";
        } else if (descValue.includes("cloud")) {
          image.src = "img/wind.png";
        } else if (descValue.includes("clear")) {
          image.src = "img/day.png";
        } else if (descValue.includes("fog")) {
          image.src = "img/haze.png";
        }
      })

      .catch(err => alert("Wrong city name!"));
    console.log(e);
  }
});

function date() {
  let today = new Date();
  let day = String(today.getDate());
  let month = String(today.getMonth() + 1);
  let year = String(today.getFullYear());
  let time = today.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true
  });
  today = month + "/" + day + "/" + year + "<br>" + time;
  dateTime.innerHTML = today;
}

document.onload(date());
