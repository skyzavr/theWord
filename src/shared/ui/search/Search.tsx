import { useContext, useState } from 'react';

import { WordContext, WordContextType } from '@app/context/WordContext';

import classes from './search.module.css';

const Search = () => {
  const { word, setWord } = useContext(WordContext) as WordContextType;
  const [currentWord, setCurrentWord] = useState(word);

  const handleChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    if (e.key == 'Enter') setWord(value);
  };

  return (
    <input
      className={classes.search}
      type="search"
      placeholder="search for any word..."
      value={currentWord}
      onChange={(e) => setCurrentWord(e.target.value)}
      onKeyDown={(e) => handleChange(e)}
    />
  );
};
export default Search;
