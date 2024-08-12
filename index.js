const express = require('express')
const app = express()
const port = 3000;
const cors = require('cors')
const fs = require('fs')


app.use(cors())
app.use(express.json())

let rawData = fs.readFileSync('frases.json')
let frasesData = JSON.parse(rawData)
let frases = frasesData.frases


app.get('/api/frases', (req,res) => {
    const randomIndex = Math.floor(Math.random() * frases.length)
    res.json({ frases: frases[randomIndex]})
})

app.listen(port,() => {
    console.log(`Server running at http://localhost:${port}`)
})