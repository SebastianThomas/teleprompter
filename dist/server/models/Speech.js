"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Speech = exports.filePath = void 0;
const fs_1 = __importDefault(require("fs"));
const uuid_1 = require("uuid");
exports.filePath = './server/speeches/speeches.json';
class Speech {
    constructor(title = 'Default', text = 'None', _id = uuid_1.v4()) {
        this.title = title;
        this.text = text;
        this._id = _id;
    }
    static from(json) {
        return Object.assign(new Speech(), json);
    }
    static saveSpeechesToFile(speeches) {
        fs_1.default.writeFile(exports.filePath, JSON.stringify(speeches), () => {
            console.log('Written to file');
        });
    }
    static getSpeechesFromFile() {
        const promise = new Promise((resolve, reject) => {
            fs_1.default.readFile(exports.filePath, 'utf8', (err, data) => {
                if (err)
                    return reject(err);
                const d = JSON.parse(data);
                const speeches = d.map((s) => Speech.from(s));
                resolve(speeches);
            });
        });
        return promise;
    }
    static getSingleSpeech(id) {
        return Speech.speeches.find(speech => {
            return speech._id == id;
        });
    }
    static addSpeech(speech) {
        Speech.speeches.push(speech);
        Speech.saveSpeechesToFile(Speech.speeches);
    }
}
exports.Speech = Speech;
