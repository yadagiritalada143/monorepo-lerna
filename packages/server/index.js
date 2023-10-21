const express = require("express");
const port = process.env.port || 5000;
const app = express();

app.get('/', (req, res) => {
    res.send("I am backend server running by Bhagat !!");
});

app.listen(port, (error) => {
    if(error) {
        console.log(`Error: ${error.message}`)
    } else {
        console.log(`Listening on port ${port}`);
    }
});