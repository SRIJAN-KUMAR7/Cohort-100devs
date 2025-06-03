const express = require("express");
const app = express();
const port = 3000;

app.get('/conversations', function(req, res) {
    res.send('<b>Hello World!</b>');
});

app.listen(port, function() {
    console.log(`App is running on port ${port}`);
});

