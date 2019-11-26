// Use Express

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT  = 5000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

console.log("teeeeesst");

app.get("/", (req, res) => {
    res.send({message: "Learn Express GET"});
});

app.get("/:id", (req, res) => {
    res.send({message: "Learn Express GET ID"});
});

app.post("/", (req, res) => {
    console.log(req.body);

    res.status(201).json({
        message: "New Item is Added",
        data: {
            email: req.body.email,
            password: req.body.password
        }
    });
});

app.put("/", (req, res) => {
    res.send({
        message: "New Item is Edit",
        data: {
            name: req.body.name,
            address: req.body.address,
            age: Number(req.body.age)
        }
    });
});

app.put("/:id", (req, res) => {
    res.send({message: "Learn Express UPDATE ID"});
});

app.delete("/", (req, res) => {
    res.send({message: "Learn Express DELETE All"});
});
app.delete("/:id", (req, res) => {
    res.send({message: "Learn Express DELETE ID"});
});

app.patch("/", (req, res) => {
    res.send({message: "Learn Express PATCH All"});
});

app.patch("/:id", (req, res) => {
    res.send({message: "Learn Express PATCH ID"});
});
app.get("/hello", (req, res) => {
    res.send({message: "Hello I'm learning express"});
});

app.get("/ketiga", (req, res) => {
    const datas = [1,2,3,5];
    res.send({ data: datas});
});

app.listen(PORT, () => {
    console.log(`This app listening on PORT: ${PORT}`);
});