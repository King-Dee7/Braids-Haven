import React from 'react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

const ScrollReveal = ({ children, delay = 0, y = 50, duration = 0.8, className = '' }) => {
  return (
    <MotionDiv
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionDiv>
  );
};

export default ScrollReveal;
