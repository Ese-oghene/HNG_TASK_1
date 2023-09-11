const express = require('express');
const app = express();
const port = 5000;

// Define an endpoint that takes two query parameters
app.get('/api/', (req, res) => {
  
   const { slackName, track } = req.query;

  // Validate slackName and track parameters (you can add more validation as needed)
  if (!track) {
    return res.status(400).json({ error: 'Both slackName and track are required.' });
  }

  // Get the current day of the week and current UTC time
  const currentDayOfWeek = new Date().toLocaleString('en-US', { weekday: 'long' });
  const currentUTCTime = new Date().toUTCString();

  // Construct GitHub URLs for the file being run and source code
  const githubFileURL = 'https://github.com/Ese-oghene/HNG_TASK_1/blob/main/task.js'; 
  const githubSourceCodeURL = 'https://github.com/Ese-oghene/HNG_TASK_1'; 

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
