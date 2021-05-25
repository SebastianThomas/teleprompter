import express from 'express';
import cors from 'cors';

import { Speech } from './models/Speech';

import speeches from './routes/api/speeches';

let currentSpeeches: Speech[];

(async () => {
  currentSpeeches = await Speech.getSpeechesFromFile();
  console.log(currentSpeeches);
})();

console.log('Got speeches');

const app = express();

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  req.body = req.body || {};
  req.body.currentSpeeches = currentSpeeches;
  next();
});

// Use routes
app.use('/api/speeches', speeches);

// Handle production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public/'));

  // Handle Single Page Application
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));
