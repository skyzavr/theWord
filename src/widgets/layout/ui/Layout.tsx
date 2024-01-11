import { useContext } from 'react';

import { WordContext, WordContextType } from '@app/context/WordContext';
import { useFetch } from '@shared/hooks/useFetch';
import { API } from '@app/params';

import { Header } from '@widgets/header';
import { Boundries } from '@widgets/boundries';

import Search from '@shared/ui/search/Search';

import classes from './layout.module.css';

export const Layout = () => {
  const { word } = useContext(WordContext) as WordContextType;
  const { data, isError, isLoading } = useFetch(`${API}/${word}`);
  return (
    <div className={classes.wrapper}>
      <Header />
      <main>
        <Search />
        <Boundries
          isError={isError}
          isLoading={isLoading}
          word={word}
          data={data}
        />
      </main>
    </div>
  );
};
