import axios from 'axios';

const apiKey = 'd91f4ea82c832365f288d8ef0385ef11';
const countryId = 270;
// const url = `https://api.triathlon.org/v1/athletes?category_id=&gender=&name=&country_id=&elite=&page=&athlete_id=&validated=&per_page=`;

export const getAthleteInfo = async athlete_id => {
  const url = `https://api.triathlon.org/v1/athletes/${athlete_id}`;

  const config = {
    headers: {
      apikey: apiKey,
    },
  };

  try {
    const res = await axios.get(url, config);
    return res.data;
  } catch (error) {
    console.log(`Failed to get athlete: ${JSON.stringify(error.respose)}`);
    return error;
  }
};

export const getAllCategories = async () => {
  const url = 'https://api.triathlon.org/v1/athletes/categories';

  const config = {
    headers: {
      Accept: 'application/json',
      apikey: apiKey,
    },
  };

  try {
    const res = await axios.get(url, config);
    return res.data;
  } catch (error) {
    console.log(`Failed to get categories: ${JSON.stringify(error.respose)}`);
    return error;
  }
};

export const getBestAthletes = async () => {
  const url = `https://api.triathlon.org/v1/athletes?country_id=${countryId}&elite=true&per_page=100`;

  const config = {
    headers: {
      apikey: apiKey,
    },
  };

  try {
    const res = await axios.get(url, config);
    return res.data;
  } catch (error) {
    console.log(`Failed to get athletes: ${JSON.stringify(error.respose)}`);
    return error;
  }
};
