const express = require('express')
const app = express()

app.enable('trust proxy'); // This is necessary if you're behind a reverse proxy like Heroku

app.all('/', (req, res) => {
    console.log("Just got a request!")
    console.log(req.clientIp)
    // res.send('Yo!')
    const clientIp = req.clientIp;
    res.json({ ip: clientIp });
})
app.listen(process.env.PORT || 3000)