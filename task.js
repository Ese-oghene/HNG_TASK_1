const express = require('express');
const app = express();
const port = 5000;

// Define an endpoint that takes two query parameters
app.get('/api/', (req, res) => {
  
   const { slack_name, track } = req.query;

  // Validate slackName and track parameters (you can add more validation as needed)
  if (!track) {
    return res.status(400).json({ error: 'Both slackName and track are required.' });
  }

  // Get the current day of the week and current UTC time
  const current_day = new Date().toLocaleString('en-US', { weekday: 'long' });
  const utc_time = new Date().toISOString();

  // Construct GitHub URLs for the file being run and source code
  const github_file_url = 'https://github.com/Ese-oghene/HNG_TASK_1/blob/main/task.js'; 
  const  github_repo_url = 'https://github.com/Ese-oghene/HNG_TASK_1'; 

  // Prepare the JSON response
  const responseData = {
    slack_name,
    current_day,
    utc_time,
    track,
    github_file_url,
    github_repo_url,
    status_code: 200,
  };

  // Send the JSON response
  res.json(responseData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
