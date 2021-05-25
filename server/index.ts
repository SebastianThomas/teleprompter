import express from 'express';
import cors from 'cors';
import path from 'path';

import { Speech } from './models/Speech';

import speeches from './routes/api/speeches';

let currentSpeeches: Speech[];

const getSpeeches = async () => {
  currentSpeeches = await Speech.getSpeechesFromFile();
  Speech.speeches = currentSpeeches;
};

getSpeeches();
setInterval(getSpeeches, 10 * 1000);

const app = express();

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  req.body = req.body || {};
  req.body.currentSpeeches = currentSpeeches;
  next();
});

// Use routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../' + 'client/html/index.html'));
});
app.get('/speeches/add', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client/html/addSpeech.html'));
});
app.get('/speeches/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client/html/speech.html'));
});
app.use('/api/speeches', speeches);

const useVue = false;
// Handle production
if (process.env.NODE_ENV === 'production' && useVue) {
  app.use(express.static(__dirname + '/public/'));

  // Handle Single Page Application
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));
