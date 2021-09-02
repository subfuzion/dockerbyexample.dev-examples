import express from 'express';
import morgan from 'morgan';

const app = express();
const port = process.env.PORT || 8080;

// add logging middleware
app.use(morgan('dev'));

// add middleware to reject requests for favicon.ico when testing from browser
app.use(function(req, res, next) {
  // if testing from a browers, ignore request for favicon.ico
  if (req.url === '/favicon.ico') {
    console.log('ignore requests for favicon.ico');
    res.status(204).end();
    return;
  }
  next();
});

// route handler for GET /
app.get('/', function(req, res) {
  const data = '<h1>hello world</h1>';
  res.send(data);
});

app.listen(port, () => {
  console.log(`server listening on :${port}`);
});
