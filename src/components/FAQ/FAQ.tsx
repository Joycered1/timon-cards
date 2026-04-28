'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './FAQ.module.css';

const FAQS = [
  {
    q: 'What cards does Timon offer?',
    a: 'Timon offers three cards: Voyager, Rove, and Ace. Available in physical and virtual, on Visa and Mastercard.',
  },
  {
    q: 'Are there spending limits on my card?',
    a: "Each card comes with its own limits. That's why we suggest getting a bundle. Own multiple cards, each with unique benefits, so you're never capped when it matters.",
  },
  {
    q: 'How do I unlock rewards and benefits?',
    a: 'Fund $100 or more to get a free eSIM. Keep spending to unlock more gifts and perks along the way.',
  },
  {
    q: 'Can I use my Timon card with Apple Pay and Google Pay?',
    a: 'Yes. Select Timon cards work seamlessly with Apple Pay and Google Pay for tap-to-pay anywhere.',
  },
  {
    q: 'What happens if my card is declined?',
    a: "With two networks, Visa and Mastercard, you always have a backup. If one doesn't work, the other will.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* ── Left – question list ─────────────── */}
        <div className={styles.left}>
          <h2 className={styles.heading}>Got questions for us?</h2>
          <ul className={styles.list}>
            {FAQS.map((faq, i) => (
              <li key={i}>
                <button
                  className={`${styles.item} ${active === i ? styles.itemActive : ''}`}
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                >
                  <span className={styles.qText}>{faq.q}</span>
                  {active === i && (
                    <span className={styles.arrow} aria-hidden="true">
                      <ArrowIcon />
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right – answer panel ─────────────── */}
        <div className={styles.right}>
          <div className={styles.answerBlock}>
            <p className={styles.answerLabel}>We have answers</p>
            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                className={styles.answerText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                {FAQS[active].a}
              </motion.p>
            </AnimatePresence>
          </div>

          <a href="#" className={styles.cta}>
            Get Timon Now
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <path d="M1 5h12M9 1l4 4-4 4" stroke="#fff" strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <span className={styles.star} aria-hidden="true">★</span>
        </div>

      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h12M10 4l6 6-6 6" stroke="white" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
