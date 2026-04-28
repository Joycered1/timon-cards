'use client';

import Image from 'next/image';
import styles from './Footer.module.css';
import { useModal } from '@/context/ModalContext';

/*
 * 12 cards: blue → black → illustration per logo group
 * Group 1 Visa | Group 2 Mastercard | Group 3 Verve | Group 4 Afrigo
 */
const CARDS = [
  { src: '/images/cards/skyflyer-visa.png',   name: 'Voyager Physical',      desc: 'Standard contactless card with black matte finish.' },
  { src: '/images/cards/black-visa.png',      name: 'Rove Physical',         desc: 'Premium metallic card for frequent travellers.' },
  { src: '/images/cards/horizon-visa.png',    name: 'Ace Physical',          desc: 'Elite card with exclusive travel rewards.' },
  { src: '/images/cards/skyflyer-mc.png',     name: 'Voyager Mastercard',    desc: 'Standard contactless card with black matte finish.' },
  { src: '/images/cards/black-mc.png',        name: 'Rove Mastercard',       desc: 'Premium metallic card for frequent travellers.' },
  { src: '/images/cards/horizon-mc.png',      name: 'Ace Mastercard',        desc: 'Elite card with exclusive travel rewards.' },
  { src: '/images/cards/skyflyer-verve.png',  name: 'Voyager Verve',         desc: 'Standard contactless card with black matte finish.' },
  { src: '/images/cards/black-verve.png',     name: 'Rove Verve',            desc: 'Premium metallic card for frequent travellers.' },
  { src: '/images/cards/horizon-verve.png',   name: 'Ace Verve',             desc: 'Elite card with exclusive travel rewards.' },
  { src: '/images/cards/skyflyer-afrigo.png', name: 'Voyager Afrigo',        desc: 'Standard contactless card with black matte finish.' },
  { src: '/images/cards/black-afrigo.png',    name: 'Rove Afrigo',           desc: 'Premium metallic card for frequent travellers.' },
  { src: '/images/cards/horizon-afrigo.png',  name: 'Ace Afrigo',            desc: 'Elite card with exclusive travel rewards.' },
];

/*
 * Carousel maths (phone inner = 304px):
 *   Slide width:  188px
 *   Gap:           12px  → step = 200px
 *   Centre offset:  58px  → initial translateX(-58px) centres card 1
 *   Left/right peek: (304 - 188) / 2 - 6 ≈ 52px each
 *   Loop: 12 slides → animate by -(12 × 200px) = -2400px
 */

export default function Footer() {
  const { openModal } = useModal();
  return (
    <footer className={styles.footer}>
      <div className={styles.brickWrap} aria-hidden="true">
        <Image src="/images/hero-brick-bg.png" alt="" width={1132} height={683}
          className={styles.brickImg} />
      </div>

      {/* ── CTA ─────────────────────────────── */}
      <div className={styles.cta}>
        <h2 className={styles.ctaTitle}>Get your Timon card today.</h2>
        <p className={styles.ctaBody}>
          Join 50,000+ travellers who have upgraded their journey.<br />
          No payment stress, just rewards.
        </p>
        <div className={styles.buttons}>
          <button onClick={openModal} className={styles.btn}><GooglePlayIcon /> Google Play</button>
          <button onClick={openModal} className={styles.btn}><AppStoreIcon /> App Store</button>
        </div>
      </div>

      {/* ── Phone ────────────────────────────── */}
      <div className={styles.phoneSection}>
        <div className={styles.phone}>

          {/* Dynamic island */}
          <div className={styles.island} aria-hidden="true" />

          {/* Side buttons */}
          <div className={styles.volUp}   aria-hidden="true" />
          <div className={styles.volDown} aria-hidden="true" />
          <div className={styles.power}   aria-hidden="true" />

          {/* White app screen */}
          <div className={styles.screen}>

            {/* Status bar */}
            <div className={styles.statusBar}>
              <span className={styles.time}>10:16</span>
              <span className={styles.statusIcons}>
                <SignalIcon /><WifiSIcon /><BattSIcon />
              </span>
            </div>

            {/* Title */}
            <h3 className={styles.screenTitle}>Global and Local Cards</h3>

            {/* Tabs */}
            <div className={styles.tabs}>
              <span className={`${styles.tab} ${styles.tabActive}`}>
                <Image width={22} height={18} src="/card-active.svg" alt="card" /> Physical
              </span>
              <span className={styles.tab}>
              <Image width={22} height={18} src="/card-inactive.svg" alt="card" /> Virtual
              </span>
            </div>

            {/* Card carousel — 3 visible, no mask, centred */}
            <div className={styles.carouselOuter}>
              <div className={styles.carouselTrack}>
                {[...CARDS, ...CARDS].map((card, i) => (
                  <div key={i} className={styles.slide}>
                    <Image
                      src={card.src}
                      alt={card.name}
                      width={246}
                      height={391}
                      className={styles.cardImg}
                      sizes="188px"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Card info */}
            <p className={styles.cardName}>Timon cards</p>
            <p className={styles.cardDesc}>Physical and virtual cards available for all types of payments</p>
            <button onClick={openModal} className={styles.detailsBtn}>Buy a card</button>

          </div>
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────── */}
      <div className={styles.bar}>
        <div className={styles.barRow}>
          <a href="/" aria-label="Timon home">
            <Image src="/images/logo.svg" alt="Timon" width={100} height={21} />
          </a>
          <p className={styles.copyright}>© 2026 All rights reserved. Timon Travel Technology Limited</p>
          <div className={styles.socials}>
            <a href="#" aria-label="X"><XIcon /></a>
            <a href="#" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
          </div>
        </div>
        <p className={styles.disclaimer}>
          Timon is a travel payments technology company, not a bank. All services are provided through
          our licensed partners. The Timon card program and its features are strictly limited to the
          services supported by our card partner. Non-card services, including Global Wallets and
          Transfers, are provided solely by other Timon licensed partners and are not part of, or
          integrated with, the Timon card program.
        </p>
      </div>
    </footer>
  );
}

/* ── App icons (status bar) ─────────────────── */
function SignalIcon() {
  return (
    <svg width="17" height="12" viewBox="0 0 17 12" fill="none" aria-hidden="true">
      <rect x="0"  y="7" width="3" height="5" rx="1" fill="#111827"/>
      <rect x="4"  y="5" width="3" height="7" rx="1" fill="#111827"/>
      <rect x="8"  y="3" width="3" height="9" rx="1" fill="#111827"/>
      <rect x="12" y="0" width="3" height="12" rx="1" fill="#111827"/>
    </svg>
  );
}
function WifiSIcon() {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
      <path d="M8 10a1 1 0 110 2 1 1 0 010-2z" fill="#111827"/>
      <path d="M8 7a3.5 3.5 0 012.5 1l1-1A5 5 0 008 5.5 5 5 0 004.5 7l1 1A3.5 3.5 0 018 7z" fill="#111827"/>
      <path d="M8 4a7 7 0 014.9 2l1-1A8.5 8.5 0 008 2.5 8.5 8.5 0 002.1 5l1 1A7 7 0 018 4z" fill="#111827"/>
    </svg>
  );
}
function BattSIcon() {
  return (
    <svg width="25" height="12" viewBox="0 0 25 12" fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="#111827" strokeOpacity=".4"/>
      <rect x="2" y="2" width="17" height="8" rx="2" fill="#111827"/>
      <path d="M23 4v4a2 2 0 000-4z" fill="#111827" opacity=".4"/>
    </svg>
  );
}

