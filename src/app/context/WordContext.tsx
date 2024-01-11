import { createContext, useState, ReactNode, FC } from 'react';

export type WordContextType = {
  word: string;
  setWord: (word: string) => void;
};

type Params = {
  children: ReactNode;
  init: string;
};

export const WordContext = createContext<WordContextType | null>(null);

const WordContextProvider: FC<Params> = ({ children, init }) => {
  const [word, setWord] = useState(init);
  document.title = word;
  return (
    <WordContext.Provider value={{ word, setWord }}>
      {children}
    </WordContext.Provider>
  );
};
export default WordContextProvider;
