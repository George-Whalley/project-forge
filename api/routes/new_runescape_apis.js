// --------------------------------------------------------------------------------------------------------------------------
// PACKAGES
var express = require('express'); // Express 
var router = express.Router(); // Routing
const https = require('https'); // Used to get data from runescape
const axios = require('axios'); // Note used in the end
// --------------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------------
// This is the GET call triggered by the REACT script
// NOTE: async needs to be included before function declaration
router.get('/', async function(req, res){
  // NOTE: req.query = query the request URL
  r_data = await getdata(req.query.player_name); // Get the runescape data from the get URL
   // console.log('i: ' + r_data + ' end'); // Dev Statement
  res.json(JSON.parse(r_data)); // The runescape data is returned in buffer format so rememebr to decode before returning
});
// --------------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------------
// This is the GET call triggered from this API, and goes to the runescape server
// Passing in the data from the original get call from the react script
// NOTE: async needs to be included before function declaration
async function getdata(player_name){
  get_url = 'https://apps.runescape.com/runemetrics/profile/profile?user=' + player_name + "&activities=20"; // Assemble the GET url, using the player name passed into the function
  // CREATE PROMISE (This needs to be completed before this function returns)
  let promise = new Promise((resolve, rejct) => {
    // MAIN GET CALL
    // NOTE: Include async before response to indicate this is required
    https.get(get_url, async response => {
      let data = ""; // Var to store the data
      // SETTING HEADERS
      const headerDate = response.headers && response.headers.date ? response.headers.date : 'no response date';
      // ON RECEIPT OF DATA CHUNK
      response.on('data', chunk => {
        // Add each chunk of the response to data var
        data += chunk; // THIS CASUED THE BUFFER ISSUES / DATA ADDING TO ARRAY NOT STRING
      });
      // ON COMPLETE
      response.on('end', () => {
        // Dev Statement
        // console.log(JSON.parse(data))
        // PROMISE RESOLVE
        resolve(data); // Resolve the data to indicate the promise has been completed
        // RETURN DATA - OUT OF PROMISE
        return data
      });
    });
  });
  // console.log(promise); // DEV STATEMENT
  // RETURN DATA - OUT OF FUNCTION
  return promise;
}
// --------------------------------------------------------------------------------------------------------------------------

// Export the router settings?
module.exports = router;