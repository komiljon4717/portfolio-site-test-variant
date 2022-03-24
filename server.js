const express = require('express');
const app = express();

const path = require('path');
app.use(express.static('potfolio'))



app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "potfolio", "index.html"));
})

app.listen(3000, () => console.log("server ready at:3000"))