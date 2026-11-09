'use client';

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type UseScrollOptions,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type RevealElement = 'div' | 'span';

export default function ScrollReveal({
  children,
  className,
  label,
  role,
  ariaHidden,
  as = 'span',
  offset,
}: {
  children: React.ReactNode;
  className: string;
  label?: string;
  role?: React.AriaRole;
  ariaHidden?: boolean;
  as?: RevealElement;
  offset?: UseScrollOptions['offset'];
}) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: as === 'div' ? divRef : spanRef,
    offset: offset ?? ['start 90%', 'start 48%'],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.06, 1]);

  const revealProps = {
    className: `scroll-reveal${as === 'div' ? ' scroll-reveal-block' : ''} ${className}`,
    'aria-label': label,
    'aria-hidden': ariaHidden,
    role,
    style: { opacity: shouldReduceMotion ? 1 : opacity },
  };

  if (as === 'div') {
    return (
      <motion.div ref={divRef} {...revealProps}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.span
      ref={spanRef}
      {...revealProps}
    >
      {children}
    </motion.span>
  );
}

export function DoubleHeightContent({
  children,
  className,
  contentClassName,
}: {
  children: React.ReactNode;
  className: string;
  contentClassName: string;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | null>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const updateHeight = () => {
      setContentHeight(content.getBoundingClientRect().height);
    };
    const observer = new ResizeObserver(updateHeight);

    observer.observe(content);
    updateHeight();

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`double-height-content ${className}`}
      style={
        contentHeight === null
          ? undefined
          : { minHeight: `${contentHeight * 2}px` }
      }
    >
      <div ref={contentRef} className={contentClassName}>
        {children}
      </div>
    </div>
  );
}
