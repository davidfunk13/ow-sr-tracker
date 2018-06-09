const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("client/build"));

app.listen(PORT, err => {
  if (err) {
    throw err;
  }
  console.log(`OW SR Tracker backend listening on ${PORT}`);
});