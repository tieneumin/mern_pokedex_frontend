import axios from "axios";

const API_URL = "http://localhost:5000";

/* 
    INSTRUCTION: 
    - Create a function to fetch pokemons from the API. 
    - API call may include query parameters for search and type.
*/
export const fetchPokemons = async (search, type) => {
  const params = { search };
  // console.log(params.search);
  if (type !== "all") params.type = type;
  // console.log(params.type);
  // console.log(params);
  const queries = new URLSearchParams(params);
  const res = await axios.get(`${API_URL}/pokemons?${queries.toString()}`);
  return res.data;
};

/* INSTRUCTION: Create a function to fetch types from the API. */
export const fetchTypes = async () => {
  const res = await axios.get(`${API_URL}/types`);
  return res.data;
};
