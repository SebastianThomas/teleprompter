"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Speech_1 = require("../../models/Speech");
const router = express_1.default.Router();
/**
 * @route   GET api/speeches/
 * @desc    Get all speeches
 * @access  Public
 */
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`GET /api/speeches/`);
    const speeches = yield Speech_1.Speech.getSpeechesFromFile();
    res.status(200).json({
        msg: `GET /api/speeches/`,
        speeches,
    });
}));
/**
 * @route   GET api/speeches/:id
 * @desc    Get one speech
 * @access  Public
 */
router.get('/:id', (req, res) => {
    console.log(`GET /api/speeches/${req.params.id}`);
    const speech = Speech_1.Speech.getSingleSpeech(req.params.id);
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
    const newSpeech = new Speech_1.Speech(req.body.title, req.body.text);
    Speech_1.Speech.addSpeech(newSpeech);
    return res.status(200).json({
        speech: newSpeech,
        msg: 'Created',
        success: true,
    });
});
exports.default = router;
