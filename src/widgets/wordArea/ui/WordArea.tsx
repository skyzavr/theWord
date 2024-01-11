import AudioButton from '@shared/ui/audioButton/AudioButton';

import { Data } from '@app/params';

import classes from './wordArea.module.css';

type Props = {
  word: string;
  params: Data[];
};

export const WordArea = ({ word, params }: Props) => {
  const { phonetics } = params[0];
  const audioInd = phonetics.findIndex((el) => el.audio !== '');

  return (
    <div className={classes.wrapper}>
      <div className={classes.wordSection}>
        <div className={classes.word}>{word}</div>
        <div className={classes.transcription}>
          {phonetics.map((el, ind) => (
            <div key={ind}>{el.text}</div>
          ))}
        </div>
      </div>
      {audioInd >= 0 && <AudioButton src={phonetics[audioInd].audio} />}
    </div>
  );
};
