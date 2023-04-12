const express = require('express');
const app = express();

app.get('/api/v2/tags', (req, res) => {
  // Mocking the tag metadata as an array of objects
  const tagMetadata = [
    {
      "Name": "React5_temp001",
      "Description": "Reactor 5 - Cooling water temperature",
      "Units": "C",
      "Type": "ANALOG"
    },
    {
      "Name": "React5_press",
      "Description": "Reactor 5 - Top pressure",
      "Units": "",
      "Type": "ANALOG"
    },
    {
      "Name": "React5_phas",
      "Description": "Reactor 5 - Production Phases",
      "Units": "",
      "Type": "STRING"
    }
  ];

  // Send the tag metadata as JSON response
  res.json(tagMetadata);
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
