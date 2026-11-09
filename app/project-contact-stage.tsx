'use client';

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef, type ReactNode } from 'react';

export const CONTACT_NAVIGATION_EVENT = 'portfolio:contact-navigation';

export function navigateToContact() {
  window.dispatchEvent(new Event(CONTACT_NAVIGATION_EVENT));
}

export default function ProjectContactStage({
  cards,
  contact,
}: {
  cards: ReactNode[];
  contact: ReactNode;
}) {
  const runwayRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: runwayRef,
    offset: ['start start', 'end end'],
  });
  const clientTwoY = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    ['100vh', '0vh', '0vh'],
  );
  const clientThreeY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.58, 0.72, 1],
    ['100vh', '100vh', '0vh', '0vh', '0vh'],
  );
  const contactY = useTransform(
    scrollYProgress,
    [0, 0.72, 1],
    ['100vh', '100vh', '0vh'],
  );

  useEffect(() => {
    const navigateToContact = () => {
      const contactElement = document.getElementById('contact');
      if (!contactElement) return;

      const runway = runwayRef.current;
      const runwayRect = runway?.getBoundingClientRect();
      const destination = runwayRect && !shouldReduceMotion
        ? window.scrollY +
          runwayRect.top +
          runwayRect.height -
          window.innerHeight
        : window.scrollY + contactElement.getBoundingClientRect().top;

      window.history.replaceState(null, '', '#contact');
      window.scrollTo({
        top: Math.max(0, destination),
        behavior: shouldReduceMotion ? 'auto' : 'smooth',
      });
    };

    window.addEventListener(CONTACT_NAVIGATION_EVENT, navigateToContact);
    return () =>
      window.removeEventListener(CONTACT_NAVIGATION_EVENT, navigateToContact);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div className="project-sequence-static">
        {cards.map((card, index) => (
          <div className="project-static-card" key={index}>
            {card}
          </div>
        ))}
        {contact}
      </div>
    );
  }

  return (
    <div className="project-scroll-runway" ref={runwayRef}>
      <div className="project-sequence-scene">
        <div className="project-stack">
          {cards.map((card, index) => (
            <motion.div
              className={`project-card-layer project-card-layer--${index + 1}`}
              key={index}
              style={{
                y: index === 0 ? 0 : index === 1 ? clientTwoY : clientThreeY,
                zIndex: index + 10,
              }}
            >
              {card}
            </motion.div>
          ))}
        </div>
        <motion.div
          className="contact-motion-layer"
          style={{ y: contactY }}
        >
          {contact}
        </motion.div>
      </div>
    </div>
  );
}
