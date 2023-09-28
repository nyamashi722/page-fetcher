const request = require('request');
const fs = require("fs");

const URL = process.argv[2]
const localPath = process.argv[3]


request(`${URL}`, (error, response, body) => {
  const content = body;
  fs.writeFile(`${localPath}`, content, error => {
    if (error) {
      return;
    }

    console.log(`Downloaded and saved ${JSON.stringify(body).length} bytes to ./index.html`)
  })
});
