import { useContext } from 'react';

import { WordContext, WordContextType } from '@app/context/WordContext';

import classes from './link.module.css';

const Link = ({ word }: { word: string }) => {
  const { setWord } = useContext(WordContext) as WordContextType;

  return (
    <span className={classes.link} onClick={() => setWord(word)}>
      {word}
    </span>
  );
};
export default Link;
