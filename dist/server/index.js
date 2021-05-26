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
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const Speech_1 = require("./models/Speech");
const speeches_1 = __importDefault(require("./routes/api/speeches"));
let currentSpeeches;
const getSpeeches = () => __awaiter(void 0, void 0, void 0, function* () {
    currentSpeeches = yield Speech_1.Speech.getSpeechesFromFile();
    Speech_1.Speech.speeches = currentSpeeches;
});
getSpeeches();
setInterval(getSpeeches, 10 * 1000);
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.use((req, res, next) => {
    req.body = req.body || {};
    req.body.currentSpeeches = currentSpeeches;
    next();
});
// Use routes
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname + '/../' + 'client/html/index.html'));
});
app.get('/speeches/add', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'client/html/addSpeech.html'));
});
app.get('/speeches/:id', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', 'client/html/speech.html'));
});
app.use('/api/speeches', speeches_1.default);
const useVue = false;
// Handle production
if (process.env.NODE_ENV === 'production' && useVue) {
    app.use(express_1.default.static(__dirname + '/public/'));
    // Handle Single Page Application
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));
