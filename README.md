# teleprompter

## Setup
Make sure there is a `speeches.json`-file in `server/speeches/` which contains at least an empty pair of `[]`-brackets. 

Run `npm i` or `npm install` to install all dependencies.

## Run
The command `npm run start` starts the compiled server on default port 5000. 

To change the port, try `PORT=XXXX npm run start` where XXXX is your port (that you must have access to. If you get the error `Error: listen EACCES: permission denied`, you are not allowed to access the port you want the app to listen to. 

If you want to run the server with hot reload and TS-support, try `npm run dev`. To build the development server, run `npm run build`. 

## Models
### `Speech.ts`
A `Speech` has a unique `_id`, a `title` and the main body, called `text`. The `text` will scroll while the `title` is fixed at the top of the page. 

## Contribute
If you want to contribute, please follow these steps: 
1. Write the code (as you should expect) in a separate branch. Please prefer TypeScript over plain JavaScript and use its possibilities as often as possible! 
2. Make sure your code works as expected (test all functionality).
3. Run the `npm run build`-command, which clears your `speeches.json` and converts your code from TS to JS.  
4. When you are ready, open a new Pull Request (PR), in which you explain what you've done, and link a related issue if you fixed one. Probably, you should add a few lines to this README.md if you added a new feature. 
5. Wait for the PR to be merged; thank you for your contribution!
