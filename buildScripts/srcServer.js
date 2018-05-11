import express from 'express';
import path from 'path';
import open from 'open';

const port = 3000;
const app = express();

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (error) => {
  if(error) {
    console.log(error);
  } else {
    open('http://localhost:' + port);
  }
});
