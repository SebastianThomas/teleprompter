import fs from 'fs';

export const filePath: string = '../speeches/speeches.json';

export class Speech {
  title: string;
  text: string;

  constructor(title: string, text: string) {
    this.title = title;
    this.text = text;
  }

  static saveSpeechesToFile(speeches: Speech[]) {
    fs.writeFile(filePath, JSON.stringify(speeches), () => {
      console.log('Written to file');
    });
  }

  static getSpeechesFromFile(): Promise<Speech[]> {
    const promise: Promise<Speech[]> = new Promise((resolve, reject) => {
      fs.readFile(filePath, (err, data) => {
        if (err) reject(err);
        const d = data.toJSON();

        console.log(d);

        const speeches: Speech[] = [new Speech('Hi', 'Speech text')];

        // const speeches: Speech[] = d.map(s => {
        //   return new Speech(s.title, s.text);
        // });

        // return speeches;
        resolve(speeches);
      });
    });

    return promise;
  }
}
