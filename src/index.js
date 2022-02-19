const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, Im Express Js!');
});

app.listen(port, () => {
    console.log(
        `
        ==========================================================================
        Ctrl + click this link to open your website... http://localhost:${port}
        ==========================================================================`,
    );
});
