export const getExplore = async () => {
  try {
    const res = await fetch(
      `https://cdn.rawgit.com/abbassiddiqi/airbnb-api/bbd1300a/flats.json`
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const exploreData = await res.json();
    // console.log('explor data from the api ts:',exploreData);
    return exploreData;
  } catch (error) {
    console.log("error from api ts getExplor: ", error);
  }
};
export const getLiveDate = async () => {
  try {
    const res = await fetch(
      `https://cdn.rawgit.com/abbassiddiqi/airbnb-api/bbd1300a/flats.json`
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const liveData = await res.json();
  
    // console.log('explor data from the api ts:',exploreData);
    return liveData;
  } catch (error) {
    console.log("error from api ts getLiveData: ", error);
  }
};

// limited request
/*     const url = 'https://airbnb13.p.rapidapi.com/search-geo?ne_lat=52.51&ne_lng=13.41&sw_lat=52.41&sw_lng=13.31&checkin=2025-01-12&checkout=2025-01-13&adults=1&children=0&infants=0&pets=0&page=1&currency=USD';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '3d90a1032fmsh5c69ad4f1431b77p141fbfjsndde5e48f1b1e',
        'x-rapidapi-host': 'airbnb13.p.rapidapi.com'
        }
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
            } catch (error) {
                console.error(error);
                }
                */
