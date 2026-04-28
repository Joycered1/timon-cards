'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './WhyTimon.module.css';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, delay: i * 0.12, ease: EASE },
  }),
};

const hoverProps = {
  whileHover: { scale: 1.018, zIndex: 2 },
  transition: { type: 'spring' as const, stiffness: 220, damping: 28 },
};

export default function WhyTimon() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          Why smart travellers and spenders need Timon
        </motion.h2>

        <div className={styles.bento}>

          {/* ── Row 1 ── */}
          <div className={styles.row1}>

            {/* Card 1 – Black / Gifts */}
            <motion.div
              className={`${styles.card} ${styles.cardBlack}`}
              custom={0} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-60px' }} variants={fadeUp}
              {...hoverProps}
            >
              <div className={styles.content}>
                <IconBubble variant="gradient"><WifiIcon /></IconBubble>
                <h3 className={`${styles.cardTitle} ${styles.onDark}`}>Your card comes with gifts.</h3>
                <p className={`${styles.cardBody} ${styles.onDarkMuted}`}>
                  Fund $100, get a free eSIM. Spend more, unlock more gifts.
                </p>
              </div>
              <div className={styles.giftsImgWrap}>
                <Image src="/images/why-gifts.png" alt="Timon eSIM gift on iPhone"
                  width={484} height={860} className={styles.giftsImg} sizes="50vw" />
              </div>
            </motion.div>

            {/* Card 2 – White / Rates */}
            <motion.div
              className={`${styles.card} ${styles.cardWhite}`}
              custom={1} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-60px' }} variants={fadeUp}
              {...hoverProps}
            >
              <div className={styles.content}>
                <IconBubble variant="pink"><GlobeIcon /></IconBubble>
                <h3 className={styles.cardTitle}>Your money will always work.</h3>
                <p className={styles.cardBody}>
                For everywhere VISA and Mastercard is accepted, you'd never be stranded or embarrassed because your card will work.
                </p>
              </div>
              <div className={styles.globalImgWrap}>
                <Image src="/global.png" alt="Globe, card and payment terminal"
                  width={500} height={500} className={styles.globalImg} sizes="30vw" />
              </div>
            </motion.div>

          </div>

          {/* ── Row 2 ── */}
          <div className={styles.row2}>

            {/* Card 3 – White / Fund */}
            <motion.div
              className={`${styles.card} ${styles.cardWhite}`}
              custom={2} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-60px' }} variants={fadeUp}
              {...hoverProps}
            >
              <div className={styles.content}>
                <IconBubble variant="pink"><CardIcon /></IconBubble>
                <h3 className={styles.cardTitle}>Fund your way.</h3>
                <p className={styles.cardBody}>
                  Top up with any currency or stable coins. However you hold your money, we accept it.
                </p>
              </div>
              <div className={styles.fundImgWrap}>
                <Image src="/fund.png" alt="Cards with orbit and coins"
                  width={500} height={500} className={styles.fundImg} sizes="30vw" />
              </div>
            </motion.div>

            {/* Card 4 – Dark Blue / Apple Pay */}
            <motion.div
              className={`${styles.card} ${styles.cardBlue}`}
              custom={3} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-60px' }} variants={fadeUp}
              {...hoverProps}
            >
              <div className={styles.payCardsWrap}>
                <Image src="/images/why-cards.png" alt="Timon physical cards"
                  width={343} height={345} className={styles.payCards} sizes="40vw" />
              </div>
              <div className={styles.content}>
                <IconBubble variant="gradient"><IpadIcon /></IconBubble>
                <h3 className={`${styles.cardTitle} ${styles.onDark}`}>
                  Works with Apple Pay and Google Pay.
                </h3>
                <p className={`${styles.cardBody} ${styles.onDarkMuted}`}>
                  Add your Timon card to Apple Pay or Google Pay and start spending before your physical card even arrives.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

function IconBubble({ variant, children }: { variant: 'gradient' | 'pink'; children: React.ReactNode }) {
  return (
    <div className={`${styles.iconBubble} ${variant === 'gradient' ? styles.iconGradient : styles.iconPink}`}>
      {children}
    </div>
  );
}

function WifiIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M26.6603 13.563C20.7728 7.67545 11.2272 7.67545 5.33967 13.563C4.80444 14.0982 3.93665 14.0982 3.40142 13.563C2.86619 13.0278 2.86619 12.16 3.40142 11.6248C10.3594 4.66675 21.6406 4.66675 28.5986 11.6248C29.1338 12.16 29.1338 13.0278 28.5986 13.563C28.0633 14.0982 27.1956 14.0982 26.6603 13.563ZM22.7838 17.4395C19.0372 13.6929 12.9628 13.6929 9.21615 17.4395C8.68092 17.9747 7.81314 17.9747 7.27791 17.4395C6.74268 16.9043 6.74268 16.0365 7.27791 15.5012C12.095 10.6842 19.905 10.6842 24.7221 15.5012C25.2573 16.0365 25.2573 16.9043 24.7221 17.4395C24.1869 17.9747 23.3191 17.9747 22.7838 17.4395ZM18.9074 21.316C17.3017 19.7103 14.6983 19.7103 13.0926 21.316C12.5574 21.8512 11.6896 21.8512 11.1544 21.316C10.6192 20.7808 10.6192 19.913 11.1544 19.3777C13.8305 16.7016 18.1695 16.7016 20.8456 19.3777C21.3808 19.913 21.3808 20.7808 20.8456 21.316C20.3104 21.8512 19.4426 21.8512 18.9074 21.316ZM14.6295 24.2234C14.6295 23.4664 15.2431 22.8528 16 22.8528H16.0137C16.7706 22.8528 17.3843 23.4664 17.3843 24.2234C17.3843 24.9803 16.7706 25.5939 16.0137 25.5939H16C15.2431 25.5939 14.6295 24.9803 14.6295 24.2234Z" fill="white"/>
    </svg>
  );
}
function GlobeIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M16 29C23.1797 29 29 23.1797 29 16C29 8.8203 23.1797 3 16 3C8.8203 3 3 8.8203 3 16C3 23.1797 8.8203 29 16 29ZM6.78915 12.7945C7.39631 11.0496 8.48531 9.53029 9.89684 8.3959C10.3322 9.0607 11.0836 9.49985 11.9375 9.49985C13.2837 9.49985 14.375 10.5912 14.375 11.9374V12.7499C14.375 14.5448 15.8301 15.9999 17.625 15.9999C19.42 15.9999 20.875 14.5448 20.875 12.7499C20.875 11.2222 21.9291 9.94066 23.3496 9.59293C24.8445 11.3064 25.75 13.5474 25.75 15.9999C25.75 16.5536 25.7039 17.0966 25.6152 17.6251H24.125C22.33 17.6251 20.875 19.0802 20.875 20.8751V24.4455C19.4409 25.2751 17.7757 25.7499 15.9999 25.7499V22.5C15.9999 20.7051 14.5448 19.25 12.7499 19.25C10.9549 19.25 9.49986 17.7949 9.49986 16C9.49986 14.3888 8.32742 13.0514 6.78915 12.7945Z" fill="white"/>
    </svg>
  );
}
function CardIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M6.25 6.25C4.45507 6.25 3 7.70508 3 9.5V11.125H29V9.5C29 7.70507 27.5449 6.25 25.75 6.25H6.25Z" fill="white"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M29 14.375H3V22.5C3 24.2949 4.45507 25.75 6.25 25.75H25.75C27.5449 25.75 29 24.2949 29 22.5V14.375ZM6.25 20.875C6.25 19.9775 6.97754 19.25 7.875 19.25H9.5C10.3975 19.25 11.125 19.9775 11.125 20.875C11.125 21.7725 10.3975 22.5 9.5 22.5H7.875C6.97754 22.5 6.25 21.7725 6.25 20.875ZM14.375 19.25C13.4775 19.25 12.75 19.9775 12.75 20.875C12.75 21.7725 13.4775 22.5 14.375 22.5H16C16.8975 22.5 17.625 21.7725 17.625 20.875C17.625 19.9775 16.8975 19.25 16 19.25H14.375Z" fill="white"/>
    </svg>
  );
}
function IpadIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.5 3C7.70507 3 6.25 4.45507 6.25 6.25V25.75C6.25 27.5449 7.70508 29 9.5 29H22.5C24.2949 29 25.75 27.5449 25.75 25.75V6.25C25.75 4.45507 24.2949 3 22.5 3H9.5ZM16 25.75C16.8975 25.75 17.625 25.0225 17.625 24.125C17.625 23.2275 16.8975 22.5 16 22.5C15.1025 22.5 14.375 23.2275 14.375 24.125C14.375 25.0225 15.1025 25.75 16 25.75Z" fill="white"/>
    </svg>
  );
}
