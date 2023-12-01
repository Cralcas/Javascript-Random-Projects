import "./../css/style.css";
import {createHtml} from "./createHtml";
import {getName} from "./services/countryService";

document.getElementById("searchForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const countryToSearch = document.getElementById("searchText").value;

  const countries = await getName(countryToSearch);
  console.log(countries);
  createHtml(countries);
});
