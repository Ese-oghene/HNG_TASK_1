// const express = require('express');
// const app = express();
// const port = 5000;

// // Define a route with three route parameters
// app.get('/:slack_name/:track', (req, res) => {
//   const slack_name = req.query.slackName;
//   const track = req.query.track;

//   // Create an object using the captured parameters
//   const userObject = {
//     slack_name: Bernard_Ese,
//     current_day: Monday,
//     track : Backend,
    
//   };

//   // Return the object as JSON
//   res.json(userObject);
// });

// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });


const express = require('express');
const app = express();
const port = 5000;

// Define an endpoint that takes two query parameters
app.get('/api/info', (req, res) => {
  // const slackName = 'Ese';
  // const {track} = req.query
   const { slackName, track } = req.query;

  // Validate slackName and track parameters (you can add more validation as needed)
  if (!track) {
    return res.status(400).json({ error: 'Both slackName and track are required.' });
  }

  // Get the current day of the week and current UTC time
  const currentDayOfWeek = new Date().toLocaleString('en-US', { weekday: 'long' });
  const currentUTCTime = new Date().toUTCString();

  // Construct GitHub URLs for the file being run and source code
  const githubFileURL = 'https://github.com/your-username/your-repo/blob/main/your-file.js'; 
  const githubSourceCodeURL = 'https://github.com/your-username/your-repo'; 

  // Prepare the JSON response
  const responseData = {
    slackName,
    currentDayOfWeek,
    currentUTCTime,
    track,
    githubFileURL,
    githubSourceCodeURL,
    status_code: 200,
  };

  // Send the JSON response
  res.json(responseData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
