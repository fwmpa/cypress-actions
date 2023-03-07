const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjFiYmZmYmU2LTQzYjgtNDUyZC1hODc4LTZjNTdlNDk5NDIzMi0xNjc4MTg2MDUyMTAzIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiYjEwNjE0MTgtMThkOC00Mzk2LWI2NDQtOTg5NGYzMGZjZThiIiwidHlwZSI6InQifQ.mnkcT7IRFw5puNVObTs6j4p3JAmv4WTtGDpoqy1CH0E'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
