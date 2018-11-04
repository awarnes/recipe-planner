const Tesseract = require('tesseract.js')


async function captureRecipefromPhoto (photo) {
  let result
  await Tesseract.recognize(`./test-photos/${photo}`)
    .progress(console.log)
    .then(resp => {
      result = resp.text
      return result
    })
    .catch((err) => {throw new Error(err)})
  return result
}

module.exports = {
  captureRecipefromPhoto
}