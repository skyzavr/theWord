export const API = 'https://api.dictionaryapi.dev/api/v2/entries/en';
type Meaning = {
  synonyms: Array<string>;
  definitions: [];
  partOfSpeech: string;
};
type Phonetics = { text: string; audio: string };
export type Data = {
  word: string;
  phonetics: Array<Phonetics>;
  meanings: Array<Meaning>;
};
