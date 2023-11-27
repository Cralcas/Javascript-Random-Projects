import "./../css/style.css";

fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      console.log(
        data[i].flags.png + " " + data[i].name.common + " " + data[i].capital
      );
    }
  });
