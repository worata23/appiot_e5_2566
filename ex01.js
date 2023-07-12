const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! Worata')
})

app.listen(port, () => {
  console.log(`Example app listenin on port ${port}`)
  console.log('it worata')})
