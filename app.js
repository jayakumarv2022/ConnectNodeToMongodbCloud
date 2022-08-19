const express = require('express');
const mongoose = require('mongoose'), port = 8000;

const app = express();

mongoose.connect("mongodb+srv://admin:bcmQIHToKFH0m4zR@freecluster.ud7jhlw.mongodb.net/?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true });

app.get("/", (req, res) => {
    res.send("Check server is running");
});

app.listen(port, () => {
    console.log("Running");
});