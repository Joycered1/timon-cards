'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './TravellingNow.module.css';
import type { CSSProperties } from 'react';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type CardDecor = { style: CSSProperties; blue?: boolean };

const DECOR_CARDS: CardDecor[] = [
  { style: { top: '5%',  left: '-4%',  width: 140, height: 88,  transform: 'rotate(-8deg)',  opacity: 0.55 } },
  { style: { top: '12%', left: '-1%',  width: 130, height: 82,  transform: 'rotate(3deg)',   opacity: 0.35 } },
  { style: { top: '45%', left: '-3%',  width: 150, height: 94,  transform: 'rotate(-5deg)',  opacity: 0.45 } },
  { style: { top: '70%', left: '1%',   width: 160, height: 100, transform: 'rotate(6deg)',   opacity: 0.30 }, blue: true },
  { style: { top: '4%',  right: '-3%', width: 140, height: 88,  transform: 'rotate(10deg)',  opacity: 0.55 } },
  { style: { top: '10%', right: '2%',  width: 130, height: 82,  transform: 'rotate(-4deg)',  opacity: 0.35 } },
  { style: { top: '40%', right: '-4%', width: 150, height: 94,  transform: 'rotate(5deg)',   opacity: 0.45 } },
  { style: { top: '55%', right: '1%',  width: 130, height: 82,  transform: 'rotate(-8deg)',  opacity: 0.30 } },
  { style: { top: '75%', right: '-2%', width: 155, height: 98,  transform: 'rotate(4deg)',   opacity: 0.40 } },
  { style: { top: '82%', right: '2%',  width: 140, height: 88,  transform: 'rotate(-5deg)',  opacity: 0.25 } },
];

export default function TravellingNow() {
  return (
    <section className={styles.section}>
      <div className={styles.bgCards} aria-hidden="true">
        {DECOR_CARDS.map((c, i) => (
          <div
            key={i}
            className={`${styles.decorCard} ${c.blue ? styles.decorCardBlue : ''}`}
            style={c.style}
          />
        ))}
      </div>

      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          Travelling now?
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        >
          Pick up immediately at a Pharmatix store in the Lagos/Abuja airport.
        </motion.p>

        <motion.div
          className={styles.imageWrap}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, delay: 0.15, ease: EASE }}
        >
          <Image
            src="/pharmatix-card.png"
            alt="Pharmatix pharmacy store at the airport"
            width={760}
            height={507}
            className={styles.image}
            sizes="(max-width: 900px) 100vw, 760px"
          />

        </motion.div>
      </div>
    </section>
  );
}

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
        fill="currentColor"
      />
    </svg>
  );
}
