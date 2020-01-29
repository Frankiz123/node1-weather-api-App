const path = require("path");
const forecast = require("./utils/forcast");
const genocode = require("./utils/genocode");
const express = require("express");
const hbs = require("hbs");
const app = express();

//Define path for Express config
const dirpath = path.join(__dirname, "../public");
const viewpath = path.join(__dirname, "../templates/views");
const partialviewpath = path.join(__dirname, "../templates/partials");

//Setup handlebars views and engine
app.set("view engine", "hbs");
app.set("views", viewpath);
hbs.registerPartials(partialviewpath);

//Setup static directory to serve
app.use(express.static(dirpath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Tahir"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Tahir"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Us",
    name: "Tahir"
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({ error: "Please provide the search query." });
  }
  console.log(req.query.search);
  res.send({
    products: []
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({ error: "Please provide adddress to query." });
  }
  const address = req.query.address;
  genocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({ error });
    }

    forecast(latitude, longitude, (error, forcastdata) => {
      if (error) {
        return res.send({ error });
      }
      res.send({ location, forcastdata });
    });
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "help Articals 404",
    name: "Tahir",
    errorMessage: "Partial Page Not Found. 404"
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "Page Not Found 404 error",
    name: "Tahir",
    errorMessage: "Page Not Found. 404"
  });
});

app.listen(3000, () => {
  console.log("The Server is runing on 3000.");
});
