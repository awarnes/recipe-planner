const puppeteer = require('puppeteer')
// const cheerio = require('cheerio')

async function getHtmlFromPage (URL) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto(URL)
  const html = await page.content()
  // const html = cheerio.load(page)

  return html
}


module.exports = {
  getHtmlFromPage
}