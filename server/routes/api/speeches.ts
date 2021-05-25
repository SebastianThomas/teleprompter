import express from 'express';
import { Speech } from '../../models/Speech';

const router = express.Router();

/**
 * @route   GET api/speeches/
 * @desc    Get all speeches
 * @access  Public
 */
router.get('/', async (req, res) => {
  console.log(`GET /api/speeches/`);

  const speeches: Speech[] = await Speech.getSpeechesFromFile();

  res.status(200).json({
    msg: `GET /api/speeches/`,
    speeches,
  });
});

/**
 * @route   GET api/speeches/:id
 * @desc    Get one speech
 * @access  Public
 */
router.get('/:id', (req, res) => {
  console.log(`GET /api/speeches/${req.params.id}`);

  const speech: Speech | undefined = Speech.getSingleSpeech(req.params.id);

  res.status(200).json({
    msg: `GET /api/speeches/`,
    speech,
    success: !(typeof speech == 'undefined'),
  });
});

/**
 * @route   POST api/speeches/
 * @desc    Post a new speech
 * @access  Public
 */
router.post('/', (req, res) => {
  const newSpeech: Speech = new Speech(req.body.title, req.body.text);

  Speech.addSpeech(newSpeech);

  return res.status(200).json({
    speech: newSpeech,
    msg: 'Created',
    success: true,
  });
});

export default router;
