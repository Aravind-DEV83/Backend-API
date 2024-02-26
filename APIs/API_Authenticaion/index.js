import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

const yourUsername = "ajarpala";
const yourPassword = "ImTheBest";
const yourAPIKey = "97c2c36b-5087-4b84-8ef6-ddd2e9de9ce3";
const yourBearerToken = "4e774fda-6c01-4419-b1b8-1dff99c05cc1";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}random`);
    res.render("index.ejs", {content: JSON.stringify(response.data)})
  }
  catch(error) {
    res.status(400).send("Error: ", error.message);
  }

});

app.get("/basicAuth", async (req, res) => {
  const response = await axios.get(`${API_URL}all`, {
    auth: {
      username: yourUsername,
      password: yourPassword
    },
    params: {page: 1}
  });
  
  res.render("index.ejs", {content: JSON.stringify(response.data)})
});

app.get("/apiKey", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/filter", {
      params: {
        score: 8,
        apiKey: yourAPIKey,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/bearerToken", async (req, res) => {
  try {
  const response = await axios.get(`${API_URL}secrets/42`, {
    headers: {
      Authorization: `Bearer ${yourBearerToken}`
    },
  });
  res.render("index.ejs", {content: JSON.stringify(response.data)})
  }
  catch(error) {
    res.status(400).send("Error: ", error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
