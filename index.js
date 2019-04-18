const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log('Server is listening on port: ' + port);
});