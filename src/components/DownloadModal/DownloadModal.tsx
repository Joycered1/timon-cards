'use client';

import { useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './DownloadModal.module.css';
import { useModal } from '@/context/ModalContext';

const APP_STORE_URL  = 'https://apps.apple.com/ng/app/timon-money-app-for-travellers/id6477709729';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.timonemobile';

export default function DownloadModal() {
  const { open, closeModal } = useModal();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, closeModal]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={closeModal}
        >
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <button className={styles.close} onClick={closeModal} aria-label="Close">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M1 1l10 10M11 1L1 11" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Body */}
            <div className={styles.body}>
              <h2 className={styles.heading}>Scan this with your phone</h2>
              <p className={styles.sub}>
                Point your camera at the QR code below. You'll be redirected to
                App Store or Google Play to download Timon App
              </p>

              {/* QR code with blue corner brackets */}
              <div className={styles.qrOuter}>
                <span className={`${styles.corner} ${styles.cornerTL}`} />
                <span className={`${styles.corner} ${styles.cornerTR}`} />
                <span className={`${styles.corner} ${styles.cornerBL}`} />
                <span className={`${styles.corner} ${styles.cornerBR}`} />
                <QRCodeSVG
                  value={PLAY_STORE_URL}
                  size={160}
                  level="M"
                  fgColor="#111111"
                  bgColor="#ffffff"
                />
              </div>
            </div>

            {/* Footer bar */}
            <div className={styles.footer}>
              <div className={styles.storeButtons}>
                <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className={styles.storeBtn}>
                  <GooglePlayIcon /> Google Play
                </a>
                <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={styles.storeBtn}>
                  <AppleIcon /> App Store
                </a>
              </div>

              <div className={styles.contact}>
                <a href="mailto:hello@timon.cards" className={styles.email}>hello@timon.cards</a>
                <div className={styles.socials}>
                  <a href="#" aria-label="Facebook"  className={styles.socialBtn}><FacebookIcon /></a>
                  <a href="#" aria-label="X"         className={styles.socialBtn}><XIcon /></a>
                  <a href="#" aria-label="Instagram" className={styles.socialBtn}><InstagramIcon /></a>
                  <a href="#" aria-label="LinkedIn"  className={styles.socialBtn}><LinkedInIcon /></a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function GooglePlayIcon() {
  return (
    <svg width="16" height="18" viewBox="0 0 20 22" fill="none" aria-hidden="true">
      <path d="M1 1.5L11.5 11L1 20.5V1.5Z" fill="white" stroke="white" strokeWidth="0.5"/>
      <path d="M1 1.5L14.5 8L11.5 11L1 1.5Z" fill="#A8D8A8"/>
      <path d="M1 20.5L11.5 11L14.5 14L1 20.5Z" fill="#F4A460"/>
      <path d="M14.5 8L18.5 10.2C19.2 10.6 19.2 11.4 18.5 11.8L14.5 14L11.5 11L14.5 8Z" fill="#FF6B6B"/>
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="15" height="18" viewBox="0 0 22 26" fill="none" aria-hidden="true">
      <path d="M18.5 13.8C18.5 10.8 20.5 9.3 20.6 9.2C19.4 7.4 17.5 7.2 16.8 7.1C15.2 6.9 13.7 8 12.9 8C12.1 8 10.8 7.1 9.5 7.1C7.7 7.2 6 8.1 5.1 9.7C3.2 12.9 4.6 17.7 6.5 20.4C7.4 21.7 8.5 23.2 9.9 23.1C11.3 23.1 11.8 22.2 13.4 22.2C15 22.2 15.4 23.1 16.9 23.1C18.4 23.1 19.3 21.8 20.2 20.5C21.2 19 21.6 17.6 21.6 17.5C21.5 17.5 18.5 16.3 18.5 13.8Z" fill="white"/>
      <path d="M15.7 5.2C16.4 4.3 16.9 3 16.7 1.8C15.6 1.8 14.3 2.5 13.5 3.4C12.8 4.2 12.2 5.6 12.4 6.8C13.6 6.8 14.9 6.1 15.7 5.2Z" fill="white"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}
