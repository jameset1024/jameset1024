const express = require("express");
const RssParser = require("rss-parser");
const Skills = require("../src/skills");
const Blog = require("../src/blog");

const app = express();

// Displays all the languages that I use
app.get('/api/skills', ( req, res ) => {
  res.setHeader('Content-Type', 'image/svg+xml');

  const skills = Skills();
  return res.send(skills);
});

// Displays my latest blog post
app.get('/api/latest-blog', async (req, res) => {
    res.setHeader('Content-Type', 'image/svg+xml');

    const feed = await new RssParser({
        customFields: {
            item: ['thumbnail'],
        }
    }).parseURL("https://wp.erikjamesthomas.com/feed/");

    const blog = Blog(feed.items[0]);
    return res.send(blog);
});

// Redirects a link to the newest blog post
app.get('/api/blog-redirect', async (req, res) => {
    const feed = await new RssParser().parseURL("https://wp.erikjamesthomas.com/feed/");
    res.redirect(feed.items[0].link.replace('wp.', ''));
});

app.listen(3000, () => {
  console.log("Running on port 3000");
})

