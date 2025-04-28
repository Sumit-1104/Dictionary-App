const express = require('express')
var axios = require("axios")
var path = require("path")
const app = express()
const port = 3000




app.get('/', (req, res) => {
  console.log(path.join(__dirname, 'public'))
  return res.sendFile('public/index.html', { root: __dirname })
})
app.get('/searchword', (req, res) => {
  // res.send('Hello World! SUMIT')
  console.log(req.query)

  var options = {
    method: 'GET',
    url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/theme/',
    params: { entry: req.query.entry},
    headers: {
      'X-RapidAPI-Key': '302b9ce08bmsh96884dbcc4f35dfp18adfajsnb1c92c68af39',
      'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
    res.json(response.data)
  }).catch(function (error) {
    console.error(error);
  });



  // let response = {}
  // response.data = {
  //   entry: 'rediculous',
  //   request: 'ridiculous',
  //   response: 'rediculous',
  //   assoc_word: ['funny', 'stupid', 'silly'],
  //   assoc_word_ex: ['funny', 'stupid', 'silly', 'absurd', 'comical'],
  //   version: '7.0.7',
  //   author: 'twinword inc.',
  //   email: 'help@twinword.com',
  //   result_code: '200',
  //   result_msg: 'Success'
  // }


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} - http://localhost:3000`)
});