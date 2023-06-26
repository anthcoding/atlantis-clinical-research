'use client';

import React, {useEffect, Fragment, useRef, PropsWithChildren} from 'react';
import {motion, useInView, useAnimation} from 'framer-motion';

interface Props extends PropsWithChildren {
  children: JSX.Element;
  delay: number;
  duration?: number;
  width?: 'fit-content' | '100%';
}

const Reveal = ({children, width, delay, duration}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{position: 'relative', width}}>
      <motion.div
        variants={{
          hidden: {opacity: 0, y: 45},
          visible: {opacity: 1, y: 0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration: duration || 0.5, delay: delay}}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
