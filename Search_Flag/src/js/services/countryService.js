import {get} from "./serviceBase";

export const getName = async (name) => {
  const url = "https://restcountries.com/v3.1/name/" + name;

  const countries = await get(url);

  return countries;
};

export const getCapital = async (capital) => {
  const url = "https://restcountries.com/v3.1/capital/" + capital;

  return await get(url);
};
