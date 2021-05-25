import fs from 'fs';
import { v4 as uuidV4 } from 'uuid';

export const filePath: string = './server/speeches/speeches.json';

export class Speech {
  title: string;
  text: string;
  _id: string;

  constructor(
    title: string = 'Default',
    text: string = 'None',
    _id: string = uuidV4()
  ) {
    this.title = title;
    this.text = text;
    this._id = _id;
  }

  static from(json: any) {
    return Object.assign(new Speech(), json);
  }

  static saveSpeechesToFile(speeches: Speech[]) {
    fs.writeFile(filePath, JSON.stringify(speeches), () => {
      console.log('Written to file');
    });
  }

  static getSpeechesFromFile(): Promise<Speech[]> {
    const promise: Promise<Speech[]> = new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return reject(err);
        const d = JSON.parse(data);

        const speeches: Speech[] = d.map((s: any) => Speech.from(s));

        resolve(speeches);
      });
    });

    return promise;
  }
}
