const request = require('request');
const fs = require(`fs`);

///create an array with the args input, first url, second name.ext of the text document to create. then launch the function request and pass the return to the document creation function
const input = process.argv.slice(2);

let content;

request(input[0], (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  content = body;

  ////Document creation function: make a function to take the data brought by the request and copy it into a test file inthe indicated folder
  
  fs.writeFile(`${input[1]}`, content, function (err) {
    let path = `${input[1]}`;
    if (err) throw err;
    fs.stat(`${input[1]}`, (err, fileStats) => {
      fileSt=fileStats;
      if (err) {
        console.log(err)
      } else {
        // console.log(fileStats.size);
        
        console.log(`Downloaded and saved ${fileSt.size} bytes to ${path}`);
      }
    })
    
  });
});

