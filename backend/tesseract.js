const Tesseract = require('tesseract.js')

Tesseract.recognize('./test-photos/BasicSouffle.png')
  .progress(console.log)
  .then((result) => console.log(result.text))
  .catch((err) => {throw new Error(err)})