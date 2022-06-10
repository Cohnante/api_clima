function consultaClima() {
  let ciudad = document.getElementById("ciudad").value;

  const options = {
    method: "GET"
  };
  
  // Petición HTTP
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=96ddeac7568d65fa1431f5838aa93523`, options)
    .then(response => {return response.text()})
    .then(data => {
      //convertimos formato json cadena en objeto de javascript
      let infoClima = JSON.parse(data);
      document.getElementById("Temp").innerHTML = Math.trunc(infoClima.main.temp - 273.1)+"c°";
      document.getElementById("viento").innerHTML = infoClima.wind.speed+"m/s";
      document.getElementById("humedad").innerHTML = infoClima.main.humidity;
      document.getElementById("pais").innerHTML = infoClima.sys.country;
    }).catch((err) => {console.log("Info error: ", err);})
}