/* ── Tab icons ──────────────────────────────── */
function CardTabIcon({ active }: { active?: boolean }) {
  const c = active ? '#1565fc' : '#9ca3af';
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
      <rect x="0" y="0" width="16" height="12" rx="2" stroke={c} strokeWidth="1.5"/>
      <rect x="0" y="4" width="16" height="3" fill={c}/>
    </svg>
  );
}
function VirtualTabIcon() {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
      <rect x="0" y="0" width="16" height="12" rx="2" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="3 2"/>
    </svg>
  );
}

/* ── Footer icons ───────────────────────────── */
function GooglePlayIcon() {
  return <svg width="20" height="22" viewBox="0 0 20 22" fill="none" aria-hidden="true"><path d="M1 1.5L11.5 11L1 20.5V1.5Z" fill="white" stroke="white" strokeWidth="0.5"/><path d="M1 1.5L14.5 8L11.5 11L1 1.5Z" fill="#A8D8A8"/><path d="M1 20.5L11.5 11L14.5 14L1 20.5Z" fill="#F4A460"/><path d="M14.5 8L18.5 10.2C19.2 10.6 19.2 11.4 18.5 11.8L14.5 14L11.5 11L14.5 8Z" fill="#FF6B6B"/></svg>;
}
function AppStoreIcon() {
  return <svg width="22" height="26" viewBox="0 0 22 26" fill="none" aria-hidden="true"><path d="M18.5 13.8C18.5 10.8 20.5 9.3 20.6 9.2C19.4 7.4 17.5 7.2 16.8 7.1C15.2 6.9 13.7 8 12.9 8C12.1 8 10.8 7.1 9.5 7.1C7.7 7.2 6 8.1 5.1 9.7C3.2 12.9 4.6 17.7 6.5 20.4C7.4 21.7 8.5 23.2 9.9 23.1C11.3 23.1 11.8 22.2 13.4 22.2C15 22.2 15.4 23.1 16.9 23.1C18.4 23.1 19.3 21.8 20.2 20.5C21.2 19 21.6 17.6 21.6 17.5C21.5 17.5 18.5 16.3 18.5 13.8Z" fill="white"/><path d="M15.7 5.2C16.4 4.3 16.9 3 16.7 1.8C15.6 1.8 14.3 2.5 13.5 3.4C12.8 4.2 12.2 5.6 12.4 6.8C13.6 6.8 14.9 6.1 15.7 5.2Z" fill="white"/></svg>;
}
function XIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
}
function InstagramIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/></svg>;
}
function LinkedInIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>;
}
