# teleprompter

## Setup
Make sure there is a `speeches.json`-file in `server/speeches/` which contains at least an empty pair of `[]`-brackets. 

## Run
The command `npm run start` starts the compiled server on default port 5000. 

To change the port, try `PORT=XXXX npm run start` where XXXX is your port (that you must have access to. If you get the error `Error: listen EACCES: permission denied`, you are not allowed to access the port you want the app to listen to. 

If you want to run the server with hot reload and TS-support, try `npm run dev`. To build the development server, run `npm run build`. 

## Models
### `Speech.ts`
A `Speech` has a unique `_id`, a `title` and the main body, called `text`. The `text` will scroll while the `title` is fixed at the top of the page. 
