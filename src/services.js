import axios from 'axios';

const apiKey = 'd91f4ea82c832365f288d8ef0385ef11';
const countryId = 270;
const config = {
  headers: {
    Accept: 'application/json',
    apikey: apiKey,
  },
};

export const getAthleteInfo = async athlete_id => {
  const url = `https://api.triathlon.org/v1/athletes/${athlete_id}`;

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

  try {
    const res = await axios.get(url, config);
    return res.data;
  } catch (error) {
    console.log(`Failed to get categories: ${JSON.stringify(error.respose)}`);
    return error;
  }
};

export const getBestAthletes = async () => {
  const url = `https://api.triathlon.org/v1/athletes?country_id=${countryId}&elite=true&per_page=10`;

  try {
    const res = await axios.get(url, config);
    return res.data;
  } catch (error) {
    console.log(`Failed to get athletes: ${JSON.stringify(error.respose)}`);
    return error;
  }
};

export const getBestAthletesByName = async searchInput => {
  const url = `https://api.triathlon.org/v1/athletes?country_id=${countryId}&elite=true&per_page=10&name=${searchInput}`;

  try {
    const res = await axios.get(url, config);
    return res.data;
  } catch (error) {
    console.log(`Failed to get athletes: ${JSON.stringify(error.respose)}`);
    return error;
  }
};
