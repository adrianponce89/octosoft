import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typist from 'react-typist';

const useStyles = makeStyles((theme) => ({
  tiContainer: {
    display: 'inline',
    position: 'relative',
  },
  elegantTypewriterTextWrap: {
    fontSize: 40,
  },
}));

export default ({ words }) => {
  const typistRef = useRef();
  const classes = useStyles();
  const handleTypingDone = () => {
    typistRef.current.setState({ isDone: false });
    typistRef.current.typeAllLines();
  };
  return (
    <span className={classes.tiContainer}>
      <span className={classes.elegantTypewriterTextWrap}>
        <Typist
          className={classes.elegantTypewriterTextWrap}
          onTypingDone={handleTypingDone}
          ref={typistRef}
        >
          {words.map((word) => (
            <span>
              <Typist.Delay ms={600} />
              <span>{word}</span>
              <Typist.Backspace count={word.length} delay={800} />
            </span>
          ))}
        </Typist>
      </span>
    </span>
  );
};
