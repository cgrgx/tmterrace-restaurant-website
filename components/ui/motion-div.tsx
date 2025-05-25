'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface MotionDivProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'fadeInUp' | 'fadeInRight' | 'scale' | 'stagger';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

export function MotionDiv({
  children,
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.5,
  className,
  threshold = 0.2,
  once = true,
}: MotionDivProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const variants = {
    hidden: {
      opacity: 0,
      y: animation === 'fadeInUp' ? 30 : 0,
      x: animation === 'fadeInRight' ? 30 : 0,
      scale: animation === 'scale' ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
