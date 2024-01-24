/* eslint-disable react/prop-types */
import {useInView, motion} from 'framer-motion';
import {useRef} from 'react';
import {fadeIn} from '../../../VariantAnimations';

function FadeIn({children, direction = 'y', from, delay = 0}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  return (
    <motion.div
      ref={ref}
      variants={fadeIn(direction, from)}
      animate={isInView ? 'open' : 'closed'}
      transition={{duration: 3, bounce: 0.25, type: 'spring', delay: delay}}>
      {children}
    </motion.div>
  );
}

export default FadeIn;
