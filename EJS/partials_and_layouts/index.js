import express from "express"
import {dirname} from "path"
import { fileURLToPath } from "url"
import path from "path"
const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
const port = 3000;


// Middlewares
app.use(express.static(path.join(__dirname, "/public")));

// Route Handlers
app.get("/", (req, res) => {
  res.render(__dirname + "/views/index.ejs")
});

app.get("/about", (req, res) => {
  res.render(__dirname + "/views/about.ejs")
});

app.get("/contact", (req, res) => {
  res.render(__dirname + "/views/contact.ejs")
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
