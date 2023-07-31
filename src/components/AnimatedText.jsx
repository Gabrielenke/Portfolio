import { motion } from 'framer-motion';

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};
const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = '' }) => {
  return (
    <div className="mx-auto flex w-full items-center justify-center py-2 text-center font-Roboto   ">
      <motion.h1
        className={`inline-block w-full text-center  font-bold text-dark  dark:text-light ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        <motion.span className="inline-block" variants={singleWord}>
          {text}
        </motion.span>
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
