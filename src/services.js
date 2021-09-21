import {axios} from 'axios';

const apiKey = 'd91f4ea82c832365f288d8ef0385ef11';
const countryId = 'spain';
// const url = `https://api.triathlon.org/v1/athletes?category_id=&gender=&name=&country_id=&elite=&page=&athlete_id=&validated=&per_page=`;

export const getBestAthletes = async () => {
  const url = `https://api.triathlon.org/v1/athletes?country_id=260${countryId}&per_page=10`;

  const config = {
    headers: {
      apikey: apiKey,
    },
  };

  try {
    return await axios.get(url, config);
  } catch (error) {
    console.log(`Failed to get athletes: ${JSON.stringify(error.respose)}`);
    return error;
  }
};
