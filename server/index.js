require('dotenv').config

const express = require('express')
console.log(process.env.PORT);

const PORT = process.env.PORT || 5000

const app = express()

app.listen(PORT, () => console.log(`Server started on port ${5000}`))