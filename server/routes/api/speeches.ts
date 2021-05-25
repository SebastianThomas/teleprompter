import express from 'express';
import { Speech } from '../../models/Speech';

const router = express.Router();

/**
 * @route   GET api/speeches/
 * @desc    Get all speeches
 * @access  Public
 */
router.get('/', (req, res) => {
  console.log(`GET /api/speeches/`);

  res.status(200).json({
    msg: `GET /api/speeches/`,
  });
});

/**
 * @route   POST api/speeches/
 * @desc    Post a new speech
 * @access  Public
 */
router.post('/', (req, res) => {
  const newSpeech: Speech = new Speech(req.body.title, req.body.text);

  console.log(newSpeech);

  res.status(300).json({
    speech: newSpeech,
    msg: 'Created',
    success: true,
  });
});

export default router;
