const form = document.getElementById("form");
const location = document.getElementById("location");
const url = form.getAttribute("action");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const location = location.value;
  const data = { location: location };

  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
