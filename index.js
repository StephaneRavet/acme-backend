const express = require('express')
const app = express()
const cors = require('cors')
const port = 3003

app.use(cors())

app.get('/', (req, res) => {
  res.send('hello world')
})

app.post('/user/login', (req, res) => {
  const token = 'blablaToken'
  res.json({token})
})

app.listen(port, () => console.log(`App listening on port ${port}.`))
