import express from "express"

const app = express();
const port = 3000;


app.get("/", (req, res) => {
    // console.log(req.rawHeaders)
    res.send("<h1> Hello World!</h1>")
});

app.get("/about", (req, res) => {
    res.send("<h1> About Me </h1>")
})

app.get("/contact", (req, res) => {
    res.send("<h1> Contact me on </h1>")
});

app.post("/register", (req, res) => {
    res.sendStatus(201)
});

app.put("/user/aravind", (req, res) => {
    res.sendStatus(200)
});

app.patch("/user/aravind", (req, res) => {
    res.sendStatus(200)
});

app.delete("/user/aravind", (req, res) => {
    res.sendStatus(200)
});

app.listen(3000, () => {
    console.log(`Server running on port ${port}.`)
});