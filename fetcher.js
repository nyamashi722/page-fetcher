const request = require('request');
const fs = require("fs");


request('http://www.example.edu', (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  const content = body;
  fs.writeFile("./index.html", content, error => {
    if (error) {
      return;
    }

    console.log(`Downloaded and saved ${JSON.stringify(body).length} bytes to ./index.html`)
  })
});
