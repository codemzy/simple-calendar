var http = require('https');
var fs = require('fs');

const theFunction = function() {
  var file = fs.createWriteStream("static/favicon.ico");
  http.get("https://cdn.glitch.com/7edf3bdc-93b1-403c-bfa5-40d3c76443c5%2Ffavicon.ico?1538065150477", function(response) {
    response.pipe(file);
  });
  console.log('done favicon');
};

theFunction();