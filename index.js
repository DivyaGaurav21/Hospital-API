const express = require('express');
const app = express();

const port = 8000;

// -----------DB Connection---------------------------//
const db = require('./config/mongoose')


app.get('/', (req, res) => {
    res.json({"name" : "dg"})
})

app.listen(port, (err) => {
    if (err) {
        console.log(`error in running on port`, err);
    } else {
        console.log(`yeah ! Server is running on port ${port}`);
    }
})


