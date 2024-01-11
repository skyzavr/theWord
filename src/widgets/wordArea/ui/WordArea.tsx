import AudioButton from '@shared/ui/audioButton/AudioButton';

import classes from './wordArea.module.css';

type Props = { word: string; transcription: string; audioHref: string };

export const WordArea = ({ word, transcription, audioHref }: Props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.wordSection}>
        <div className={classes.word}>{word}</div>
        <div className={classes.transcription}>{transcription}</div>
      </div>
      <AudioButton src={audioHref} />
    </div>
  );
};
