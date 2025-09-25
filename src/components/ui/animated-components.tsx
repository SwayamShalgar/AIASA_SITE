import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
}) => {
  const { ref, inView } = useScrollAnimation();

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggeredAnimationProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggeredAnimation: React.FC<StaggeredAnimationProps> = ({
  children,
  className = '',
  staggerDelay = 0.1,
}) => {
  const { ref, inView } = useScrollAnimation();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={container}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggeredItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
};

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  yOffset?: number;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  className = '',
  duration = 3,
  yOffset = 10,
}) => {
  return (
    <motion.div
      animate={{
        y: [-yOffset, yOffset, -yOffset],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ScaleOnHoverProps {
  children: React.ReactNode;
  className?: string;
  scale?: number;
}

export const ScaleOnHover: React.FC<ScaleOnHoverProps> = ({
  children,
  className = '',
  scale = 1.05,
}) => {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: scale * 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};