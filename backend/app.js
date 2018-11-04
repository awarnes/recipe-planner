const express = require('express')
const tess = require('./tesseract')
const nlp = require('./nlp')
const pup = require('./puppeteer')

const app = express()

const TEST_URL = "https://www.eggs.ca/recipes/basic-souffle"


app.get('/', (req, res) => {
  res.status(200).send("Welcome!")
})

app.get('/souffle', async (req, res) => {
  const result = await tess.captureRecipefromPhoto('BasicSouffle.png')
  const newlineSplit = nlp.regexpTokenizeRecipe(result, /\n/)
  res.status(200).send({newlineSplit})
})

app.get('/pup/souffle', async (req, res) => {
  const result = await pup.getHtmlFromPage(TEST_URL)
  console.error("CONTENT: \n", result)
  res.status(200).send(result)
})

app.listen(3000, () => console.log("Listening on port 3000"))