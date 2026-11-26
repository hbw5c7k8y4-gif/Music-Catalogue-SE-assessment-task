let result = "";
fetch("./frontEndData.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });
function appendData(data) {
  let result = "";

  data.forEach(function (item) {
    result += `
            <div class="card">
                <img class="card-image"
                     src="${item.image}"
                     alt="${item.name}">

                <h2 class="card-name">${item.name}</h2>

                <p class="card-about">${item.artist}</p>
            </div>
        `;
  });

  document.querySelector(".container").innerHTML = result;
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("js/serviceworker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}
