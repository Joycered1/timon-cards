'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import 'flag-icons/css/flag-icons.min.css';
import { useModal } from '@/context/ModalContext';

const COUNTRIES = [
  { name: 'United States',  code: 'us' },
  { name: 'Canada',         code: 'ca' },
  { name: 'China',          code: 'cn' },
  { name: 'Nigeria',        code: 'ng' },
  { name: 'South Africa',   code: 'za' },
  { name: 'Zambia',         code: 'zm' },
  { name: 'UAE',            code: 'ae' },
  { name: 'European Union', code: 'eu' },
  { name: 'United Kingdom', code: 'gb' },
  { name: 'Kenya',          code: 'ke' },
  { name: 'Benin',          code: 'bj' },
  { name: 'Cameroon',       code: 'cm' },
  { name: 'Ghana',          code: 'gh' },
  { name: 'Brazil',         code: 'br' },
  { name: 'Mali',           code: 'ml' },
  { name: 'Rwanda',         code: 'rw' },
  { name: 'Uganda',         code: 'ug' },
  { name: 'Burkina Faso',   code: 'bf' },
];

export default function Hero() {
  const { openModal } = useModal();
  return (
    <section className={styles.section}>
      {/* Brick background – exact Figma export, 1132×683, top-aligned */}
      <div className={styles.brickWrap} aria-hidden="true">
        <Image
          src="/images/hero-brick-bg.png"
          alt=""
          width={1132}
          height={683}
          className={styles.brickImg}
          priority
        />
      </div>

      <div className={styles.container}>
        {/* Headline */}
        <motion.div
          className={styles.headlines}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className={styles.h1}>PAYMENT DECLINED ON A TRIP?</h1>
          <h1 className={styles.h1Blue}>NOT ON OUR CARD!</h1>
        </motion.div>

        {/* Hero card */}
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.cardText}>
            <p className={styles.cardHeadline}>Trusted by 50,000+ travellers.</p>
            <p className={styles.cardSubline}>No payment stress, just rewards.</p>
            <div className={styles.buttons}>
              <button onClick={openModal} className={styles.btn}>
                <GooglePlayIcon /> Google Play
              </button>
              <button onClick={openModal} className={styles.btn}>
                <AppStoreIcon /> App Store
              </button>
            </div>
          </div>
          <div className={styles.mockupWrap}>
            <Image
              src="/images/hero-mockup.png"
              alt="Timon app on iPhone"
              fill
              className={styles.mockup}
              priority
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>
        </motion.div>
      </div>

      {/* Countries marquee */}
      <div className={styles.marqueeOuter} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[...COUNTRIES, ...COUNTRIES].map((c, i) => (
            <span key={i} className={styles.badge}>
              <span className={`fi fi-${c.code} ${styles.flagIcon}`} role="img" aria-label={c.name} />
              {c.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function GooglePlayIcon() {
  return (
    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" aria-hidden="true">
      <path d="M1 1.5L11.5 11L1 20.5V1.5Z" fill="white" stroke="white" strokeWidth="0.5"/>
      <path d="M1 1.5L14.5 8L11.5 11L1 1.5Z" fill="#A8D8A8"/>
      <path d="M1 20.5L11.5 11L14.5 14L1 20.5Z" fill="#F4A460"/>
      <path d="M14.5 8L18.5 10.2C19.2 10.6 19.2 11.4 18.5 11.8L14.5 14L11.5 11L14.5 8Z" fill="#FF6B6B"/>
    </svg>
  );
}

function AppStoreIcon() {
  return (
    <svg width="22" height="26" viewBox="0 0 22 26" fill="none" aria-hidden="true">
      <path d="M18.5 13.8C18.5 10.8 20.5 9.3 20.6 9.2C19.4 7.4 17.5 7.2 16.8 7.1C15.2 6.9 13.7 8 12.9 8C12.1 8 10.8 7.1 9.5 7.1C7.7 7.2 6 8.1 5.1 9.7C3.2 12.9 4.6 17.7 6.5 20.4C7.4 21.7 8.5 23.2 9.9 23.1C11.3 23.1 11.8 22.2 13.4 22.2C15 22.2 15.4 23.1 16.9 23.1C18.4 23.1 19.3 21.8 20.2 20.5C21.2 19 21.6 17.6 21.6 17.5C21.5 17.5 18.5 16.3 18.5 13.8Z" fill="white"/>
      <path d="M15.7 5.2C16.4 4.3 16.9 3 16.7 1.8C15.6 1.8 14.3 2.5 13.5 3.4C12.8 4.2 12.2 5.6 12.4 6.8C13.6 6.8 14.9 6.1 15.7 5.2Z" fill="white"/>
    </svg>
  );
}
