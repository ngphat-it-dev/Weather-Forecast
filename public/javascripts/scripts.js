function myFunction() {
  const location = document.getElementById("location").value;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("token", "az02n1249clasfhxaroqw");
  urlencoded.append("time", "now");
  urlencoded.append("type", "all");
  urlencoded.append("location", location);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  fetch("http://localhost:3000", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      const fRe = JSON.parse(result);
      //console.log(result.data.location.name)
      document.getElementById("name").innerHTML = fRe.data.location.name;
      document.getElementById("day").innerHTML = fRe.data.location.localtime;
      document.getElementById("status").innerHTML = fRe.data.current.condition.text;
      document.getElementById("temp").innerHTML = fRe.data.current.temp_c + `&#176;`;

      document.getElementById("cloudy").innerHTML = fRe.data.current.cloud + "%";
      document.getElementById("hum").innerHTML = fRe.data.current.humidity + "%";
      document.getElementById("win").innerHTML = fRe.data.current.wind_dir;
      document.getElementById("rai").innerHTML = fRe.data.location.localtime_epoch;
      document.getElementById("tempf").innerHTML = fRe.data.current.temp_f + `&#176;` + "F";
      document.getElementById("tempc").innerHTML = fRe.data.current.temp_c + `&#176;` + "C";

      document.getElementById("icon").src = fRe.data.current.condition.icon;
    })
    .catch((error) => console.log("error", error));
}
