/* eslint-disable react/prop-types */
/* eslint-disable no-empty-pattern */
import {Fragment, useEffect, useState} from 'react';

import style from './textAnimation.module.css';

function TextAnimation({text}) {
  const [letters, setLetters] = useState([]);
  const [indexText, setIndexText] = useState(0);

  useEffect(() => {
    setLetters(text[indexText].split(''));

    setLetters(fillUpLetters(checkLargestWord(text), text[indexText]));
  }, [setLetters, text, indexText]);

  useEffect(() => {
    const indexIncrease = setInterval(() => {
      if (indexText === text.length - 1) {
        setIndexText(0);
      } else {
        setIndexText((prev) => (prev += 1));
      }
    }, 3000);

    return () => clearInterval(indexIncrease);
  }, [indexText, text]);

  const checkLargestWord = (words) => {
    let currentLength = 0;
    let previousLength = 0;

    words.map((word) => {
      if (typeof word === 'string') {
        if (word.length > previousLength) {
          currentLength = word.length;
          previousLength = currentLength;
        }
      }
    });

    return currentLength;
  };

  const fillUpLetters = (largetsLength, word) => {
    let result = [];
    var letter = word.split('');

    if (word.length < largetsLength) {
      for (let index = 0; index < largetsLength; index++) {
        if (letter[index]) {
          result.push(letter[index]);
        } else {
          result.push(' ');
        }
      }
    } else {
      for (let index = 0; index < largetsLength; index++) {
        result.push(letter[index]);
      }
    }

    return result;
  };

  return (
    <div className={`${style['text-container']}`}>
      {letters.length !== 0
        ? letters.map((letter, index) => {
            return (
              <Fragment key={index}>
                <LetterAnimation delay={index} letter={letter} />
              </Fragment>
            );
          })
        : 'nothing'}
    </div>
  );
}

export default TextAnimation;

import {motion} from 'framer-motion';

const LetterAnimation = ({letter, delay}) => {
  return (
    <p className={`${style['text-letter-container']}`}>
      <motion.span
        animate={{
          y: [100, 100, 0, 0, 0, -100, -100],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: `0.${delay}`,
          repeatDelay: 1,
        }}
        className={`${style['letter']}`}>
        {letter}
      </motion.span>
    </p>
  );
};
