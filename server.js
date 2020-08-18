const express = require('express');

const app = express();

app.use(express.static('./dist/angular8-jwt-auth'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/angular8-jwt-auth/'}),
);

app.listen(process.env.PORT || 8080);
