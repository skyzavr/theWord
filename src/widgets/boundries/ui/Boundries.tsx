import { Data } from '@app/params';

import { WordArea } from '@widgets/wordArea';
import { ToggleTextArea } from '@widgets/toggleTextArea';
import Spin from '@shared/ui/spin/Spin';
import SadFace from './assets/sadFace';
import { Face } from './assets/Face';

import classes from './boundries.module.css';

type Props = {
  isError: boolean;
  isLoading: boolean;
  word: string;
  data: Data[];
};

export const Boundries = ({ isError, isLoading, word, data }: Props) => {
  if (!word)
    return (
      <div className={classes.msg}>
        <Face />
        It's empty here... Try to type something
      </div>
    );
  if (isLoading)
    return (
      <div className={classes.wrapper}>
        <Spin />
      </div>
    );
  if (isError || !data?.length)
    return (
      <div className={classes.msg}>
        <SadFace />
        <pre>
          Sorry mate, we couldn't find definitions for the word
          <span className={classes.word}> {word}</span> you were looking for :(
        </pre>
      </div>
    );

  return (
    <>
      <WordArea word={word} params={data} />
      {data.map((el) =>
        el.meanings.map((item, ind) => (
          <ToggleTextArea
            partOfSpeech={item.partOfSpeech}
            definitions={item.definitions}
            synonyms={item.synonyms}
            isOpen={ind === 0 ? true : false}
            key={ind}
          />
        ))
      )}
    </>
  );
};
