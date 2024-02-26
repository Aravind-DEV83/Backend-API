import express from "express"
import bodyParser from "body-parser";
import { dirname } from "path"
import { fileURLToPath } from "url"
const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
const port = 3000;
var day = ""
var event = ""
let fruits = ["Banana", "Oranges", "Apples"]

function checkDay(req, res, next) {
    const d = new Date();
    let d_number = d.getDay();
    
    if (d_number == 6 || d_number == 0) {
        day = "the weekend"
        event = "have fun!"
    }
    else {
        day = "a weekday"
        event = "work Hard!"
    }
    next();
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(checkDay);

app.get("/", (req, res) => {
    res.render(__dirname + "/sample.ejs", {whichday: day, whichevent: event});
    res.locals = {fruitsarray: fruits}
});

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
});

