import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <motion.p
      className="text-base md:text-lg text-white max-w-lg mx-auto"
      style={{ fontFamily: '"Roboto Mono", monospace' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      Let's turn your ideas into reality.
    </motion.p>
  );
};

export default CallToAction;
