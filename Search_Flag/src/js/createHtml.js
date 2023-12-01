import {getCapital} from "./services/countryService";

export const createHtml = (nations) => {
  const searchResult = document.getElementById("searchResult");
  searchResult.innerHTML = "";

  nations.forEach((nation) => {
    const flagContainer = document.createElement("div");
    const image = document.createElement("img");
    image.src = nation.flags.png;
    const message = document.createElement("p");
    flagContainer.addEventListener("click", async () => {
      const countryDetails = await getCapital(nation.capital);

      message.innerHTML = nation.capital;

      console.log(countryDetails);
    });

    flagContainer.appendChild(image);
    flagContainer.appendChild(message);
    searchResult.appendChild(flagContainer);
  });
};
