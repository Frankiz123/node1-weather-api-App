console.log("This is native JavaScript.");

// fetch("http://puzzle.mead.io/puzzle").then(response => {
//   response.json().then(data => {
//     console.log(data);
//   });
// });

// fetch("http://localhost:3000/weather?address=!").then(response => {
//   response.json().then(data => {
//     if (data.error) {
//       console.log(data.error);
//     } else {
//       console.log(data.location);
//       console.log(data.forcastdata);
//     }
//   });
// });

const weatherform = document.querySelector("form");
const search = document.querySelector("input");
const message1 = document.querySelector("#message-1");
const message2 = document.querySelector("#message-2");

weatherform.addEventListener("submit", e => {
  e.preventDefault();

  message1.textContent = "Loading ...";
  message2.textContent = "";
  const address = search.value;
  fetch("/weather?address=" + encodeURIComponent(address)).then(response => {
    response.json().then(data => {
      if (data.error) {
        message1.textContent = data.error;
      } else {
        message1.textContent = data.location;
        message2.textContent = data.forcastdata;
      }
    });
  });
});
