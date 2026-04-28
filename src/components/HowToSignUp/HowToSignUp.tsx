'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './HowToSignUp.module.css';
import { useModal } from '@/context/ModalContext';

const STEPS = [
  {
    title: 'Download the Timon App',
    body:  'Get the Timon app and create your account in minutes.',
    img:   '/images/step-1-phone.png',
  },
  {
    title: 'Verify your identity.',
    body:  "A quick ID check and a selfie. Takes less than two minutes and you're through.",
    img:   '/images/step-2-phone.png',
  },
  {
    title: 'Fund and get your card.',
    body:  'Top up and choose between a physical or virtual card. Both ready to spend.',
    img:   '/images/step-3-phone.png',
  },
];

const INTERVAL = 3000; // ms between auto-advances

export default function HowToSignUp() {
  const { openModal } = useModal();
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* Start / restart the auto-advance timer */
  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % STEPS.length);
    }, INTERVAL);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  /* Manual advance – resets timer so it doesn't jump twice */
  const goTo = (i: number) => {
    setActive(i);
    startTimer();
  };

  /* Drag: swipe left = next, swipe right = prev */
  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -50)      goTo((active + 1) % STEPS.length);
    else if (info.offset.x > 50)  goTo((active - 1 + STEPS.length) % STEPS.length);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* ── Left: phone ──────────────────── */}
        <div className={styles.phoneCol}>
          <motion.div
            className={styles.phoneFrame}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            style={{ cursor: 'grab' }}
            whileDrag={{ cursor: 'grabbing' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0  }}
                exit={{    opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className={styles.phoneImgWrap}
              >
                <Image
                  src={STEPS[active].img}
                  alt={STEPS[active].title}
                  width={358}
                  height={699}
                  className={styles.phoneImg}
                  priority={active === 0}
                  sizes="358px"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ── Right: steps ─────────────────── */}
        <div className={styles.stepsCol}>
          <h2 className={styles.title}>Up and running in minutes.</h2>

          <div className={styles.stepList}>
            {STEPS.map((step, i) => (
              <div key={i} className={styles.stepGroup}>
                <button
                  className={`${styles.step} ${active === i ? styles.stepActive : ''}`}
                  onClick={() => goTo(i)}
                >
                  <p className={`${styles.stepTitle} ${active === i ? styles.stepTitleActive : ''}`}>
                    {step.title}
                  </p>
                  <p className={`${styles.stepBody} ${active === i ? styles.stepBodyActive : ''}`}>
                    {step.body}
                  </p>
                </button>

                {i < STEPS.length - 1 && (
                  <div className={styles.connector}>
                    <div className={styles.connectorLine} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Progress dots */}
          <div className={styles.dots} aria-label="Step progress">
            {STEPS.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${active === i ? styles.dotActive : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to step ${i + 1}`}
              />
            ))}
          </div>

          <button onClick={openModal} className={styles.cta}>
            Get Timon Now
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <path d="M1 5h12M9 1l4 4-4 4" stroke="#fff" strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
