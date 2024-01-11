import { useState } from 'react';

import Link from '@shared/ui/linkWord/Link';

import classes from './toggleTextArea.module.css';

type defs = {
  definition: string;
  synonyms: Array<string>;
  antonyms: Array<string>;
  example?: string;
};

type Props = {
  partOfSpeech: string;
  definitions: Array<defs>;
  synonyms: Array<string>;
  isOpen: boolean;
};

export const ToggleTextArea = (props: Props) => {
  const { partOfSpeech, definitions, synonyms, isOpen } = props;
  const [isareaOpened, setIsAreaOpened] = useState(isOpen);
  const partOfSpichFull = partOfSpeech[0].toUpperCase() + partOfSpeech.slice(1);

  const handleOpen = () => setIsAreaOpened((p) => !p);

  return (
    <div className={classes.wrapper}>
      <div className={classes.handleWrapper}>
        <div className={classes.partOfSpeech} onClick={handleOpen}>
          {partOfSpichFull}
        </div>
        <div className={classes.toggle}>
          <hr />
        </div>
      </div>
      {isareaOpened && (
        <>
          <div className={classes.text}>Meaning</div>
          <div className={classes.definitions}>
            {definitions.map((el, ind) => (
              <div className={classes.defItem} key={ind}>
                <div className={classes.def}> {el.definition}</div>
                {el.example && (
                  <div className={classes.defExample}>
                    &laquo;{el.example}&raquo;
                  </div>
                )}
              </div>
            ))}
          </div>
          {synonyms.length > 0 && (
            <div className={classes.synonyms}>
              <div className={classes.text}>Synonyms</div>
              <div className={classes.list}>
                {synonyms.map((el, ind) => (
                  <Link word={el} key={`${el}${ind}`} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
