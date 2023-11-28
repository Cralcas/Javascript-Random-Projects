import "./../css/style.css";

fetch("https://restcountries.com/v3.1/all?fields=flags,name,capital")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const container = document.getElementById("app");
      const nationContainer = document.createElement("section");

      nationContainer.className = "nationContainer";

      const image = document.createElement("img");
      const nation = document.createElement("h2");
      const cap = document.createElement("p");

      image.src = data[i].flags.png;
      nation.innerHTML = data[i].name.common;
      cap.innerHTML = data[i].capital;

      container.appendChild(nationContainer);
      nationContainer.appendChild(image);
      nationContainer.appendChild(nation);
      nationContainer.appendChild(cap);
    }
  });

// data[i].flags.png + " " + data[i].name.common + " " + data[i].capital;
