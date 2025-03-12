const express = require('express')
const app = express()
const port = 3000
const path = require('path');
app.use(express.static('public'))

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

