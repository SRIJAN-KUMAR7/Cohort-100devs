const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const titles = ["Read Book", "Walk Dog", "Write Code", "Eat Food", "Watch Movie"];
const descs = ["for 30 mins", "in the evening", "until 12 AM", "with friends", "before dinner"];

app.get('/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  let id = 1;

  const interval = setInterval(() => {
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    const randomDesc = descs[Math.floor(Math.random() * descs.length)];

    const todo = {
      id: id++,
      title: randomTitle,
      description: randomDesc
    };

    res.write(`data: ${JSON.stringify(todo)}\n\n`);
  }, 5000); // every 5 seconds

  // Cleanup if client closes connection
  req.on('close', () => {
    clearInterval(interval);
    res.end();
  });
});

app.listen(port, () => {
  console.log(` Server running at http://localhost:${port}`);
});
