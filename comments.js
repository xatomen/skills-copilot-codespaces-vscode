// Create a web server that listens on port 3000. When you visit the home page, the server should respond with "Hello, World!" When you visit localhost:3000/comments, the server should respond with an array of comments (as strings). The array should have at least 3 comments.

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/comments', (req, res) => {
  let comments = [
    'This is the first comment',
    'This is the second comment',
    'This is the third comment'
  ];
  res.send(comments);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});