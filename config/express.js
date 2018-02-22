import express from 'express';
import routes from '../server/routes/index.route';
// var  express =  require('express')
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
  });
app.use('/api',routes);

export default app;
