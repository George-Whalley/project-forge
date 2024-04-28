// PACKAGES
var express = require('express'); // Express 
var router = express.Router(); // Routing
const https = require('https'); // API calls
const player_name = "Raul";
const get_url = 'https://apps.runescape.com/runemetrics/profile/profile?user=' + player_name + "&activities=20";

router.get('/api/users', function(req, res) {
  const user_id = req.query.player_name;
  res.send({
    'user_id': user_id,
  });
  get_url = 'https://apps.runescape.com/runemetrics/profile/profile?user=' + user_id + "&activities=20";
});

console.log(get_url)

// GET RUNEMETRICS
https.get(get_url, res => {
  // Define data var to store response
  let data = [];
  // Set the header date / response data
  const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
  // Dev Statements
  //console.log('Status Code:', res.statusCode);
  //console.log('Date in Response header:', headerDate);
  // On response
  res.on('data', chunk => {
    // Remove chunck transfer encoding
    data.push(chunk);
  });
  // On respoonse - end of data
  res.on('end', () => {
    // Dev Statement
    //console.log('Response ended-test: ');
    // Store the data in USERS parsed into JSON
    const users = JSON.parse(Buffer.concat(data).toString());
    // Dev Statement
    //console.log(users);
    // On GET call made to the NODE JS URL
    router.get('/', function(req, res, next) {
      const user_id = req.query.player_name;
      // Return Message
      res.json(users);
    });
  });

  // If there is a error
  }).on('error', err => {
    // Return error message
    console.log('Error: ', err.message);
  });


// Export the router settings?
module.exports = router;