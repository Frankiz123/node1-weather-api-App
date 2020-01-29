// This api written in callBacks For Geolocation and Name of City and country.

const request = require("request");

// const genocode = (address, callBack) => {
//   const url =
//     "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
//     encodeURIComponent(address) +
//     ".json?access_token=pk.eyJ1IjoiZnJhbmtpeiIsImEiOiJjazV2NzU3Nm0wOTlpM2ZsYm9kcTR5aGEzIn0.eFCK35Cmh3ej6PXuwSSPtg&limit=1";
//   request({ url: url, json: true }, (error, response) => {
//     if (error) {
//       callBack("Check your internet connection.", undefined);
//     } else if (response.body.message || response.body.features.length === 0) {
//       callBack("Unable to find api reqvest in url.", undefined);
//     } else {
//       callBack(undefined, {
//         longitude: response.body.features[0].center[0],
//         latitude: response.body.features[0].center[1],
//         location: response.body.features[0].place_name
//       });
//     }
//   });
// };

const genocode = (address, callBack) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiZnJhbmtpeiIsImEiOiJjazV2NzU3Nm0wOTlpM2ZsYm9kcTR5aGEzIn0.eFCK35Cmh3ej6PXuwSSPtg&limit=1";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callBack("Check your internet connection.", undefined);
    } else if (body.message || body.features.length === 0) {
      callBack("Unable to find api reqvest in url.", undefined);
    } else {
      callBack(undefined, {
        longitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = genocode;
