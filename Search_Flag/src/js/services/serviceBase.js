import axios from "axios";

export const get = async (hej) => {
  const response = await axios.get(hej);
  return response.data;
};
