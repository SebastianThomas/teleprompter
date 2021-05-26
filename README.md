# teleprompter

## Setup
Make sure there is a `speeches.json`-file in `server/speeches/` which contains at least an empty pair of `[]`-brackets. 

## Models
### `Speech.ts`
A `Speech` has a unique `_id`, a `title` and the main body, called `text`. The `text` will scroll while the `title` is fixed at the top of the page. 
