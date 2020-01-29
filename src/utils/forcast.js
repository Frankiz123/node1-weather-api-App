const request = require("request");

// Challenge code below...

// const forcast = (latitude, longitude, callback) => {
//   const url =
//     "https://api.darksky.net/forecast/9f9eb1597754496777b16fc08faab1c0/" +
//     encodeURIComponent(latitude) +
//     "," +
//     encodeURIComponent(longitude) +
//     "?units=si";

//   request({ url: url, json: true }, (error, response) => {
//     if (error) {
//       callback("Check your network Connection.", undefined);
//     } else if (response.body.error) {
//       callback(
//         "Your given parameters are incorrect i.e langitude and latitude.",
//         undefined
//       );
//     } else {
//       callback(
//         undefined,
//         "It is currently " +
//           response.body.currently.temperature +
//           " degree out there. There is a " +
//           response.body.currently.precipProbability +
//           "% chnace of rain."
//       );
//     }
//   });
// };

const forcast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/9f9eb1597754496777b16fc08faab1c0/" +
    encodeURIComponent(latitude) +
    "," +
    encodeURIComponent(longitude) +
    "?units=si";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Check your network Connection.", undefined);
    } else if (body.error) {
      callback(
        "Your given parameters are incorrect i.e langitude and latitude.",
        undefined
      );
    } else {
      callback(
        undefined,
        "It is currently " +
          body.currently.temperature +
          " degree out there. There is a " +
          body.currently.precipProbability +
          "% chnace of rain."
      );
    }
  });
};

module.exports = forcast;
