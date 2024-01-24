export const fadeIn = (direction, from) => {
  const variant = {
    open: {opacity: 1, [direction]: 0},
    closed: {opacity: 0, [direction]: from === 'min' ? '-100%' : '100%'},
  };

  return variant;
};
