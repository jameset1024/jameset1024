const express = require("express");
const Skills = require("../src/skills");

const app = express();


app.get('/api/skills', ( req, res ) => {
  res.setHeader('Content-Type', 'image/svg+xml');

  const skills = Skills();
  return res.send(skills);
});

app.listen(3000, () => {
  console.log("Running on port 3000");
})

