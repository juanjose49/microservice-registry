const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello Meow!'))

app.listen(port, () => console.log(`Microservice Registry started on port ${port}!`))