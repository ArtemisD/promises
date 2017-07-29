/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function(filePath, callback) {
  return fs.readFile(filePath, "utf8", function(err, success) {
    if (err) {
      callback(err, null);
    } else {
      var lines = success.split('\n');
      callback(null, lines[0]);
    }

  });

};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function(url, callback) {
  request.get(url, function(error, response, body){
    if(error) {
      callback(error, null);
    } else {
      callback(null, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
