const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

const path = require('path');
app.use(express.static('potfolio'))



app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "potfolio", "index.html"));
})

app.listen(PORT, () => console.log("server ready at:3000"))