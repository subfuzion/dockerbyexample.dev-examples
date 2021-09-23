import express from 'express';
import morgan from 'morgan';

const app = express();
const port = process.env.PORT || 8080;

// Add logging middleware (https://expressjs.com/en/resources/middleware/morgan.html).
app.use(morgan('short'));

// Add custom middleware to prevent 404 errors by rejecting requests for favicon.ico when testing from browser.
app.use(function(req, res, next) {
  // Ignore request for favicon.ico when testing from a browser.
  if (req.url === '/favicon.ico') {
    console.log('ignore requests for favicon.ico');
    // Return HTTP 204 successful request, no content.
    res.status(204).end();
    return;
  }
  next();
});

// Root route handler: GET /
app.get('/', function(req, res) {
  const data = '<h1>hello world</h1>';
  res.send(data);
});

const server = app.listen(port, () => {
  console.log(`server listening on :${port}`);
});

function handleSignal(signal) {
  console.log(`Received ${signal}, exiting.`)
  server.close(function () {
    process.exit(0);
  });
}
process.on('SIGINT', handleSignal);
process.on('SIGTERM', handleSignal);
